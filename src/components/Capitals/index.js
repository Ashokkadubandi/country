import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {activeCapitalId: countryAndCapitalsList[0].country}

  changeEventTrigger = event => {
    this.setState({activeCapitalId: event.target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    console.log(activeCapitalId)

    const getResult = countryAndCapitalsList.find(
      each => each.id === activeCapitalId,
    )
    console.log(getResult.country)
  }

  render() {
    const {activeCapitalId} = this.state
    const activeCountry = this.getCountry(activeCapitalId)

    return (
      <div className="countries-con">
        <div className="country-card">
          <div>
            <h1 className="heading">Countries And Capitals</h1>
            <div className="selector-con">
              <select
                className="selector"
                onChange={this.changeEventTrigger}
                value={activeCapitalId}
              >
                {countryAndCapitalsList.map(eachItem => (
                  <option key={eachItem.id} value={eachItem.id}>
                    {eachItem.capitalDisplayText}
                  </option>
                ))}
              </select>
              <p>is Capital of which country?</p>
            </div>
            <p className="country-name">{activeCountry}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
