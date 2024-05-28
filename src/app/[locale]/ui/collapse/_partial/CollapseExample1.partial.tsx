'use client';

import React, { useState } from 'react';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Collapse from '@/components/utils/Collapse';

const CollapseExample1Partial = () => {
	const [state, setState] = useState<boolean>(true);
	return (
		<Card>
			<CardBody>
				<div className='flex'>
					<div className='grow'>
						<Button
							variant='outline'
							onClick={() => setState(!state)}
							rightIcon={state ? 'HeroChevronUp' : 'HeroChevronDown'}>
							Description
						</Button>
					</div>
					{state && (
						<div className='flex-shrink-0'>
							<Button
								variant='solid'
								color='red'
								onClick={() => setState(false)}
								icon='HeroXMark'
								rounded='rounded-full'
							/>
						</div>
					)}
				</div>
				<Collapse isOpen={state}>
					<div className='pt-4 text-justify'>
						Mauris blandit urna eget nulla placerat, sed dictum augue hendrerit. Nam
						purus tellus, fermentum at hendrerit in, placerat at urna. Nunc id neque
						urna. Praesent tempor porttitor congue. Nullam scelerisque venenatis
						hendrerit. Morbi ullamcorper posuere ligula. Ut eu fermentum nunc, vel
						pharetra eros. Morbi elementum enim eu diam consectetur, vitae dictum eros
						convallis. Ut vehicula gravida massa sit amet faucibus. Orci varius natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer
						fringilla, libero at ultrices suscipit, ex ligula pretium massa, ut euismod
						turpis ipsum a ex. Aenean sit amet nibh justo. Aenean finibus urna id erat
						pulvinar, nec mollis nulla dapibus. Vivamus non nisl lacinia, mollis urna
						ac, tempus magna.
					</div>
				</Collapse>
			</CardBody>
		</Card>
	);
};

export default CollapseExample1Partial;
