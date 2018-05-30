import React, { Component } from 'react'

class TextInput extends Component {
  render() {
    return <input onChange={this.onChange} type="text" />
  }

  onChange = (e) => {
    const value = e.target.value
    this.props.onChange(value)
  }
}

export default TextInput
