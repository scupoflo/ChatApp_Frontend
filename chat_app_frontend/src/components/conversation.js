import React from 'react'

class Conversation extends React.Component {
  state = {
    clicked: false
  }



  render(){
    return (
      <button
        onClick= { () => {this.props.click(this.props.id)}  }>
          {this.props.speakerOne.username} and {this.props.speakerTwo.username}

      </button>


    )
  }
}

export default Conversation
