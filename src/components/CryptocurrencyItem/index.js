// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currenyDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currenyDetails

  return (
    <li className="list-container">
      <div className="container1111">
        <img src={currencyLogo} className="image5" alt={currencyName} />
        <p className="heading5">{currencyName}</p>
      </div>
      <div className="container22222">
        <p className="heading5">{usdValue}</p>
        <p className="heading5">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
