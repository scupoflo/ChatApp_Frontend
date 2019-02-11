import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import index from './index.js'
import ConversationList from './containers/conversationList'
import MessageList from './containers/messageList'
// import Form from './Form'

const API = "http://localhost:3000/users"
  class App extends Component {
    state = {
      currentUser: null,
      conversations: []
    }

    componentDidMount(){
      this.fetchConversation()
    }

    fetchConversation = () => {
        fetch(API+`/2`)
        .then(res => res.json())
        .then(currentUserData => {
          this.setState({
            currentUser: currentUserData.user,
            conversations: currentUserData.conversations
          })
        })
      }



      render() {

         return (

           <div className="app">
             <ConversationList
               conversationList={this.state.conversations}/>



           </div>
         );
       }

  }
export default App;
