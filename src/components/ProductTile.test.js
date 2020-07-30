import React from 'react'
import { shallow } from 'enzyme'
import ProductTile from './ProductTile'

let basketHandler = jest.fn()
const props = {
  product: {
    title: 'Testing title',
    productType: 'Type test',
    image: 'testingimage.jpg',
    tags: ['test1', 'test2'],
    price: '45.00'
  },
  basketHandler
}

test('renders correctly', () => {
  const wrapper = shallow(<ProductTile {...props} />)
  expect(wrapper).toMatchSnapshot()
})

test('clicks the add to basket buttone', () => {
  const wrapper = shallow(<ProductTile {...props} />)
  wrapper.find('.btn').simulate('click')
  expect(basketHandler).toHaveBeenCalled()
})
