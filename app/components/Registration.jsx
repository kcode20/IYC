import React from 'react'
import Navbar from './Navbar'
import Select from 'react-select';

export class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          auxilary: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
          auxilary: this.state.auxilary.concat(event.target.value)
        });
    }

    render(){
        return(

               <div>
                <Navbar/>
                <div className="center_div container">
                	<h1> Register for IYC </h1>
                	<form className='' onSubmit={evt => {
                	  evt.preventDefault()
                	  console.log("I submitted with: ", evt.target.name.value, evt.target.email.value, evt.target.phone.value, evt.target.age.value, evt.target.gender.value, evt.target.church.value, evt.target.pastor.value, evt.target.youthleader.value, evt.target.auxilary.value)
                      console.log("This is the state: ", this.state);
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

                       <select name="age">
                         <option value="0-12">0-12</option>
                         <option value="13-17">13-17</option>
                         <option value="18-25">18-25</option>
                         <option value="25-39">25-39</option>
                         <option value="40+">40+</option>
                       </select>

                	   <label> Gender </label>
                	   <br/>
                	   <input type="radio" name="gender" value="male"/> Male  
                	   <input type="radio" name="gender" value="female"/> Female
                	   <br/><br/>

                	</fieldset>
                	<fieldset>
                		<legend> Church Information </legend> 
                		
                		<label> Church Name </label>
                        <small> (Please List Your Branch Church) </small>
                        <input className="form-control" name="church" />
                        <br/>

                        <label> Pastor Name </label>
                        <input className="form-control" name="pastor"/>
                        <br/>

                        <label> Youth Leader Name </label>
                        <input className="form-control" name="youthleader" />
                        <br/>

                        <label>  In My Home Church I am... </label>
                        <small> (Click CTRL or Command to Select Multiple Options) </small>
                        <br/>


                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Pastor"/> Pastor  
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Minister"/> Minister 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Musician"/> Musician 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Choir Director"/> Choir Director 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Choir Member"/> Choir Member 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Sunday School Superintendent"/> Sunday School Superintendent 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Sunday School Teacher"/> Sunday School Teacher 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Kitchen Volunteer"/> Kitchen Volunteer 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Usher"/> Usher 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Youth Leader"/> Youth Leader 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Church Volunteer"/> Church Volunteer 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="N/A"/> Not Working in My Local Church 
                        <input name="auxilary" onChange={this.handleInputChange} type="checkbox" value="Willing"/> Dont Work in an auxilary at my church, BUT I would love to start

                        <br/>
                        

                	</fieldset>

                	  <button className='btn btn-primary' type="submit" value="Signup" > Signup </button>
                	
                	</form>
                </div>
               </div>
            )
}
}

import {connect} from 'react-redux'

export default connect ()(Registration)