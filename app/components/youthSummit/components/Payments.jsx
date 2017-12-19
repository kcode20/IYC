import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Link, browserHistory } from 'react-router';
import { paypalSandboxKey, paypalProductionKey } from 'APP/secrets';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import { formValueSelector } from 'redux-form';

const YOUTH_SUMMIT_PRICE = 20.0;
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
		console.log(this.props.values);
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
			<form onSubmit={handleSubmit}>
				<Grid className="row" fluid={true}>
					<Col xs={12} md={8}>
						<div className="chunk">
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
							{this.state.complete && (
								<div className="alert alert-success" role="alert">
									Your payment was recieved! Please press submit to complete
									your registration.
								</div>
							)}
							<h3> Complete Registration </h3>
							<p>
								Registration will be $20 and this is to include lunch onsite. A
								portion of the registration proceeds will be sent to help aid in
								the recovery efforts in the Virgin Islands.
							</p>
							<p> Click the button below to complete your payment </p>
							{!this.state.complete && (
								<PaypalExpressBtn
									client={client}
									currency={'USD'}
									total={YOUTH_SUMMIT_PRICE}
									onError={this.onError}
									onSuccess={this.onSuccess}
									onCancel={this.onCancel}
									env="production"
									style={{
										label: 'paypal',
										size: 'medium',
										shape: 'rect',
										color: 'blue',
										tagline: false,
									}}
								/>
							)}
						</div>
						<Field
							name="payment_recieved"
							className="form-control"
							component="input"
							value={this.state.complete}
							type="hidden"
						/>
						<Col md={6}>
							{!this.state.complete && (
								<Button type="button" className="previous" onClick={handleBack}>
									Previous
								</Button>
							)}
						</Col>
						<Col md={6}>
							{this.state.complete && (
								<Button
									bsStyle="primary"
									type="submit"
									align="right"
									className="next"
								>
									Submit
								</Button>
							)}
						</Col>
					</Col>
				</Grid>
			</form>
		);
	}
}

export default reduxForm({
	form: 'YouthSummitRegistration', // <------ same form name
	destroyOnUnmount: false, // <------ preserve form data
	forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(Payments);
