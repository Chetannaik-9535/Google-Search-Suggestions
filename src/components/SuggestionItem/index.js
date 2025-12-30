// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {SuggestionItemDetails, updateSearchInputs} = props
  const {suggestion} = SuggestionItemDetails

  const onClickArrow = () => {
    updateSearchInputs(suggestion)
  }
  return (
    <li className="SuggestionItem-card-container">
      <div className="Items-container">
        <p className="SuggestionItems">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="Arrow-image"
          alt="arrow"
          onClick={onClickArrow}
        />
      </div>
    </li>
  )
}

export default SuggestionItem

/*
  git config --global user.email naikc8468@gmail.com
  git config --global user.name Chetannaik-9535
   git remote add origin https://github.com//Import-and-Export-an-Array.git
   git remote add origin https://github.com/Chetannaik-9535/Google-Search-Suggestions.git
*/