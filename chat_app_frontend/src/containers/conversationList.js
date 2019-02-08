import React, { Component } from 'react';
import Conversation from '../components/conversation'

const API = "http://localhost:3000/conversations"
class ConversationList extends Component {
  state = {
    conversations: []
  }

  componentDidMount(){
    this.fetchConversation()
  }

  fetchConversation = () => {
      fetch(API)
      .then(res => res.json())
      .then(conversations => {
        this.setState({
          conversations: conversations
        })
      })
    }

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
