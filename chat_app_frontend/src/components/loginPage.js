import React from 'react'
import ConversationList from '../containers/conversationList'
import MessageList from '../containers/messageList'
import Modal from './modal';
const API = "http://localhost:3000"
class LoginPage extends React.Component {
  constructor(){
    super()

    this.state = {
    username: "",
    conversations: [],
    messages: [],
    isShowing: false,
    currentUser: null
    }
  }

  setCurrentUser = (userObj) => {
  this.setState ({
    currentUser: userObj
    })
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

  fetchConversation = (userObj) => {
      fetch(API + `/users/${userObj.id}`)
      .then(res => res.json())
      .then(currentConversationData => {
        this.setState({
          conversations: currentConversationData.conversations
        })
      })
    }


  handleUsernameInput = (e) => {
    this.setState({
      username: e.target.value
    })
  }
  handleLoginSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: this.state.username})
    })
    .then(response => response.json())
    .then(userObj => {
      this.setCurrentUser(userObj)
      this.fetchConversation(userObj)
    })
  }

  handleMessages = (id) => {
     fetch(API + `/conversations/${id}`)
     .then(res => res.json())
     .then(currentMessageData => {
      
       this.setState({
         messages: currentMessageData.messages
       })
     })
   }


  render(){
    return(
      <div className= "login-page">


        <h1>Welcome to ChatApp</h1>

        <br />

        <form onSubmit={this.handleLoginSubmit}>
          <input type="text" name="Username" value={this.state.username} onChange = {this.handleUsernameInput}/>
          <input type="submit" value="Login" />
        </form>
        <br />
        <br />

        <div className= "conversation-list">
        <ConversationList
          conversationList={this.state.conversations}
          click= {this.handleMessages}
          show={this.state.isShowing}
          close={this.closeModalHandler}
         />

        <MessageList
         allMessages= {this.state.messages}
         show={this.state.isShowing}
         close={this.closeModalHandler}
         />
     </div>



      </div>
    )
  }
}
export default LoginPage
