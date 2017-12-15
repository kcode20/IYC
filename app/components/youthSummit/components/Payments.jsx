import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Link, browserHistory } from 'react-router';
import { paypalSandboxKey, paypalProductionKey } from 'APP/secrets';
import { Button } from 'react-bootstrap';
import { formValueSelector } from 'redux-form';

const YOUTH_SUMMIT_PRICE = 10.0;
const values = formValueSelector('YouthSummitRegistration');

export class Payments extends React.Component {
	constructor() {
		super();
		this.onSuccess = this.onSuccess.bind(this);
		this.onCancel = this.onCancel.bind(this);
		this.onError = this.onError.bind(this);
		this.state = {
			issue: {
				exists: false,
				reason: null,
			},
			complete: false,
		};
	}

	onSuccess(payment) {
		this.setState({ complete: true });
	}

	onCancel(data) {
		// User pressed "cancel" or close Paypal's popup!
		this.setState({ issue: { exists: true, reason: 'canceled' } });
		// You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
	}

	onError(err) {
		// The main Paypal's script cannot be loaded or somethings block the loading of that script!
		this.setState({ issue: { exists: true, reason: 'error' } });
		// Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
		// => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
	}

	render() {
		const client = {
			sandbox: paypalSandboxKey,
			production: paypalProductionKey,
		};
		const { handleSubmit, handleBack } = this.props;
		console.log(values);
		return (
			<form className="container" onSubmit={handleSubmit}>
				<div className="row justify-content-center">
					<div className="col-md-6 col-md-offset-3 jumbotron">
						{this.state.issue.exists &&
						this.state.issue.reason === 'canceled' ? (
							<div className="alert alert-danger" role="alert">
								{' '}
								Oops! It seems as if you canceled your payment. Please try
								again.
							</div>
						) : this.state.issue.reason === 'error' ? (
							<div className="alert alert-danger" role="alert">
								{' '}
								Oops! There was an error processing your payment. Please try
								again.{' '}
							</div>
						) : (
							''
						)}
						<h1> Complete Registration </h1>
						<PaypalExpressBtn
							client={client}
							currency={'USD'}
							total={YOUTH_SUMMIT_PRICE}
							onError={this.onError}
							onSuccess={this.onSuccess}
							onCancel={this.onCancel}
						/>
					</div>
				</div>
				<Button type="button" className="previous" onClick={handleBack}>
					Previous
				</Button>
				<Button bsStyle="primary" type="submit" className="submit">
					Submit
				</Button>
			</form>
		);
	}
}

export default reduxForm({
	form: 'YouthSummitRegistration', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(Payments);
