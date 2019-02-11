import React, { Component } from 'react';
import Conversation from '../components/conversation'

class ConversationList extends Component {



    render() {
        return (
        <div>
          {this.props.conversationList.map((conversation) => <Conversation
              id = {conversation.id}
              speakerOne = {conversation.user_id1}
              speakerTwo = {conversation.user_id2}
             />)}
         </div>
              )
    }
}





export default ConversationList;
