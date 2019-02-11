import React, { Fragment } from 'react'

class Conversation extends React.Component {

  render(){
    return (
      <div>
        <p> {this.props.speakerOne} is talking to {this.props.speakerTwo} ! </p>

      </div>

    )
  }
}

export default Conversation
