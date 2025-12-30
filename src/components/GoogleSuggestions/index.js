// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

import './index.css'

const suggestionsList = [
  {id: 1, suggestion: 'Prince of Ethereum'},
  {id: 2, suggestion: 'Oculas Quest 2 specs'},
  {id: 3, suggestion: 'Tesla share price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Letest trends in AI'},
  {id: 6, suggestion: 'Letest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchInputs: '', suggestionsList: this.props.suggestionsList}

  onChangeSearchInput = event => {
    this.setState({
      searchInputs: event.target.value,
    })
  }

  updateSearchInputs = suggestionText => {
    this.setState({searchInputs: suggestionText})
  }

  render() {
    const {searchInputs, suggestionsList} = this.state
    const searchResult = suggestionsList.filter(eachUser =>
      eachUser.suggestion
        .toLowerCase()
        .includes(searchInputs.toLowerCase())
    )

    return (
      <div className="GoogleSuggestions-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="Google-image"
          alt="google logo"
        />
        <div className="search-small-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            className="search-image"
            alt="search icon"
          />
          <input
            type="search"
            className="search"
            onChange={this.onChangeSearchInput}
            value={searchInputs}
            placeholder="search Google"
          />

          <ul className="list-suggestion-container">
            {searchResult.map(eachSearch => (
              <SuggestionItem
                SuggestionItemDetails={eachSearch}
                key={eachSearch.id}
                updateSearchInputs={this.updateSearchInputs}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
