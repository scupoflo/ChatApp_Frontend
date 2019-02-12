import React from 'react'

class Conversation extends React.Component {

  handleMessages = () => {
      fetch('http://localhost:3000/messages')
      .then(res => res.json())
      .then(currentMessageData => {
        this.setState({
          messages: currentMessageData
        })
      })
    }
  render(){
    return (
      <div
        onClick= {this.handleMessages}>
          {this.props.speakerOne.username} and {this.props.speakerTwo.username}

      </div>

    )
  }
}

export default Conversation
