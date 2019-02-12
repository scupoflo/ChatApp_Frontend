import React, { Component } from 'react';
import Message from '../components/message'

class MessageList extends Component {



    render() {
        return (
        <div>
          {this.props.allMessages.map((message, index) =>
            <div>
              <Message
                id = {message.message_id}
                key = {index}
                speaker = {message.user_id.username}
                text = {message.text}
                   />
            </div>
             )}
        </div>
         )
    }
}





export default MessageList;
