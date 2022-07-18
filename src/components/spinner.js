import React, { Component } from 'react'
import Book from './Book.gif'
export class spinner extends Component {
  render() {
    return (
      <div>
        <img src={Book} alt="loading" />
      </div>
    )
  }
}

export default spinner

