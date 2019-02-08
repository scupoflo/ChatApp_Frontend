import React, { Component } from 'react';
import Conversation from '../components/conversation'

const API = "http://localhost:3000/conversations"
class ConversationList extends Component {
  state = {
    conversations: []
  }

  // componentDidMount(){
  //   this.fetchConversation()
  // }
  //
  // fetchConversation = () => {
  //     fetch(API)
  //     .then(response => response.json())
  //     .then(data => {
  //       debugger
  //       this.setState({
  //         conversations: data
  //       })
  //     })
  //   }

    render() {
       return (
         <div className="app" id="myForm">
           <Conversation
             conversationList={this.state.conversations}
           />
         </div>
       );
     }

}

export default ConversationList;
