import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET, //TODO
  UPDATE_TOTAL
} from '../constants/actions'

const intialState = {
  currentBasket: [],
  total: 0
}

export const getCurrentTotal = (currentState) => {
  return currentState.currentBasket.reduce((total, basketItem) => {
    return parseInt(basketItem.price, 10) + total
  }, 0)
}

export default function (currentState = intialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...currentState,
        currentBasket: [...currentState.currentBasket, action.payload]
      }
      case UPDATE_TOTAL:
      return {
        ...currentState,
        total: getCurrentTotal(currentState).toFixed(2)
      }

    default: 
    return currentState
    }
}