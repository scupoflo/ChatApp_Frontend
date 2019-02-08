import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import index from './index.js'
import ConversationList from './containers/conversationList'

const API = "http://localhost:3000/users"
  class App extends Component {
    state = {
      conversations: []
    }

    componentDidMount(){
      this.fetchConversation()
    }

    fetchConversation = () => {
        fetch(API + `/${this.state.conversations}`)
        .then(res => res.json())
        .then(conversations => {
          this.setState({
            conversations: conversations
          })
        })
      }

      render() {
         return (
           <div className="app">
             <ConversationList
               conversationList={this.state.conversations}
             />


           </div>
         );
       }

  }
export default App;
