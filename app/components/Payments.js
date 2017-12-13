import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { Link, browserHistory } from 'react-router';
import { paypalSandboxKey, paypalProductionKey } from 'APP/secrets';

const YOUTH_SUMMIT_PRICE = 10.0;

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
		};
	}

	onSuccess(payment) {
		const { updatePayment } = this.props;
		updatePayment(this.props.registrant.id, true).then(payment => {
			browserHistory.push('/home');
		});
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
		return (
			<div className="container">
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
			</div>
		);
	}
}

import { connect } from 'react-redux';
import { updatePayment } from 'APP/app/reducers/registrant';

const mapDispatchToProps = function(dispatch) {
	return {
		updatePayment: function(id, payment) {
			return dispatch(updatePayment(id, payment));
		},
	};
};

const mapStateToProps = function(state) {
	return {
		registrant: state.registrant,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);
