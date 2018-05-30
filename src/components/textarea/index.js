import React, { Component } from 'react'

class Textarea extends Component {
  render() {
    return <textarea onChange={this.onChange} />
  }

  onChange = (e) => {
    const value = e.target.value
    this.props.onChange(value)
  }
}

export default Textarea
