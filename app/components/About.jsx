import React from 'react'
import Navbar from './Navbar'

export const About = () => (
   <div>
    <div>
    	<img src="images/iyc3.png"/>
    	<h3> It’s LIT! </h3>

    	And yes, I just said that. Welcome to the International Youth Conference Website, where are young people are: Lead by Christ, Ignited by his blood, and Transformed to be effective believers and leaders in ministry and the world around us (That's the definition of LIT- Lead, Ignite, Transform).
    	I’m so excited that you now have a virtual glimpse into all things IYC, here you will find information pertaining to  our annual Conference, Youth Events held at our sister churches, and teachings and lesson plans to help grow your youth group.
    	To the Youth Leader - Welcome Home!
    	To the Young Person - Welcome Home!
    	To the Young at Heart - Welcome Home!
    	It is my prayer that this site will grow and bless you in ways you never prayed possible!

    	Yours In His Service,


    	Xavius “Robbie” Robinson
    	International Youth Conference
    	President & Executive Chairman

    	#BeYeLIT
    </div>
   </div>
)

import {connect} from 'react-redux'

export default connect ()(About)