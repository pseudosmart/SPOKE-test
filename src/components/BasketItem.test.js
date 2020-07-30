import React from 'react'
import { shallow } from 'enzyme'
import BasketItem from './BasketItem'

test('renders correctly', () => {
  const props = {
    basketItem: {
      title: 'Testing title',
      productType: 'Type test',
      price: '45.00'
    }
  }
  const wrapper = shallow(<BasketItem {...props} />)
  expect(wrapper).toMatchSnapshot()
})
