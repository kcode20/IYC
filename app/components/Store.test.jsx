import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'

import Store from './Store'

describe('<Store/>', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Store />)
  )

  it('has a Navbar', () => {    
    expect(root.find('Navbar')).to.have.length(1) 
  })
})