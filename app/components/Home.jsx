import React from 'react';
import { Link } from 'react-router';
import { Button, Carousel, CarouselItem } from 'react-bootstrap';

export default () => (
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-md-8 col-md-offset-2 intro">
				<img alt="900x500" style={{ width: '100%' }} src="/images/iyc2.png" />
				<div className="about">
					<h3> It’s LIT! </h3>
					<p>And yes, I just said that. </p>

					<p>
						Welcome to the International Youth Conference Website, where are
						young people are: Lead by Christ, Ignited by his blood, and
						Transformed to be effective believers and leaders in ministry and
						the world around us (That's the definition of LIT- Lead, Ignite,
						Transform). I’m so excited that you now have a virtual glimpse into
						all things IYC, here you will find information pertaining to our
						annual Conference, Youth Events held at our sister churches, and
						teachings and lesson plans to help grow your youth group. To the
						Youth Leader - Welcome Home! To the Young Person - Welcome Home! To
						the Young at Heart - Welcome Home! It is my prayer that this site
						will grow and bless you in ways you never prayed possible!
						<p>Yours In His Service,</p>
						<p>Xavius “Robbie” Robinson</p>
						<p>International Youth Conference President & Executive Chairman</p>
						<p>#BeYeLIT</p>
					</p>
				</div>
			</div>
		</div>
	</div>
);
