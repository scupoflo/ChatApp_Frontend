import React from 'react'
import ConversationList from '../containers/conversationList'
import MessageList from '../containers/messageList'

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

      // fetchMessages = () => {
      //     fetch(API + '/messages')
      //     .then(res => res.json())
      //     .then(currentMessageData => {
      //       this.setState({
      //         messages: currentMessageData
      //       })
      //     })
      //   }



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

  handleMessages = () => {
      fetch(API + '/messages')
      .then(res => res.json())
      .then(currentMessageData => {
        this.setState({
          messages: currentMessageData
        })
      })
    }



  render(){
    return(
      <div>
      <h1>Welcome to ChatApp</h1>
      <br />
        <form onSubmit={this.handleLoginSubmit}>
          <input type="text" name="Username" value={this.state.username} onChange = {this.handleUsernameInput}/>
          <input type="submit" value="Login" />
        </form>

        <ConversationList
          conversationList={this.state.conversations}
          click= {this.handleMessages}
          debugger
          show={this.state.isShowing}
          close={this.closeModalHandler}
         />

       <MessageList allMessages= {this.state.messages}/>
      </div>
    )
  }
}
export default LoginPage
