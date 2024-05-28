import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import WaveSurfer, { WaveSurferOptions } from 'wavesurfer.js';
import colors from 'tailwindcss/colors';
import Button from './ui/Button';
import themeConfig from '../config/theme.config';

const useWavesurfer = (containerRef: RefObject<HTMLDivElement>, options: WaveSurferOptions) => {
	const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);

	// Initialize wavesurfer when the container mounts
	// or any of the props change
	useEffect(() => {
		// @ts-ignore
		if (!containerRef?.current) return;

		const ws: WaveSurfer = WaveSurfer.create({
			...options,
			// @ts-ignore
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			container: containerRef.current,
		});

		setWavesurfer(ws);

		// eslint-disable-next-line consistent-return
		return () => {
			ws.destroy();
		};
	}, [options, containerRef]);

	return wavesurfer;
};

const WaveSurferPlayer = (props: WaveSurferOptions) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [currentTime, setCurrentTime] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const wavesurfer = useWavesurfer(containerRef, props);

	// On play button click
	const onPlayClick = useCallback(() => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		wavesurfer?.isPlaying() ? wavesurfer.pause() : wavesurfer?.play();
	}, [wavesurfer]);

	// Initialize wavesurfer when the container mounts
	// or any of the props change
	useEffect(() => {
		if (!wavesurfer) return;

		setCurrentTime(0);
		setIsPlaying(false);

		const subscriptions = [
			wavesurfer.on('play', () => setIsPlaying(true)),
			wavesurfer.on('pause', () => setIsPlaying(false)),
			wavesurfer.on('timeupdate', (time) => setCurrentTime(time)),
			wavesurfer.on('ready', () => setDuration(wavesurfer.getDuration())),
		];

		// eslint-disable-next-line consistent-return
		return () => {
			subscriptions.forEach((unsub) => unsub());
		};
	}, [wavesurfer]);

	const formatTime = (seconds: number): string => {
		const minutes = Math.floor(seconds / 60);
		const secondsRemainder = Math.round(seconds) % 60;
		const paddedSeconds = `0${secondsRemainder}`.slice(-2);
		return `${minutes}:${paddedSeconds}`;
	};

	return (
		<>
			<div className='flex items-center rounded-lg bg-zinc-950/10 dark:bg-zinc-950'>
				<div className='grow p-4'>
					<Button
						variant='solid'
						rounded='rounded-full'
						color={isPlaying ? 'amber' : 'emerald'}
						icon={isPlaying ? 'HeroPause' : 'HeroPlay'}
						onClick={onPlayClick}
					/>
				</div>
				<div className='w-full grow'>
					<div ref={containerRef} className='h-full' />
				</div>
			</div>
			<div className='mt-2 flex text-xs text-zinc-500'>
				<div className='grow'>{formatTime(currentTime)}</div>
				<div className='flex-shrink-0'>{wavesurfer && formatTime(duration)}</div>
			</div>
		</>
	);
};
WaveSurferPlayer.defaultProps = {
	barWidth: 5,
	barGap: 2,
	barRadius: 5,
	cursorWidth: 0,
	height: 80,
	waveColor: `${colors.zinc['500']}d1`,
	progressColor: colors[themeConfig.themeColor]['500'],
};

export default WaveSurferPlayer;
