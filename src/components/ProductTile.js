import React from 'react'

const ProductTile = ({product, basketHandler}) => {
  return (
    <div className='media p-5'>
      <img className='product-image' src={product.image} alt={`${product.productType} - ${product.title}`} />
      <div className='media-body m-3 mt-5'>
        <span className='pb-3'>{product.tags.join(', ')}</span> {/* Would like to use a seperate component for tags*/}
        <p className='h5'>{product.productType}</p>
        <p className='h1 product-title'>{product.title}</p>
        <p className='h6'>{`£${product.price}`}</p>

        <button type='button' className='btn btn-dark' onClick={() => basketHandler(product)}>Add to basket</button>
      </div>
    </div>
  )
}

export default ProductTile