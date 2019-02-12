import React, { Component } from 'react';
import Conversation from '../components/conversation'

class ConversationList extends Component {



  render() {
      return (
      <div className = "contacts_body">
        {this.props.conversationList.map((conversation, index) =>
           <div>
            <Conversation
              click = {this.props.click}
              id = {conversation.convo_id}
              key = {index}
              speakerOne = {conversation.user_id1}
              speakerTwo = {conversation.user_id2}
           />
       </div>)}
       </div>
      )
  }
}
export default ConversationList;
