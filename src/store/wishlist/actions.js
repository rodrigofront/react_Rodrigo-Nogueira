import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST} from "./actionTypes"

export function addToWishlist (productId) {
	return {type: ADD_TO_WISHLIST, productId }
}

export function removeFromWishlist (productId) {
	return {type: REMOVE_FROM_WISHLIST, productId }
}
