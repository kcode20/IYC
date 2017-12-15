import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import {
	Grid,
	Row,
	Col,
	Button,
	ControlLabel,
	ProgressBar,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

import EventDetails from './components/EventDetails';
import PersonalInformation from './components/PersonalInformation';
import ChurchInformation from './components/ChurchInformation';
import ProfileQuestions from './components/ProfileQuestions';
import Payments from './components/Payments';

/* Registration Form for the Youth Leaders Summit 2018 
Todo: Find default for the branchname
*/

export class YouthRegistration extends React.Component {
	constructor(props) {
		super(props);
		this.nextPage = this.nextPage.bind(this);
		this.previousPage = this.previousPage.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = { page: 1 };
	}

	handleSubmit(e) {
		e.preventDefault();
		const { form } = this.props;
		const values = form['YouthSummitRegistration'].values;
		console.log(e, form);
		console.log('I submitted!');
		console.log(form['YouthSummitRegistration'].values);
		const google_script =
			'https://script.google.com/macros/s/AKfycbw-qw-cu1KC08Zgs1ph2dst0LfT8m7dA6oJiVw7JAgWDhl5s1o/exec';

		axios
			.get(google_script, { params: values })
			.then(response => {
				console.log('successfully got response', response);
			})
			.catch(error => {
				alert(error);
				self.setState(() => ({ submitting: false }));
			});
	}

	nextPage(evt) {
		evt.preventDefault();
		this.setState({ page: this.state.page + 1 });
	}

	previousPage() {
		this.setState({ page: this.state.page - 1 });
	}

	render() {
		const { page } = this.state;
		console.log(page);
		return (
			<div>
				<ProgressBar bsStyle="warning" now={20 * page} />
				{page === 1 && (
					<EventDetails
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 2 && (
					<PersonalInformation
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 3 && (
					<ChurchInformation
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 4 && (
					<ProfileQuestions
						handleSubmit={this.nextPage}
						handleBack={this.previousPage}
					/>
				)}
				{page === 5 && (
					<Payments
						handleSubmit={this.handleSubmit}
						handleBack={this.previousPage}
					/>
				)}
			</div>
		);
	}
}

const connectedForm = connect(({ form }) => ({ form }), null)(
	YouthRegistration
);

export default reduxForm({ form: 'YouthLeaderRegistration' })(connectedForm);
