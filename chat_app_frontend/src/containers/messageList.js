import React, { Component } from 'react';
import Message from '../components/message'

class MessageList extends Component {



    render() {
        return (
        <div className = "contacts_body">
          {this.props.allMessages.map((message, index) =>

            <Message
            id = {message.id}
            key = {index}
            speaker = {message.user_id}
            text = {message.text}
                 />)}
        </div>
         )
    }
}





export default MessageList;
