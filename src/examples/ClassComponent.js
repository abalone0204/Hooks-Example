import React from 'react'

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Hakata'
    }
    this.handleInput = this.handleInput.bind(this)
  }
  handleInput(event) {
    this.setState({name: event.target.value})
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <input type="text" value={this.state.name} onChange={this.handleInput}/>
      </div>
    )
  }
}

export default User