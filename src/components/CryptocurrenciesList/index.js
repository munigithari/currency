// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  renderingMethod1 = () => (
    <navbar className="navbar">
      <p className="heading1">Coin Type</p>
      <div className="mini-container">
        <p className="heading2">USD</p>
        <p className="heading2">EURO</p>
      </div>
    </navbar>
  )

  renderingMethod2 = () => {
    const {currencyData} = this.props

    return (
      <div className="container">
        {this.renderingMethod1}
        <ul className="container2">
          {currencyData.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} currencyDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="image1"
          alt="cryptocurrency"
        />
        {this.renderingMethod2()}
      </div>
    )
  }
}

export default CryptocurrenciesList
