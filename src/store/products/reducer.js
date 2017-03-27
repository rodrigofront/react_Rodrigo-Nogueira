import {RECEIVE_PRODUCTS} from "./actionTypes"

export default function(state = {}, action) {
	switch (action.type) {
	case RECEIVE_PRODUCTS:
		return Object.assign({}, state, action.products)
	default:
		return state
	}
}
