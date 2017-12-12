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
