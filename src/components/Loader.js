import React, { Component } from 'react';


const Loader = (props) => {
  if (props.loading) {
    return (<h1>Loading</h1>)
  } else return null
}
export default Loader