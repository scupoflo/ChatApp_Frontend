import React, { Component } from 'react';
import Conversation from '../components/conversation'

class ConversationList extends Component {



    render() {
        return (
        <div className = "contacts_body">
          {this.props.conversationList.map((conversation, index) => <Conversation
              id = {conversation.id}
              key = {index}
              speakerOne = {conversation.user_id1}
              speakerTwo = {conversation.user_id2}
             />)}
         </div>
        )
    }
}





export default ConversationList;
