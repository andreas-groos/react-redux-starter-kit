import React, { Component } from 'react'
import Percent from './Percent'
export default class TableRow extends Component {

  percent(number) {
    if (number > 0) {
      return (<p style={ { color: 'green' } }>
                { number }
              </p>)
    } else if (number < 0) {
      return (<p style={ { color: 'red' } }>
                { number } </p>)

    } else {
      return (<p>
                { number }
              </p>)
    }

  }
  render() {
    return (
      <tr>
        <th className="">
          { this.props.data.rank }
        </th>
        <th>
          <img src={ this.props.data.logo } height="20px" alt="" />
        </th>
        <th className="">
          { this.props.data.name }
        </th>
        <th className="">
          { this.props.data.price_usd }
        </th>
        <th className="">
          { this.props.data.price_btc }
        </th>
        <th className="">
          { this.percent(this.props.data.percent_change_1h) }
        </th>
        <th className="">
          { this.percent(this.props.data.percent_change_24h) }
        </th>
        <th className="">
          { this.percent(this.props.data.percent_change_7d) }
        </th>
      </tr>

      );
  }
}
