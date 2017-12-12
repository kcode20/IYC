import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import {
	FormGroup,
	ControlLabel,
	FormControl,
	Radio,
	Grid,
	Row,
	Col,
} from 'react-bootstrap';

import Payments from './Payments';

/* Registration Form for the Youth Leaders Summit 2018 
Todo: Find default for the branchname
*/

export class YouthRegistration extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<Grid>
					<Col xs={6} md={4}>
						Event Details
					</Col>
					<Col xs={12} md={8}>
						<FormControl.Static>
							Youth Leader’s Summit (formerly known as the Youth Leader’s
							Meeting) We’re so excited about the International Youth Conference
							2018! This year Youth Workers, Youth Leaders, Ministers, Pastors,
							and other attendees are asked to register for this year’s “Youth
							Leader’s Summit”. There is a registration price of $10. A portion
							of the registration proceeds will be sent to help aid in the
							recovery efforts in the Virgin Islands.
						</FormControl.Static>
					</Col>
					<Col xs={6} md={4}>
						Personal Information
					</Col>
					<Col xs={12} md={8}>
						<div>
							<ControlLabel>Name</ControlLabel>
							<Field
								name="name"
								placeholder="John Doe"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>Email</ControlLabel>
							<Field
								name="email"
								placeholder="email@example.com"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>Mailing Address</ControlLabel>
							<Field
								name="mailing"
								placeholder="123 Ocean St."
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>Home Phone</ControlLabel>
							<Field
								name="homephone"
								placeholder="123-456-7890"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>Cell Phone</ControlLabel>
							<Field
								name="homephone"
								placeholder="123-456-7890"
								component={FormControl}
								type="text"
							/>
						</div>
					</Col>

					<Col xs={6} md={4}>
						Church Information
					</Col>
					<Col xs={12} md={8}>
						<div>
							<ControlLabel>Branch Church</ControlLabel>
							<Field
								name="church"
								placeholder="Branch 2"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>Pastor's Name</ControlLabel>
							<Field
								name="pastor"
								placeholder="Pastor John Doe"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>
								Are You A Youth Leader or Youth Worker
							</ControlLabel>
							<div>
								<Field
									name="workertype"
									component={Radio}
									type="radio"
									value="Youth Leader"
								/>{' '}
								Youth Leader
								<Field
									name="workertype"
									component={Radio}
									type="radio"
									value="Youth Worker"
								/>{' '}
								Youth Worker
							</div>
						</div>
						<div>
							<ControlLabel>How Many Youth Do You Lead?</ControlLabel>
							<Field
								name="lead"
								placeholder="#"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>What auxiliaries do you have?</ControlLabel>
							<Field
								name="auxilary"
								placeholder="Orchestra, Choir, Outreach"
								component={FormControl}
								type="text"
							/>
						</div>
					</Col>
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
								componentClass="textarea"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>
								List three things you wish to improve upon as a youth leader.
							</ControlLabel>
							<Field
								name="improvements"
								componentClass="textarea"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>Did you attend IYC 2017?</ControlLabel>
							<Field
								name="attendance"
								component={Radio}
								type="radio"
								value="Yes"
							/>
							Yes
							<Field
								name="attendance"
								component={Radio}
								type="radio"
								value="No"
							/>
							No
						</div>
						<div>
							<ControlLabel>
								What was one thing you enjoyed about IYC 2017?
							</ControlLabel>
							<Field
								name="enjoy_iyc"
								componentClass="textarea"
								component={FormControl}
								type="text"
							/>
						</div>
						<div>
							<ControlLabel>
								If you could suggest one thing to the IYC Committee for 2018
								what would it be?
							</ControlLabel>
							<Field
								name="suggestions_iyc"
								componentClass="textarea"
								component={FormControl}
								type="text"
							/>
						</div>
					</Col>
					<button type="submit">Submit</button>
				</Grid>
			</form>
		);
	}
}

import { connect } from 'react-redux';
import { register } from 'APP/app/reducers/registrant';

const mapDispatchToProps = function(dispatch) {};
const YouthRegistrationForm = reduxForm({ form: 'YouthLeaderRegistration' })(
	YouthRegistration
);

export default connect(null, mapDispatchToProps)(YouthRegistrationForm);
