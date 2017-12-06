import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router'
import { Button, Carousel, CarouselItem } from 'react-bootstrap';

export default () => (
	<div className="">
		<Carousel>
			<CarouselItem>
				<img className="carousel-img" alt="900x500" src="/images/iyc2.png" />
				<Carousel.Caption>
					<h3>Youth Leader's Summit 2018</h3>
					<p> February Washington D.C </p>
					<Link to="/registration"><Button bsStyle="primary" bsSize="small">Register Now</Button></Link>
				</Carousel.Caption>
			</CarouselItem>
			<CarouselItem>
				<img className="carousel-img" alt="900x500" src="/images/iyc3.png" />
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</CarouselItem>
		</Carousel>
	</div>
);
