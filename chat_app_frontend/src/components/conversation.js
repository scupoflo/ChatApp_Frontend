import React from 'react'

class Conversation extends React.Component {

  render(){
    return (
      <div>
        <button>
          {this.props.speakerOne.username} and {this.props.speakerTwo.username}
        </button>

      </div>

    )
  }
}

export default Conversation
