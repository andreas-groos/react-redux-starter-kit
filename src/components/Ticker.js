import React, { Component } from 'react'
import moment from 'moment'

class Ticker extends Component {
  constructor() {
    super()
    this.state = {
      date: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.ticker(),
      1000)
  }
  ticker() {
    let timer = moment().format('MMMM Do YYYY, h:mm:ss a')
this.setState({
  date: timer
})
  }
  render() {
    return (
      <div>
        { this.state.date }
      </div>
      );
  }
}


export default Ticker