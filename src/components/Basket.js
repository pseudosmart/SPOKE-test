import React, {Component} from 'react'
import { connect } from 'react-redux'
import BasketItem from './BasketItem'

export class Basket extends Component {
  render() {
    const basket = this.props.basket || []
    return (
      <div className='m-3'>
        <h2>Basket</h2>
        {basket.map((basketItem, i) => {
          return <BasketItem key={basketItem.id + i} basketItem={basketItem} />
        })}
          <p className='h2'>Total: £{this.props.total} </p>
      </div>
    )
  }
}


export const mapStateToProps = (state) => {
  return {
    basket: state.basket.currentBasket,
    total: state.basket.total
  }
}

export default connect(mapStateToProps)(Basket)