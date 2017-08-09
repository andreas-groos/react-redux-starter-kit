import React, { Component } from 'react'


const List = (props) => {
  console.log(props)
  if (props.currencies) {
    const listItems = props.currencies.map((e) => <li key={ e.id }>
                                                    { e.name }
                                                    <img src={ e.logo } alt="" height="20px" />
                                                  </li>
    )
    return (<ul>
              { listItems }
            </ul>)
  } else {
    return null
  }
}

export default List