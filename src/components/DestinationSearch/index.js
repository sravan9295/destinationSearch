// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResults = destinationsList.filter(destination =>
      destination.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const destinationsContainerElements = (
      <div>
        {searchResults.map(destination => (
          <DestinationItem key={destination.id} details={destination} />
        ))}
      </div>
    )

    return (
      <div className="app-container">
        <h1>Destination Search</h1>
        <div>
          <input
            type="search"
            value={searchInput}
            onChange={this.onInputChange}
            placeholder="Search"
          />
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>

        <ul className="destinations-list">{destinationsContainerElements}</ul>
      </div>
    )
  }
}

export default DestinationSearch
