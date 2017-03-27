import React, { Component } from "react"

import * as icons from "../icons"

export default class Icon extends Component {
	render () {
		let iconsArray = icons.default
		let icon = iconsArray[this.props.name]

		if (icon === undefined) {
			return null
		}

		return (
      <i
        className={`icon icon-${this.props.name}`}
        style={
          {fontFamily: icon.fontName}
        }>
        {icon.unicode}
      </i>
		)
	}
}
