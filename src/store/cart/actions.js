import {ADD_TO_CART, REMOVE_FROM_CART} from "./actionTypes"

export function addToCart (productId) {
	return {type: ADD_TO_CART, productId }
}

export function removeFromCart (productId) {
	return {type: REMOVE_FROM_CART, productId }
}
