import React from 'react'
import { shallow } from 'enzyme'
import { App, mapStateToProps, mapDispatchToProps} from './App'
import * as productActions from '../actions/products'
import * as basketActions from '../actions/basket'

let defaultValues = {
  products: {
    products: []
  },
  basket: {}
}

let fetchProducts = jest.fn()
let addToBasket = jest.fn()

let wrapper
const props = {
  fetchProducts,
  products: [],
  addToBasket
}

const getWrapper = (overrideProps = {}) => (
  shallow(<App {...props} {...overrideProps}/>)
)

test('renders correctly without products', () => {
  expect(getWrapper()).toMatchSnapshot()
})

test('renders correctly with products', () => {
  expect(getWrapper({products: [
    {title: 'dummy title', id: 1}
  ]})).toMatchSnapshot()
})

test('calls fetchProducts', () => {
  expect(props.fetchProducts).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  expect(mapStateToProps(defaultValues)).toMatchSnapshot()
})

describe('mapDispatchToProps', () => {
  let dispatch, props
  beforeEach(() => {
    dispatch = jest.fn()
    productActions.fetchProducts = jest.fn().mockReturnValue('FETCH_PRODUCTS')
    basketActions.addToBasket = jest.fn().mockReturnValue('ADD_TO_BASKET')
    props = mapDispatchToProps(dispatch)
  })

  test('it returns the correct props', () => {
    expect(props).toMatchSnapshot()
  })

  test('dispatches fetchProducts action', () => {
    props.fetchProducts()
    expect(dispatch).toBeCalledWith('FETCH_PRODUCTS')
    expect(productActions.fetchProducts).toBeCalled()
  })

  test('dispatches addToBasket action', () => {
    props.addToBasket('product')
    expect(dispatch).toBeCalledWith('ADD_TO_BASKET')
    expect(basketActions.addToBasket).toBeCalledWith('product')
  })
})