import axios from 'axios'


/*---------- REDUCER ------------------ */
const reducer = (state=null, action) => {
  switch(action.type) {
  case GET_REGISTRANTS:
    return action.registrant
  case GET_ONE_REGISTRANT:
    return action.registrant
  }
  return state
}

/*---------- ACTION TYPES------------------ */
const GET_REGISTRANTS = 'GET_REGISTRANTS'
const GET_ONE_REGISTRANT ='GET_ONE_REGISTRANT'

/*---------- ACTION CREATORS ------------------ */
export const getRegistrants = registrant => ({
  type: GET_REGISTRANTS, registrant
})

export const loadRegistrant = registrant => ({
  type: GET_ONE_REGISTRANT, registrant
})


/*---------- ASYNC ACTION CREATORS (THUNK) ------------------ */


export const getRegistrant = (id) =>
  dispatch =>
    axios.get('/api/registrant/'+ id)
      .then(response => {
        dispatch(loadRegistrant(response))
      })
      .catch(failed => console.error(failed));

export const getAllRegistrants = () =>
  dispatch =>
    axios.get('/api/registrant/')
      .then(response => {
        dispatch(getRegistrants(response))
      })
      .catch(failed => console.error(failed));

export const register = (name, email, phone, age, gender, church, pastor, leader, transport, auxilary, payment) =>
  dispatch =>
    axios.post('/api/registrant/',
      {name, email, phone, age, gender, transport, auxilary, payment, church: {church, pastor, leader}})
      .then(response => dispatch(loadRegistrant(response.data)))
      .catch(failed => console.error(failed))

export default reducer
