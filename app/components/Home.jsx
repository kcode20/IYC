import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router';
import { Button, Carousel, CarouselItem } from 'react-bootstrap';

export default () => (
	<div>
		<Carousel>
			<CarouselItem>
				<img
					className="carousel-img justify-content-center"
					alt="900x500"
					src="/images/iyc2.png"
				/>
				<Carousel.Caption>
					<h3>IYC 2018</h3>
					<p>August 26 - September 2</p>
				</Carousel.Caption>
			</CarouselItem>
			<CarouselItem>
				<img className="carousel-img" alt="900x500" src="/images/Leader.jpg" />
				<Carousel.Caption>
					<h3>Youth Leader's Summit 2018</h3>
					<p>February, Washington D.C</p>
					<Link to="/registration">
						<Button bsStyle="primary" bsSize="small">
							Register Now
						</Button>
					</Link>
				</Carousel.Caption>
			</CarouselItem>
		</Carousel>
	</div>
);
