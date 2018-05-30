import React, { Component } from 'react'
import TextInput from '../text-input'
import Textarea from '../textarea'

class CommentForm extends Component {
  state = {
    user: null,
    text: null
  }

  render() {
    return (
      <form>
        <div>{`Name: ${this.state.user}, text: ${this.state.text}`}</div>
        <TextInput name="name" onChange={this.onUserNameChange} />
        <Textarea name="text" onChange={this.onTextChange} />
        <button onClick={this.submit}>Add comment</button>
      </form>
    )
  }

  onUserNameChange = (user) => {
    this.setState({ user: user || null })
  }

  onTextChange = (text) => {
    this.setState({ text: text || null })
  }

  submit = (e) => {
    e.preventDefault()
    this.props.addComment(this.state)
  }
}

export default CommentForm
