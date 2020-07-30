import { ADD_TO_BASKET, REMOVE_FROM_BASKET, UPDATE_TOTAL } from '../constants/actions'

export const addToBasket = product => dispatch => {
  dispatch({
    type: ADD_TO_BASKET,
    payload: product })
  dispatch({
    type: UPDATE_TOTAL
  })
}

export const removeFromBasket = product => ({
  type: REMOVE_FROM_BASKET,
  payload: product
})



