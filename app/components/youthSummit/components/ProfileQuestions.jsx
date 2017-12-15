import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Grid, Row, Col, ControlLabel, Button } from 'react-bootstrap';

const ProfileQuestions = ({ handleSubmit, handleBack }) => (
	<form onSubmit={handleSubmit}>
		<Grid>
			<Col xs={6} md={4}>
				Profile Questions
			</Col>
			<Col xs={12} md={8}>
				<div>
					<ControlLabel>
						List three strengths you as a youth leader possess.
					</ControlLabel>
					<Field
						name="strengths"
						className="form-control"
						component="input"
						type="text"
					/>
				</div>
				<div>
					<ControlLabel>
						List three things you wish to improve upon as a youth leader.
					</ControlLabel>
					<Field
						name="improvements"
						className="form-control"
						component="input"
						type="text"
					/>
				</div>
				<div>
					<ControlLabel>Did you attend IYC 2017?</ControlLabel>
					<Field
						name="attendance_IYC2017"
						component="input"
						type="radio"
						value="Yes"
					/>Yes
					<Field
						name="attendance_IYC2017"
						component="input"
						type="radio"
						value="No"
					/>No
				</div>
				<div>
					<ControlLabel>
						What was one thing you enjoyed about IYC 2017?
					</ControlLabel>
					<Field
						name="enjoy_iyc"
						className="form-control"
						component="input"
						type="text"
					/>
				</div>
				<div>
					<ControlLabel>
						If you could suggest one thing to the IYC Committee for 2018 what
						would it be?
					</ControlLabel>
					<Field
						name="suggestions_iyc"
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
})(ProfileQuestions);
