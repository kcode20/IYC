import React from 'react';
import Navbar from './Navbar';
import Payments from './Payments';
import Select from 'react-select';
import { Link, browserHistory } from 'react-router';


export class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auxilary: [],
            className: ['btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default',
                'btn btn-default'
            ]
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    handleInputChange(event) {
        let id = event.target.id;
        let classNames = this.state.className;
        classNames[id] = this.changeColor(id)
        this.setState({ className: classNames });
        let auxilary = this.state.auxilary;
        if (auxilary.indexOf(event.target.value) === -1) {
            this.setState({ auxilary: auxilary.concat(event.target.value) })
        }
        else {
            this.setState({ auxilary: [...auxilary.slice(0, auxilary.indexOf(event.target.value)), ...auxilary.slice(auxilary.indexOf(event.target.value) + 1)] })
        }
    }

    changeColor(id) {
        let color = (this.state.className[id] === 'btn btn-default') ? 'btn btn-danger' : 'btn btn-default';
        return color;
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-md-offset-3 jumbotron">

                        <h1> Register for IYC </h1>
                        <form className='' onSubmit={evt => {
                            evt.preventDefault()
                            this.props.register(evt.target.name.value, evt.target.email.value, evt.target.phone.value, evt.target.age.value, evt.target.gender.value, evt.target.church.value, evt.target.pastor.value, evt.target.youthleader.value, evt.target.transport.value, this.state.auxilary, false)
                                .then(registrant => {
                                    browserHistory.push('/registration/payments')
                                })
                        }}>
                            <fieldset>
                                <legend> Contact Information </legend>

                                <label> Name </label>
                                <input className="form-control" placeholder="Full Name" name="name" />
                                <br />

                                <label> Email </label>
                                <input className="form-control" placeholder="Email Address" name="email" />
                                <br />

                                <label> Phone Number </label>
                                <input className="form-control" placeholder="Phone Number" name="phone" />
                                <br />

                                <label> Age </label>
                                <label className="option">
                                    <select name="age">
                                        <option value="0-12">0-12</option>
                                        <option value="13-17">13-17</option>
                                        <option value="18-25">18-25</option>
                                        <option value="25-39">25-39</option>
                                        <option value="40+">40+</option>
                                    </select>
                                </label>


                                <label> Gender </label>
                                <label className="option"> <input type="radio" name="gender" value="male" /> Male </label>
                                <label className="option"> <input type="radio" name="gender" value="female" /> Female </label>
                                <br /><br />

                            </fieldset>
                            <fieldset>
                                <legend> Church Information </legend>

                                <label> Church Name </label>
                                <small> (Please List Your Branch Church) </small>
                                <input className="form-control" placeholder="Church Name" name="church" />
                                <br />

                                <label> Pastor Name </label>
                                <input className="form-control" placeholder="Pastor's Full Name" name="pastor" />
                                <br />

                                <label> Youth Leader Name </label>
                                <input className="form-control" placeholder="Youth Leader's Full Name" name="youthleader" />
                                <br />

                                <label>  In My Home Church I am... </label>
                                <br />

                                <div className="participation">
                                    <label className={this.state.className[0]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={0}
                                                type="checkbox"
                                                value="Pastor" />
                                        </span>
                                        Pastor
                                </label>
                                    <label className={this.state.className[1]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={1}
                                                type="checkbox"
                                                value="Minister" />
                                        </span>
                                        Minister
                                </label>
                                    <label className={this.state.className[2]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={2}
                                                type="checkbox"
                                                value="Musician" />
                                        </span>
                                        Musician
                                </label>
                                    <label className={this.state.className[3]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={3}
                                                type="checkbox"
                                                value="Choir Director" />
                                        </span>
                                        Choir Director
                                </label>
                                    <label className={this.state.className[4]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={4}
                                                type="checkbox"
                                                value="Choir Member" />
                                        </span>
                                        Choir Member
                                </label>
                                    <label className={this.state.className[5]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={5}
                                                type="checkbox"
                                                value="Sunday School Superintendent" />
                                        </span>
                                        Sunday School Superintendent
                                </label>
                                    <label className={this.state.className[6]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={6}
                                                type="checkbox"
                                                value="Sunday School Teacher" />
                                        </span>
                                        Sunday School Teacher
                                </label>
                                    <label className={this.state.className[7]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={7}
                                                type="checkbox"
                                                value="Kitchen Volunteer" />
                                        </span>
                                        Kitchen Volunteer
                                </label>
                                    <label className={this.state.className[8]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={8}
                                                type="checkbox"
                                                value="Usher" />
                                        </span>
                                        Usher
                                </label>
                                    <label className={this.state.className[9]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={9}
                                                type="checkbox"
                                                value="Youth Leader" />
                                        </span>
                                        Youth Leader
                                </label>
                                    <label className={this.state.className[10]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={10}
                                                type="checkbox"
                                                value="Church Volunteer" />
                                        </span>
                                        Church Volunteer
                                </label>
                                    <label className={this.state.className[11]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={11}
                                                type="checkbox"
                                                value="N/A" />
                                        </span>
                                        Not Working in My Local Church
                                </label>
                                    <label className={this.state.className[12]}>
                                        <span className="checkbox">
                                            <input
                                                name="auxilary"
                                                onChange={this.handleInputChange}
                                                id={12}
                                                type="checkbox"
                                                value="Willing" />
                                        </span>
                                        Dont Work in an auxilary at my church, BUT I would love to start
                                </label>
                                </div>
                                <br /><br />

                                <label> Do You Want to Request Transportation? </label>
                                <br />
                                <label className="option"> <input type="radio" name="transport" value="true" /> Yes </label>
                                <label className="option"> <input type="radio" name="transport" value="false" /> No </label>
                                <br /><br />

                            </fieldset>

                            <button className='btn btn-primary' type="submit" value="Signup" > Next </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

import { connect } from 'react-redux'
import { register } from 'APP/app/reducers/registrant'

const mapDispatchToProps = function (dispatch) {
    return {
        register: function (name, email, phone, age, gender, church, pastor, leader, transport, auxilary, payment) {
            return dispatch(register(name, email, phone, age, gender, church, pastor, leader, transport, auxilary, payment));
        }
    };
};

export default connect(null, mapDispatchToProps)(Registration)



