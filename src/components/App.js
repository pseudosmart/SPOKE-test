import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchProducts, addToBasket } from '../actions'

import ProductTile from './ProductTile'
import Basket from './Basket'

export class App extends Component {
  constructor(props) {
    super(props)
    this.props.fetchProducts()
  }


  render () {
    const { products, addToBasket } = this.props

    if (!products) return <h1>Getting Data...</h1> //Would look at loading animation using the fetching property from the product store

    return (
      <div className='row'>
        <div className='col-12 col-lg-2 order-lg-12'>
          <Basket />
        </div>

        <div className='col-12 col-lg-10'>
        { products.map(product => ( 
          <ProductTile key={product.id} product={product} basketHandler={addToBasket} />
        ))}
        </div>


      </div>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  addToBasket: (product) => dispatch(addToBasket(product))
})

export const mapStateToProps = (state) => {
  return {
    products: state.products.products, //horrible named nesting
    basket: state.basket
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)


