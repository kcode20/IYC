import React from 'react';
import Navbar from './Navbar';
import { Carousel, CarouselItem } from 'react-bootstrap';

export default () => (
	<div className="">
		<Navbar />
		<Carousel>
			<CarouselItem>
				<img src="/images/iyc2.png" />
			</CarouselItem>
			<CarouselItem>
				<img src="/images/iyc3.png" />
			</CarouselItem>
		</Carousel>
	</div>
);
