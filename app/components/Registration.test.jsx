import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'

import Registration from './Registration'

describe('<Home />', () => {
  let root
  beforeEach('render the root', () =>
    root = shallow(<Registration />)
  )

  it('has a Navbar', () => {    
    expect(root.find('Navbar')).to.have.length(1) 
  })
})