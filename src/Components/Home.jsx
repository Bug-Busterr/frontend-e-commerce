import React, { Component } from 'react'
import Header from './Header.jsx'
import Card from './Card.jsx'
import Category from './Category.jsx'
import Best_selling from './Best_selling.jsx'

export class Home extends Component {
  render() {
    return (
        <>
      <Header/>
      <Card/>
      <Category/>
      <Best_selling/>
      </>
    )
  }
}

export default Home