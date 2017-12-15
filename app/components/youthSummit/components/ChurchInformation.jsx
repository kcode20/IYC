import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col, ControlLabel, Button } from 'react-bootstrap';

const ChurchInformation = ({ handleSubmit, handleBack }) => (
	<form onSubmit={handleSubmit}>
		<Grid>
			<Col xs={6} md={4}>
				Church Information
			</Col>
			<Col xs={12} md={8}>
				<div>
					<ControlLabel>Branch Church</ControlLabel>
					<Field
						name="church"
						placeholder="Branch 2"
						className="form-control"
						component="input"
						type="text"
					/>
				</div>
				<div>
					<ControlLabel>Pastor's Name</ControlLabel>
					<Field
						name="pastor"
						placeholder="Pastor John Doe"
						className="form-control"
						component="input"
						type="text"
					/>
				</div>
				<div>
					<ControlLabel>Are You A Youth Leader or Youth Worker?</ControlLabel>
					<div>
						<Field
							name="role"
							component="input"
							type="radio"
							value="Youth Leader"
						/>Youth Leader
						<Field
							name="role"
							component="input"
							type="radio"
							value="Youth Worker"
						/>Youth Worker
					</div>
				</div>
				<div>
					<ControlLabel>How Many Youth Do You Lead?</ControlLabel>
					<Field
						name="lead"
						placeholder="#"
						className="form-control"
						component="input"
						type="text"
					/>
				</div>
				<div>
					<ControlLabel>What auxiliaries do you have?</ControlLabel>
					<Field
						name="auxilary"
						placeholder="Orchestra, Choir, Outreach"
						className="form-control"
						component="input"
						type="text"
					/>
				</div>
			</Col>
		</Grid>
		<Button type="button" className="previous" onClick={handleBack}>
			Previous
		</Button>
		<Button bsStyle="primary" type="submit" className="next">
			Next
		</Button>
	</form>
);

export default reduxForm({
	form: 'YouthSummitRegistration', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(ChurchInformation);
