const React = require('react')

class Keypad extends React.Component {
  constructor() {
    super()

    this.keyTouch = this.keyTouch.bind(this)
  }

    keyTouch() {
      console.log('Entering password...');
  }

  render() {
    return(
      <input type="password" onKeyUp={this.keyTouch}> </input>
    )
  }
}

module.exports = Keypad
