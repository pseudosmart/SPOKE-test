import * as actions from './products'

let dispatch

beforeEach(() => {
  dispatch = jest.fn()
})

test('fetchProducts', () => {
  expect(actions.fetchProducts()(dispatch)).toMatchSnapshot()
  expect(dispatch).toHaveBeenCalled()
})

test('productFetchSuccess', () => {
  expect(actions.productFetchSuccess([{ id: 'test', title: 'title' }, { id: 'test2', title: 'title' }])).toMatchSnapshot()
})

test('productFetchError', () => {
  expect(actions.productFetchSuccess('Error')).toMatchSnapshot()
})
