import React, {Component} from "react" // eslint-disable-line no-unused-vars
import {connect} from "react-redux"

import Icon from "./icon"

class Header extends Component {
	render() {
		return (
      <header className="header">

        <div className="grid-container">
          <div className="grid-100">
            <div className="header-inside">
              <div className="header-inside-logo">
                <h1>BRAND</h1>
              </div>
              <div className="header-inside-info">
                <div className="header-inside-info-cart">
                  <span className="header-inside-info-cart-price">£ {this.props.totalPrice}</span>
                  <span className="header-inside-info-cart-bag">
                    <Icon name='bag' />
                    <span className="count count-bag">{this.props.count}</span>
                  </span>
                </div>
                <div className="header-inside-info-wishlist">
                  <Icon name='wishlist' />
                  <span className="count count-wishlist">{this.props.countWishlist}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
		)
	}
}

const mapStateToProps = (state) => {
	const {productsIds} = state.cart
	const productsIdsWishlist = state.wishlist.productsIds


	const totalPrice = productsIds.reduce((totalPrice, productId) => {
		return totalPrice + (state.products[productId].price_discount || state.products[productId].price)
	}, 0)

	return {
		count: productsIds.length,
		totalPrice,
		countWishlist: productsIdsWishlist.length
	}
}

export default connect(mapStateToProps)(Header)
