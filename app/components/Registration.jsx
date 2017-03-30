import React from 'react'
import Navbar from './Navbar'

export const Registration = () => (
   <div>
    <Navbar/>
    <div className="center_div container">
    	<h1> Register for IYC </h1>
    	<form className='' onSubmit={evt => {
    	  evt.preventDefault()
    	  console.log("I submitted with: ", evt.target.name.value, evt.target.email.value, evt.target.phone.value, evt.target.gender.value, evt.target.church.value, evt.target.pastor.value, evt.target.youthleader.value)
    	}}>
    	<fieldset>
    		<legend> Contact Information </legend> 

    		<label> Name </label>
    	   <input className="form-control" name="name" />
    	   <br/>

    	   <label> Email </label>
    	   <input className="form-control" name="email"/>
    	   <br/>

    	   <label> Phone Number </label>
    	   <input className="form-control" name="phone" />
    	   <br/>

    	   <label> Gender </label>
    	   <br/>
    	   <input type="radio" name="gender" value="male"/> Male  
    	   <input type="radio" name="gender" value="female"/> Female
    	   <br/><br/>

    	</fieldset>
    	<fieldset>
    		<legend> Church Information </legend> 
    		
    		<label> Church Name </label>
    	   <input className="form-control" name="church" />
    	   <small> Please List Your Branch Church </small>
    	   <br/>

    	   <label> Pastor Name </label>
    	   <input className="form-control" name="pastor"/>
    	   <br/>

    	   <label> Youth Leader Name </label>
    	   <input className="form-control" name="youthleader" />
    	   <br/>

    	</fieldset>

    	  <button className='btn btn-primary' type="submit" value="Signup" > Signup </button>
    	
    	</form>
    </div>
   </div>
)

import {connect} from 'react-redux'

export default connect ()(Registration)