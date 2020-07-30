import React from 'react'
import { shallow } from 'enzyme'
import { Basket, mapStateToProps } from './Basket'

let defaultValues = {
  basket: {
    currentBasket: [
      {
        title: 'Testing title',
        productType: 'Type test',
        price: '45.00',
        id: 1
      },
      {
        title: 'Testing title2',
        productType: 'Other type',
        price: '98.00',
        id: 2
      }
    ]
  },
  total: 300
}

test('renders correctly', () => {
  const props = {
    basket: [
      {
        title: 'Testing title',
        productType: 'Type test',
        price: '45.00',
        id: 1
      },
      {
        title: 'Testing title2',
        productType: 'Other type',
        price: '98.00',
        id: 2
      }
  ],
  total: 200.00
  }
  const wrapper = shallow(<Basket {...props} />)
  expect(wrapper).toMatchSnapshot()
})

test('mapStateToProps', () => {
  expect(mapStateToProps(defaultValues)).toMatchSnapshot()
})
