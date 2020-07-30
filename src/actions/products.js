import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../constants/actions'
import { graphQL } from '../helpers'

export const fetchProducts = () => dispatch => {
  dispatch({type: REQUEST_PRODUCTS})
  return graphQL.query().then(products => {
    return dispatch(productFetchSuccess(products))
  })
}

export const productFetchSuccess = products => ({
  type: RECEIVE_PRODUCTS,
  payload: products
})

export const productFetchError = error => ({ //TODO
  type: RECEIVE_PRODUCTS,
  error: true,
  payload: error
})
