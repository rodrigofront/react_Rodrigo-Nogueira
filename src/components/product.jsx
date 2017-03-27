import React, {Component} from "react" // eslint-disable-line no-unused-vars
import {connect} from "react-redux"

import {addToCart, removeFromCart} from "../store/cart/actions"
import {addToWishlist, removeFromWishlist} from "../store/wishlist/actions"
import Icon from "./icon"

class Product extends Component {
	render() {
		const {product, inCart, inWishlist} = this.props
		const classPrice = product.price_discount ? "product-price with_discount" : "product-price"

		return (
      <div className="grid-25 tablet-grid-33 mobile-grid-100">
        <div itemScope itemType="http://schema.org/Product" className="product">
          <div className="product-img">
            <img itemProp="image" src={product.img} />
          </div>
          <div className="product-wishlist">
            {inWishlist ? (
              <button onClick={this.props.removeFromWishlist} className="__isActive">
                <Icon name='wishlist' />
              </button>
            ) : (
              <button onClick={this.props.addToWishlist}>
                <Icon name='wishlist' />
              </button>
            )}

          </div>
          <div itemProp="name" className="product-title">{product.title}</div>
          <div itemProp="description" className="product-subTitle">{product.description}</div>
          <div itemProp="offers" itemScope itemType="http://schema.org/Offer" className={classPrice}>
            <span className="product-price-normal">
              <span itemProp="priceCurrency" content="GBP">£</span>
              <span className="price" itemProp="price" content={product.price}> {product.price}</span>
            </span>
            {product.price_discount &&
              <span className="product-price-discount">£ {product.price_discount}</span>
            }
          </div>
          <div className="product-button">
            {inCart ? (
              <button onClick={this.props.removeFromCart} className="__isActive">IN CART</button>
            ) : (
              <button onClick={this.props.addToCart}>ADD TO CART</button>
            )}
          </div>
        </div>
      </div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const {id} = ownProps.product
	const inCart = state.cart.productsIds.includes(id)
	const inWishlist = state.wishlist.productsIds.includes(id)

	return {
		inCart,
		inWishlist
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const {id} = ownProps.product
	return {
		addToCart: () => dispatch(addToCart(id)),
		removeFromCart: () => dispatch(removeFromCart(id)),
		addToWishlist: () => dispatch(addToWishlist(id)),
		removeFromWishlist: () => dispatch(removeFromWishlist(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
