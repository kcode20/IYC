import React from 'react'
import Navbar from './Navbar'


// <video loop muted autoplay poster="img/videoframe.jpg" class="fullscreen-bg__video">
//             <source src="video/big_buck_bunny.webm" type="video/webm">
//             <source src="video/big_buck_bunny.mp4" type="video/mp4">
//             <source src="video/big_buck_bunny.ogv" type="video/ogg">
//     </video>


export const Home = () => (
   <div className="home fullscreen-bg">
    <Navbar/>
   </div>
)

import {connect} from 'react-redux'

export default connect ()(Home)