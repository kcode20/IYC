import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'

import Home from './Home'

describe('<Home />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Home />)
  )

  it('has a Navbar', () => {    
    expect(root.find('Navbar')).to.have.length(1) 
  })
})