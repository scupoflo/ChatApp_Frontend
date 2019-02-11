import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import index from './index.js'
import ConversationList from './containers/conversationList'
import MessageList from './containers/messageList'
import Modal from './components/modal'
// import Form from './Form'

const API = "http://localhost:3000"
  class App extends Component {

    constructor(){
      super()

      this.state = {
      currentUser: null,
      conversations: [],
      messages: [],
      isShowing: false
      }
    }

    componentDidMount(){
      this.fetchConversation()
      this.fetchMessages()
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        })
      };

    fetchConversation = () => {
        fetch(API+ '/conversations')
        .then(res => res.json())
        .then(currentConversationData => {
          this.setState({
            conversations: currentConversationData
          })
        })
      }

      fetchMessages = () => {
          fetch(API + '/messages')
          .then(res => res.json())
          .then(currentMessageData => {
            this.setState({
              messages: currentMessageData
            })
          })
        }



      render() {
         return (

           <div className="app">
             <h1> Welcome to Chat App!!</h1>
              {
               this.state.isShowing ?
                <div onClick={this.closeModalHandler} className="back-drop"> </div>
                  : null
              }

             <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button>

              <Modal
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}/>

             <ConversationList
               conversationList={this.state.conversations}/>

             <MessageList messageList={this.state.messages}/>

           </div>
         );
       }
     }

export default App;
