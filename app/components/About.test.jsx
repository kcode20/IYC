import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'

import About from './About'

describe('<About/>', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<About />)
  )

  it('has a Navbar', () => {    
    expect(root.find('Navbar')).to.have.length(1) 
  })
})