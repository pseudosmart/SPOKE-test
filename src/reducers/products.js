import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from '../constants/actions'

const flattenProducts = products => {
  const flatProducts = products.data.products.edges.reduce((productList, product) => { // Would need much better error handling
    const {id, images, productType, title, tags, priceRange, updatedAt} = product.node
    return [
      ...productList,
      {
        id,
        image: images.edges.length ? images.edges.pop().node.originalSrc : '',
        productType,
        title,
        tags,
        price: parseInt(priceRange.maxVariantPrice.amount, 10).toFixed(2),
        updatedAt
      }
    ]
  }, [])

  return flatProducts
}

export default (currentState = {}, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {...currentState, fetching: true}

    case RECEIVE_PRODUCTS:
      const formattedProducts = flattenProducts(action.payload)
      return { ...currentState, products: formattedProducts, fetching: false} //TODO use the fetching
      
      
      
    default:
      return currentState
  }
}