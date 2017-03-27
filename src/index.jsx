import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore, compose} from "redux"
import reducers from "./store/reducers"

import App from "./main/app"

import "./sass/app.scss"

const store = createStore(reducers, compose(window.devToolsExtension ? window.devToolsExtension() : f => f))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
)
