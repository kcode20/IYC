import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import validate from './validate';

const EventDetails = ({ handleSubmit }) => (
	<form onSubmit={handleSubmit}>
		<Grid>
			<Col xs={6} md={4}>
				Event Details
			</Col>
			<Col xs={12} md={8}>
				Youth Leader’s Summit (formerly known as the Youth Leader’s Meeting)
				We’re so excited about the International Youth Conference 2018! This
				year Youth Workers, Youth Leaders, Ministers, Pastors, and other
				attendees are asked to register for this year’s “Youth Leader’s Summit”.
				There is a registration price of $10. A portion of the registration
				proceeds will be sent to help aid in the recovery efforts in the Virgin
				Islands.
			</Col>
		</Grid>
		<div>
			<Button bsStyle="primary" type="submit" className="next">
				Next
			</Button>
		</div>
	</form>
);
export default reduxForm({
	form: 'YouthSummitRegistration', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(EventDetails);
