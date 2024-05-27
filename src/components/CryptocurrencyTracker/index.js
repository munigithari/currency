import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const apiUrl = 'https://apis.ccbp.in/crypto-currency-converter'

class CryptocurrencyTracker extends Component {
  state = {currencyData: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(apiUrl)
    const data = await response.json()
    const udatedData = data.map(eachValue => ({
      id: eachValue.id,
      currencyLogo: eachValue.currency_logo,
      currencyName: eachValue.currency_name,
      usedValue: eachValue.usd_value,
      euroValue: eachValue.euro_value,
    }))
    this.setState({currencyData: udatedData, isLoading: false})
  }

  render() {
    const {currencyData, isLoading} = this.state

    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList currencyData={currencyData} />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
