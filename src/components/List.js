import React, { Component } from 'react'
import TableRow from './TableRow'

export class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sortBy: 'id',
      asc: true
    }
  }


  render() {
    return <div className="row">
             <div className="col-12">
               <table className="table table-striped">
                 <thead>
                   <tr>
                     <th>Rank</th>
                     <th>Logo</th>
                     <th>Name</th>
                     <th>$</th>
                     <th>BTC</th>
                     <th>% 1hr</th>
                     <th>% 24h</th>
                     <th>% 7d</th>
                   </tr>
                 </thead>
                 <tbody>
                   { this.props.currencies.map(e => {
                       console.log('map', e)
                       return (<TableRow data={ e } />)
                     }) }
                 </tbody>
               </table>
             </div>
           </div>
  }
}


export default List