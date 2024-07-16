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
import { generateImageApiCall } from '@/apiCalls/ai-demos/generateImageApiCall';
import { sketchToImageApiCall } from '@/apiCalls/ai-demos/sketchToImageApiCall';
import Image from 'next/image';
import { generateImageVariationApiCall } from '@/apiCalls/ai-demos/generateImageVariationApiCall';

const ChatPhotoClient = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
	const [generatedImage, setGeneratedImage] = useState<string | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
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

                const context = canvas.getContext('2d');
                if (context) {
                    context.scale(scale, scale);
                    context.lineCap = 'round';
                    context.strokeStyle = 'black';
                    context.lineWidth = 5;
                    context.fillStyle = '#D3D3D3'; // Set background to light grey
                    context.fillRect(0, 0, canvas.width / scale, canvas.height / scale); // Fill canvas with light grey background
                    contextRef.current = context;
                }
            }
        }
    }, []);


    const startDrawing = (event) => {
        const { offsetX, offsetY } = event.nativeEvent;
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
		console.log('0000')
        contextRef.current?.closePath();
        setIsDrawing(false);
    };

    const draw = (event) => {
		console.log('draw')
        if (!isDrawing) return;
        const { offsetX, offsetY } = event.nativeEvent;
        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();
    };

    const drawOnCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Example drawing on canvas
                ctx.fillStyle = 'blue';
                ctx.fillRect(50, 50, 200, 200);
                ctx.fillStyle = 'red';
                ctx.beginPath();
                ctx.arc(150, 150, 50, 0, 2 * Math.PI);
                ctx.fill();
                console.log('Canvas drawn'); // Debugging log
            }
        }
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        const context = contextRef.current;
        if (canvas && context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#D3D3D3'; // Set background to light grey
            context.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1)); // Fill canvas with light grey background
        }
    };

	const canvasToBlob = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            return new Promise((resolve) => {
                canvas.toBlob((blob) => {
                    resolve(blob);
                }, 'image/jpeg');
            });
        }
    };

	const saveImage = async () => {
        const blob = await canvasToBlob();
        if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'canvas-image.jpg';
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

	const canvasToBase64 = (): string | undefined => {
        const canvas = canvasRef.current;
        if (canvas) {
            return canvas.toDataURL('image/jpeg').split(',')[1]; // Convert canvas to base64 and remove the prefix
        }
    };

	const sendImageToAPI = async () => {
        const base64Image = canvasToBase64();
        if (base64Image) {
            setAskGptApiStatus(PENDING);
            try {
                const response = await sketchToImageApiCall({
                    dataToPost: {
                        base64: base64Image,
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
						
					</div>
					<div style={{ border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						{generatedImage ? (
							<div style={{ width: '100%' }}>
								<Image src={`data:image/jpeg;base64,${generatedImage}`} alt="Generated from canvas" width={700} height={700} />
							</div>
						) : (
							<p>{ askGptApiStatus === PENDING ? 'Generating...' : 'No image generated' }</p>
						)}
					</div>
				</div>
				<div>
					<Button
						style={{ marginTop: '20px' }}
							icon='save'
							variant='solid'
							onClick={sendImageToAPI}>
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
						Save Image
					</Button>
				</div>
			</Container>
		</PageWrapper>
	);
};

export default ChatPhotoClient;
