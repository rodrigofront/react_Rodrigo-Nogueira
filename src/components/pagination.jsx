import React, {Component} from "react" // eslint-disable-line no-unused-vars
import Icon from "./icon"

export default class Pagination extends Component {
	render() {
		return (
      <div className="grid-100 tablet-grid-100 mobile-grid-100">
        <div className="pagination">
          <div className="pagination-prev">
              <Icon name='arrowLeft' />
          </div>
          <div className="pagination-page">
            <a href="#">1</a>
          </div>
          <div className="pagination-page">
            <a className="__isActive" href="#">2</a>
          </div>
          <div className="pagination-page">
            <a href="#">3</a>
          </div>
          <div className="pagination-page">
            <a href="#">...</a>
          </div>
          <div className="pagination-page">
            <a href="#">10</a>
          </div>
          <div className="pagination-next">
            <a href="#">
              <Icon name='arrowRight' />
            </a>
          </div>
        </div>
      </div>

		)
	}
}
