import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Field, reduxForm } from 'redux-form'

import Payments from './Payments';

/* Registration Form for the Youth Leaders Summit 2018 */

export class YouthRegistration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <form>
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

import { connect } from 'react-redux'
import { register } from 'APP/app/reducers/registrant'

const mapDispatchToProps = function (dispatch) {

};
const YouthRegistrationForm = reduxForm({ form: 'YouthLeaderRegistration' })(YouthRegistration)


export default connect(null, mapDispatchToProps)(YouthRegistrationForm)
