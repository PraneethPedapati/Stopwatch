import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: '00', minutes: '00'}

  onStart = () => {
    this.stopWatchId = setInterval(() => {
      const {seconds, minutes} = this.state

      let convertedSeconds =
        seconds < 9
          ? '0'.concat((parseInt(seconds) + 1).toString())
          : (parseInt(seconds) + 1).toString()

      let convertedMinutes

      if (convertedSeconds > 59) {
        if (minutes < 9) {
          convertedMinutes = '0'.concat((parseInt(minutes) + 1).toString())
          convertedSeconds = '00'
        } else {
          convertedMinutes = (parseInt(minutes) + 1).toString()
          convertedSeconds = '00'
        }
      } else {
        convertedMinutes = minutes
      }

      this.setState({seconds: convertedSeconds, minutes: convertedMinutes})
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.stopWatchId)
  }

  onReset = () => {
    this.setState({seconds: '00', minutes: '00'})
  }

  render() {
    const {seconds, minutes} = this.state
    console.log(seconds)
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-img"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="timer">
            {minutes}:{seconds}
          </h1>
          <div className="button-container">
            <button
              type="button"
              className="button start-button"
              onClick={this.onStart}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-button"
              onClick={this.onStop}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-button"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
