import * as actions from './basket'

let dispatch

beforeEach(() => {
  dispatch = jest.fn()
})

test('addToBasket', () => {
  expect(actions.addToBasket({ id: 'test', title: 'title' })(dispatch)).toMatchSnapshot()
  expect(dispatch).toHaveBeenCalled()
})

test('removeFromBasket', () => {
  expect(actions.removeFromBasket({ id: 'test', title: 'title' })).toMatchSnapshot()
})
