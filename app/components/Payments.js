import React from 'react'
import Navbar from './Navbar'
import PaypalExpressBtn from 'react-paypal-express-checkout';

export class Payments extends React.Component {
	render(){
		const client = {
	            sandbox:    'AbaW700K_ECq9B8fXAN9FIQ7W9Dgq9sogw71t7flLCVNXdC6qFgGfStwqn9m6ZA4KR9hWeD9UBMymGtY',
	            production: 'YOUR-PRODUCTION-APP-ID',
	        }
		return (
			<div className="container">
				<Navbar/>
				<div>
					<PaypalExpressBtn client={client} currency={'USD'} total={1.00} />
				</div>
			</div>
		)
	}
}

import {connect} from 'react-redux'

export default connect ()(Payments)