import React from 'react'
import Navbar from './Navbar'

export const Store = () => (
   <div>
    <div>
    	<h1> This is the Its Lit Store </h1>
    </div>
   </div>
)

import {connect} from 'react-redux'

export default connect ()(Store)