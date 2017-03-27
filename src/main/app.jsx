import React, {Component} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Products from "../components/products"

import styleInject from "style-inject"
import iconFont from "icons-loader"

const injectIconFont = function () {
	styleInject(iconFont.css)
}

injectIconFont()

export default class App extends Component {
	render() {
		return (
      <div>
        <Header/>
        <main className="container">
          <Products />
        </main>
        <Footer />
      </div>
		)
	}
}
