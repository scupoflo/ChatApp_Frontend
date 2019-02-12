import React from 'react'

class Conversation extends React.Component {
  state = {
    clicked: false
  }



  render(){
    return (
      <div
        onClick= {this.props.handleMessages}>
          {this.props.speakerOne.username} and {this.props.speakerTwo.username}

      </div>

    )
  }
}

export default Conversation
