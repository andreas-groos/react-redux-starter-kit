import React, { Component } from 'react'


export default class TableRow extends Component {

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
          { this.props.data.percent_change_1h }
        </th>
        <th className="">
          { this.props.data.percent_change_24h }
        </th>
        <th className="">
          { this.props.data.percent_change_7d }
        </th>
      </tr>

      );
  }
}
