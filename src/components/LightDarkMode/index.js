// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isLight: false,
  }

  onChangeMode = () => {
    this.setState(prevState => ({isLight: !prevState.isLight}))
  }

  render() {
    const {isLight} = this.state
    const modeClassName = isLight ? 'light-mode' : 'dark-mode'
    const buttonText = isLight ? 'Dark Mode' : 'Light Mode'

    return (
      <div className="app-container">
        <div className={`mode-container ${modeClassName}`}>
          <h1 className="title">Click To Change Mode</h1>
          <button type="button" className="btn" onClick={this.onChangeMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
