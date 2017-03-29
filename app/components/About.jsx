import React from 'react'
import Navbar from './Navbar'

export const About = () => (
   <div>
    <Navbar/>
    <div>
    	<h1> Let me tell you about IYC </h1>
    </div>
   </div>
)

import {connect} from 'react-redux'

export default connect ()(About)