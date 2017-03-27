import React, {Component} from "react" // eslint-disable-line no-unused-vars
import Product from "../components/product" // eslint-disable-line no-unused-vars
import Pagination from "../components/pagination" // eslint-disable-line no-unused-vars
import {connect} from "react-redux"
import {fetchProducts} from "../store/products/actions"

class Products extends Component {
	componentWillMount() {
		this.props.fetchProducts()
	}

	render() {
		const {products} = this.props

		return (
      <div className="grid-container">
        {products.map(item => <Product product={item} key={item.id} />)}

        <Pagination />
      </div>
		)
	}
}

const mapStateToProps = (state) => {
	const {products} = state
	return {
		products: Object.keys(products).map(productId => products[productId])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchProducts: () => dispatch(fetchProducts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
