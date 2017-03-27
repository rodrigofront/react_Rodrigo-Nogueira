import {ADD_TO_CART, REMOVE_FROM_CART} from "./actionTypes"
import _pull from "lodash/pull"

export default function(state = {productsIds: []}, action) {
	switch (action.type) {
	case ADD_TO_CART:
		return Object.assign({}, state, {productsIds: [...state.productsIds, action.productId]})
	case REMOVE_FROM_CART:
		return Object.assign({}, state, {productsIds: _pull(state.productsIds, action.productId)})
	default:
		return state
	}
}
