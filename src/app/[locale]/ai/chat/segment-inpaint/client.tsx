'use client';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import Container from '@/components/layouts/Container/Container';
import Button from '@/components/ui/Button';

const DATA_API_ENDPOINT = 'http://127.0.0.1:5000/data';
const REPLACE_OBJECT_API_ENDPOINT = 'http://127.0.0.1:5001/replace-object';

const ChatPhotoClient = () => {
    const imageCanvasRef = useRef(null);
    const maskCanvasRef = useRef(null);
    const imageUploadRef = useRef(null);
    const promptInputRef = useRef(null);
    const popupRef = useRef(null);
    const [maskMatrix, setMaskMatrix] = useState([]);
    const [maskColors, setMaskColors] = useState([]);
    const [highlightedMaskIndex, setHighlightedMaskIndex] = useState(null);
    const [newImageBase64, setNewImageBase64] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const cellWidth = 1;
    const cellHeight = 1;

    useEffect(() => {
        const imageCanvas = imageCanvasRef.current;
        const maskCanvas = maskCanvasRef.current;
        const imageCtx = imageCanvas.getContext("2d");
        const maskCtx = maskCanvas.getContext("2d");

        const handleImageUpload = async (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = async function(e) {
                const img = new Image();
                img.onload = async function() {
                    imageCanvas.width = img.width;
                    imageCanvas.height = img.height;
                    maskCanvas.width = img.width;
                    maskCanvas.height = img.height;
                    imageCtx.drawImage(img, 0, 0);
                    await fetchMaskData(file);
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };

        const fetchMaskData = async (imageFile) => {
            const formData = new FormData();
            formData.append('image', imageFile);

            try {
                setStatusMessage('Fetching mask data...');
                const response = await fetch(DATA_API_ENDPOINT, {
                    method: 'POST',
                    body: formData
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                const newMaskMatrix = JSON.parse(result);
                setMaskMatrix(newMaskMatrix);
                setMaskColors(newMaskMatrix.map(() => getRandomColor()));
                setStatusMessage('Mask data fetched successfully.');
            } catch (error) {
                setStatusMessage('Error fetching mask data.');
                console.error('Error fetching mask data:', error);
            }
        };

        if (imageUploadRef.current) {
            imageUploadRef.current.addEventListener('change', handleImageUpload);
        }

        return () => {
            if (imageUploadRef.current) {
                imageUploadRef.current.removeEventListener('change', handleImageUpload);
            }
        };
    }, []);

    const handleMouseMove = useCallback((event) => {
        const maskCanvas = maskCanvasRef.current;
        const rect = maskCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const col = Math.floor(x / cellWidth);
        const row = Math.floor(y / cellHeight);

        let newHighlightedMaskIndex = null;
        for (let i = 0; i < maskMatrix.length; i++) {
            if (maskMatrix[i].segmentation[row] && maskMatrix[i].segmentation[row][col]) {
                newHighlightedMaskIndex = i;
                break;
            }
        }

        if (newHighlightedMaskIndex !== highlightedMaskIndex) {
            setHighlightedMaskIndex(newHighlightedMaskIndex);
            drawAllMasks();
            if (newHighlightedMaskIndex !== null) {
                drawMask(maskMatrix[newHighlightedMaskIndex].segmentation, 'rgba(255, 255, 255, 0.5)', 'white');
                showPopup(event.clientX, event.clientY);
            } else {
                hidePopup();
            }
        }
    }, [maskMatrix, highlightedMaskIndex]);

    const showPopup = (x, y) => {
        const popup = popupRef.current;
        popup.style.left = `${x + 10}px`;
        popup.style.top = `${y + 10}px`;
        popup.style.zIndex = '1000'; // Ensure the popup is in front of the canvas
        popup.style.display = 'block';
    };

    const hidePopup = () => {
        const popup = popupRef.current;
        popup.style.display = 'none';
    };

    useEffect(() => {
        const maskCanvas = maskCanvasRef.current;
        maskCanvas.addEventListener('mousemove', handleMouseMove);
        return () => {
            maskCanvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    useEffect(() => {
        if (maskMatrix.length && maskColors.length) {
            drawAllMasks();
        }
    }, [maskMatrix, maskColors]);

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = 'rgba(';
        for (let i = 0; i < 3; i++) {
            color += parseInt(letters[Math.floor(Math.random() * 16)] + letters[Math.floor(Math.random() * 16)], 16) + ', ';
        }
        color += '0.5)'; // Set the alpha value for transparency
        return color;
    };

    const drawMask = (mask, color, outlineColor) => {
        const maskCanvas = maskCanvasRef.current;
        const maskCtx = maskCanvas.getContext("2d");
        for (let row = 0; row < mask.length; row++) {
            for (let col = 0; col < mask[row].length; col++) {
                if (mask[row][col]) {
                    maskCtx.fillStyle = color;
                    maskCtx.fillRect(col * cellWidth, row * cellHeight, cellWidth, cellHeight);
                }
            }
        }
        drawMaskBoundary(mask, outlineColor);
    };

    const drawMaskBoundary = (mask, outlineColor) => {
        const maskCanvas = maskCanvasRef.current;
        const maskCtx = maskCanvas.getContext("2d");
        maskCtx.strokeStyle = outlineColor;
        maskCtx.lineWidth = 1;
        for (let row = 0; row < mask.length; row++) {
            for (let col = 0; col < mask[row].length; col++) {
                if (mask[row][col]) {
                    if (row > 0 && !mask[row - 1][col]) {
                        maskCtx.beginPath();
                        maskCtx.moveTo(col * cellWidth, row * cellHeight);
                        maskCtx.lineTo((col + 1) * cellWidth, row * cellHeight);
                        maskCtx.stroke();
                    }
                    if (row < mask.length - 1 && !mask[row + 1][col]) {
                        maskCtx.beginPath();
                        maskCtx.moveTo(col * cellWidth, (row + 1) * cellHeight);
                        maskCtx.lineTo((col + 1) * cellWidth, (row + 1) * cellHeight);
                        maskCtx.stroke();
                    }
                    if (col > 0 && !mask[row][col - 1]) {
                        maskCtx.beginPath();
                        maskCtx.moveTo(col * cellWidth, row * cellHeight);
                        maskCtx.lineTo(col * cellWidth, (row + 1) * cellHeight);
                        maskCtx.stroke();
                    }
                    if (col < mask[row].length - 1 && !mask[row][col + 1]) {
                        maskCtx.beginPath();
                        maskCtx.moveTo((col + 1) * cellWidth, row * cellHeight);
                        maskCtx.lineTo((col + 1) * cellWidth, (row + 1) * cellHeight);
                        maskCtx.stroke();
                    }
                }
            }
        }
    };

    const drawAllMasks = () => {
        const maskCanvas = maskCanvasRef.current;
        const maskCtx = maskCanvas.getContext("2d");
        maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
        for (let i = 0; i < maskMatrix.length; i++) {
            drawMask(maskMatrix[i].segmentation, maskColors[i], 'black');
        }
    };

    const sendToAPI = async () => {
        if (highlightedMaskIndex !== null) {
            const maskCanvas = maskCanvasRef.current;
            const maskCtx = maskCanvas.getContext("2d");

            // Draw the highlighted mask
            maskCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
            drawMask(maskMatrix[highlightedMaskIndex].segmentation, 'rgba(255, 255, 255, 1.0)', 'white');

            // Get the base64 data of the mask
            const maskBase64 = maskCanvas.toDataURL().split(',')[1];

            // Get the base64 data of the original image
            const originalImageBase64 = imageCanvasRef.current.toDataURL().split(',')[1];

            // Get the prompt text
            const promptText = promptInputRef.current.value;

            // Prepare the payload
            const payload = {
                base64Masked: maskBase64,
                base64Original: originalImageBase64,
                prompt: promptText
            };

            try {
                setStatusMessage('Sending data to replace-object API...');
                const response = await fetch(REPLACE_OBJECT_API_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('API response:', result);

                // Get the base64 data from the response and set it to a new image tag
                const newImageBase64 = result.image;
                setNewImageBase64(`data:image/png;base64,${newImageBase64}`);
                setStatusMessage('Object replaced successfully.');
            } catch (error) {
                setStatusMessage('Error sending data to API.');
                console.error('Error sending data to API:', error);
            }

            // Redraw all masks after sending
            drawAllMasks();
        } else {
            alert('No mask is highlighted!');
        }
    };

    return (
        <PageWrapper>
            <Container className='flex shrink-0 grow basis-auto flex-col pb-0'>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '60vh' }}>
                    <div>
                        <div style={{ position: 'relative' }}>
                        <input type="file" id="imageUpload" accept="image/*" ref={imageUploadRef} />
                            <div className="canvas-wrapper">
                                <canvas id="imageCanvas" ref={imageCanvasRef} style={{ position: 'absolute', top: 30, left: 0, border: '1px solid black' }}></canvas>
                                <canvas id="maskCanvas" ref={maskCanvasRef} style={{ position: 'absolute', top: 30, left: 0, border: '1px solid black' }}></canvas>
                            </div>
                        </div>
                    </div>
                    <div>
                        {newImageBase64 && <img src={newImageBase64} alt="New image" style={{ border: '1px solid black' }} />}
                    </div>
                    
                    <div id="popup" className="popup" ref={popupRef} style={{ display: 'none', position: 'absolute', border: '1px solid black', backgroundColor: 'grey', padding: '10px', zIndex: 1000 }}>
                        <label htmlFor="promptInput">Enter prompt:</label>
                        <input type="text" id="promptInput" ref={promptInputRef} />
                        <br />
                    <Button id="exportButton" variant='solid' className="btn btn-primary mt-3" onClick={sendToAPI}>Replace Object</Button>
                    </div>
                </div>
                <div>{statusMessage}</div>
            </Container>
        </PageWrapper>
    );
};

export default ChatPhotoClient;
