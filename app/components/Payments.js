import React from 'react'
import Navbar from './Navbar'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import {Link, browserHistory} from 'react-router';

export class Payments extends React.Component {

	render(){
		const client = {
	            sandbox:    'AWzrvEgSK4eh_SPkMxR4TVhQ_kA3ZtUsFf2vOB2YSyoLa2SF9Hq9_bAs78DQJvwGMyPjmCTL2YONB2Z7',
	            production: 'AaXmoxzFwd0HRcUAEnVPtjadkuDkaIFWkC0GrD8rxwHd2AueK5VHs2azee3fieppk9t7XHPu-lkzAdXA',
	        }
		const onSuccess = (payment) => {
	        // Congratulation, it came here means everything's fine!
	        //TODO: Update Payment, then reroute to another page.
	        console.log('this is the successful registrant', this.props.registrant)
	        this.props.updatePayment(this.props.registrant.id, true);
	        //browserHistory.push('/home');
	        // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
	    }

	    const onCancel = (data) => {
	        // User pressed "cancel" or close Paypal's popup!
	        console.log('The payment was cancelled!', data);
	        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
	    }

	    const onError = (err) => {
	        // The main Paypal's script cannot be loaded or somethings block the loading of that script!
	        console.log("Error!", err);
	        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
	        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
	    }
	    console.log(this.props.registrant)
		return (
			<div className="container">
				<Navbar/>
				<div className="row justify-content-center">
                	<div className="col-md-6 col-md-offset-3 jumbotron">
                		<h1> Complete Registration </h1>
						<PaypalExpressBtn client={client} currency={'USD'} total={0.01} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                    </div>
                </div>
			</div>
		)
	}
}

import {connect} from 'react-redux'
import {updatePayment} from 'APP/app/reducers/registrant'

const mapDispatchToProps= function (dispatch) {
  return {
    updatePayment: function (id, payment) {
      dispatch(updatePayment(id, payment));
    }
  };
};

const mapStateToProps= function (state) {
	return{
		registrant: state.registrant
	}
}

export default connect (mapStateToProps, mapDispatchToProps)(Payments)