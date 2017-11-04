import React from 'react'
import Navbar from './Navbar'

export const Home = () => (
   <div className="home fullscreen-bg">
   	<Navbar/>
   </div>
)

import {connect} from 'react-redux'

export default connect ()(Home)