import React from 'react'
import Navbar from './Navbar'

export const Registration = () => (
   <div>
    <Navbar/>
    <div>
    	<h1> Register for IYC </h1>
    </div>
   </div>
)

import {connect} from 'react-redux'

export default connect ()(Registration)