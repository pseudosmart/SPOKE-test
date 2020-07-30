import React from 'react'

const BasketItem = ({ basketItem }) => {
  return (
    <p className='m-0 product-title'> {`${basketItem.title} - ${basketItem.productType} : £${basketItem.price}`}</p>
  )
}

export default BasketItem