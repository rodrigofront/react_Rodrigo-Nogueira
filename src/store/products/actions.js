import {RECEIVE_PRODUCTS} from "./actionTypes"
import products from "../../data/data"

export function fetchProducts () {
	return {type: RECEIVE_PRODUCTS, products }
}
