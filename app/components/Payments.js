import React from 'react'
import Navbar from './Navbar'
import PaypalExpressBtn from 'react-paypal-express-checkout';

export class Payments extends React.Component {
	render(){
		const client = {
	            sandbox:    'AbaW700K_ECq9B8fXAN9FIQ7W9Dgq9sogw71t7flLCVNXdC6qFgGfStwqn9m6ZA4KR9hWeD9UBMymGtY',
	            production: 'YOUR-PRODUCTION-APP-ID',
	        }
	    console.log(this.props.registrant)
		return (
			<div className="container">
				<Navbar/>
				<div className="row justify-content-center">
                	<div className="col-md-6 col-md-offset-3 jumbotron">
                		<h1> Complete Registration </h1>
						<PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
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