'use client';

import React, { useRef, useState, useEffect } from 'react';
import PageWrapper from '@/components/layouts/PageWrapper/PageWrapper';
import { useFormik } from 'formik';
import Container from '@/components/layouts/Container/Container';
import AIChatContainerCommon from '@/app/[locale]/ai/_common/AIChatContainer.common';
import AIChatItemContainerCommon from '@/app/[locale]/ai/_common/AIChatItemContainer.common';
import Button from '@/components/ui/Button';
import LoaderDotsCommon from '@/components/LoaderDots.common';
import AIChatInputContainerCommon from '@/app/[locale]/ai/_common/AIChatInputContainer.common';
import FieldWrap from '@/components/form/FieldWrap';
import Input from '@/components/form/Input';
import { ASSISTANT, CREATED, FAILED, PENDING, SUCCESSFUL, SYSTEM, USER } from '@/constant';
import Subheader, { SubheaderRight } from '@/components/layouts/Subheader/Subheader';
import { replaceObjectApiCall } from '@/apiCalls/ai-demos/replaceObjectApiCall';
import Image from 'next/image';

const ChatPhotoClient = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const hiddenContextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [lineWidth, setLineWidth] = useState(30); // State for line width
    const [prompt, setPrompt] = useState(""); // State for prompt

    useEffect(() => {
        const canvas = canvasRef.current;
        const hiddenCanvas = hiddenCanvasRef.current;
        if (canvas && hiddenCanvas) {
            const parent = canvas.parentElement;
            if (parent) {
                const style = getComputedStyle(parent);
                const width = parseInt(style.width, 10);
                const height = parseInt(style.height, 10);

                const scale = window.devicePixelRatio || 1;
                canvas.width = width * scale;
                canvas.height = height * scale;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;

                hiddenCanvas.width = width * scale;
                hiddenCanvas.height = height * scale;
                hiddenCanvas.style.width = `${width}px`;
                hiddenCanvas.style.height = `${height}px`;

                const context = canvas.getContext('2d');
                const hiddenContext = hiddenCanvas.getContext('2d');
                if (context && hiddenContext) {
                    context.scale(scale, scale);
                    context.lineCap = 'round'; // Set line cap to round
                    context.lineJoin = 'round'; // Set line join to round
                    context.strokeStyle = 'white'; // Set stroke color to white
                    context.lineWidth = lineWidth; // Set initial line width
                    context.fillStyle = '#D3D3D3'; // Set background to light grey
                    context.fillRect(0, 0, canvas.width / scale, canvas.height / scale); // Fill canvas with light grey background
                    contextRef.current = context;

                    hiddenContext.scale(scale, scale);
                    hiddenContext.lineCap = 'round'; // Set line cap to round
                    hiddenContext.lineJoin = 'round'; // Set line join to round
                    hiddenContext.strokeStyle = 'white'; // Set stroke color to white
                    hiddenContext.lineWidth = lineWidth; // Set initial line width
                    hiddenContext.fillStyle = 'black'; // Set background to black
                    hiddenContext.fillRect(0, 0, hiddenCanvas.width / scale, hiddenCanvas.height / scale); // Fill canvas with black background
                    hiddenContextRef.current = hiddenContext;
                }
            }
        }
    }, [lineWidth]); // Add lineWidth to dependency array


    const startDrawing = (event) => {
        const { offsetX, offsetY } = event.nativeEvent;
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);

        hiddenContextRef.current?.beginPath();
        hiddenContextRef.current?.moveTo(offsetX, offsetY);

        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current?.closePath();
        hiddenContextRef.current?.closePath();
        setIsDrawing(false);
    };

    const draw = (event) => {
        if (!isDrawing) return;
        const { offsetX, offsetY } = event.nativeEvent;
        contextRef.current.globalCompositeOperation = 'source-over'; // Draw over the existing image
        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();

        hiddenContextRef.current.globalCompositeOperation = 'source-over'; // Draw white lines on black background
        hiddenContextRef.current?.lineTo(offsetX, offsetY);
        hiddenContextRef.current?.stroke();
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        const hiddenCanvas = hiddenCanvasRef.current;
        const hiddenContext = hiddenContextRef.current;
        if (canvas && context && hiddenCanvas && hiddenContext) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#D3D3D3'; // Set background to light grey
            context.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1)); // Fill canvas with light grey background
            
            hiddenContext.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);
            hiddenContext.fillStyle = 'black'; // Set background to black
            hiddenContext.fillRect(0, 0, hiddenCanvas.width / (window.devicePixelRatio || 1), hiddenCanvas.height / (window.devicePixelRatio || 1)); // Fill canvas with black background
        }
    };

    const canvasToBlob = (canvas) => {
        if (canvas) {
            return new Promise((resolve) => {
                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/png'); // Use PNG format to preserve transparency
            });
        }
    };

    const saveImage = async () => {
        const hiddenCanvas = hiddenCanvasRef.current;
        const blob = await canvasToBlob(hiddenCanvas);
        if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'canvas-mask.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };

    const [askGptApiStatus, setAskGptApiStatus] = useState(CREATED);
    const stopGeneratingRef = useRef(false);

    const formik = useFormik({
        onSubmit(): void | Promise<never> {
            return undefined;
        },
        initialValues: {
            textField: '',
        },
    });

    const canvasToBase64 = (canvas): string | undefined => {
        if (canvas) {
            return canvas.toDataURL('image/png').split(',')[1]; // Convert canvas to base64 and remove the prefix
        }
    };

    const sendImageToAPI = async () => {
        const visibleCanvas = canvasRef.current;
        const hiddenCanvas = hiddenCanvasRef.current;
        const base64OriginalImage = canvasToBase64(visibleCanvas);
        const base64MaskedImage = canvasToBase64(hiddenCanvas);

        if (base64OriginalImage && base64MaskedImage) {
            setAskGptApiStatus(PENDING);
            try {
                const response = await replaceObjectApiCall({
                    dataToPost: {
                        base64Original: base64OriginalImage,
                        base64Masked: base64MaskedImage,
                        prompt: prompt // Include the prompt
                    },
                });
                const imageKey = response.data.image; // Adjust according to the actual response structure
                setGeneratedImage(imageKey);
                setAskGptApiStatus(SUCCESSFUL);
            } catch (error) {
                setAskGptApiStatus(FAILED);
            }
        }
    };

    const handleDownloadImage = (base64: string) => {
        try {
            const link = document.createElement('a');
            link.href = `data:image/jpeg;base64,${base64}`;
            link.download = 'image.jpg';
            link.click();
        } catch (e) {
            // FIXME
        }
    };

    const loadImageToCanvas = (file) => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        const reader = new FileReader();
    
        reader.onload = (event) => {
            const image = new window.Image(); // Use window.Image to ensure it references the global Image constructor
            image.src = event.target.result;
            image.onload = () => {
                context?.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                context?.drawImage(image, 0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1)); // Draw the image
            };
        };
        reader.readAsDataURL(file);
    };

    // Event handler for file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            loadImageToCanvas(file);
        }
    };

    const handleLineWidthChange = (event) => {
        setLineWidth(event.target.value);
        if (contextRef.current) {
            contextRef.current.lineWidth = event.target.value; // Update line width in context
        }
        if (hiddenContextRef.current) {
            hiddenContextRef.current.lineWidth = event.target.value; // Update line width in hidden context
        }
    };

    const handlePromptChange = (event) => {
        setPrompt(event.target.value); // Update the prompt state
    };

    return (
        <PageWrapper>
            <Container className='flex shrink-0 grow basis-auto flex-col pb-0'>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', height: '60vh' }}>
                    <div style={{ border: '1px solid black' }}>
                        <canvas
                            ref={canvasRef}
                            onMouseDown={startDrawing}
                            onMouseUp={finishDrawing}
                            onMouseMove={draw}
                            style={{ width: '100%', height: '100%' }}
                        />
                        <canvas
                            ref={hiddenCanvasRef}
                            style={{ display: 'none' }}
                        />
                    </div>
                    <div style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {generatedImage ? (
                            <div style={{ width: '100%' }}>
                                <Image src={`data:image/jpeg;base64,${generatedImage}`} alt="Generated from canvas" width={700} height={700} />
                            </div>
                        ) : (
                            <p>{askGptApiStatus === PENDING ? 'Generating...' : 'No image generated'}</p>
                        )}
                    </div>
                </div>
                <div>
                    <Button
                        style={{ marginTop: '20px' }}
                        icon='save'
                        variant='solid'
                        onClick={sendImageToAPI}
                    >
                        {askGptApiStatus === PENDING ? 'Generating...' : 'Generate'}
                    </Button>
                    <Button
                        style={{ marginTop: '20px', marginLeft: '10px' }}
                        color='red'
                        variant='solid'
                        onClick={clearCanvas}
                    >
                        Clear Canvas
                    </Button>
                    <Button
                        style={{ marginTop: '20px', marginLeft: '10px' }}
                        color='red'
                        variant='solid'
                        onClick={saveImage}
                    >
                        Save Masked Image
                    </Button>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ marginTop: '20px', marginLeft: '10px' }}
                    />
                    <input
                        type="text"
                        placeholder="Enter prompt"
                        value={prompt}
                        onChange={handlePromptChange}
                        style={{ marginTop: '20px', marginLeft: '10px' }}
                    />
                </div>
                <label style={{ marginTop: '20px', marginLeft: '10px' }}>
                    Line Width:
                    <input
                        type="range"
                        min="1"
                        max="50"
                        value={lineWidth}
                        onChange={handleLineWidthChange}
                        style={{ marginLeft: '10px' }}
                    />
                </label>
            </Container>
        </PageWrapper>
    );
};

export default ChatPhotoClient;
