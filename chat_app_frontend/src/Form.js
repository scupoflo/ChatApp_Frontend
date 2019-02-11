import React from 'react'

class Form extends React.Component{
  render(){
    return(
      <form action="/action_page.php" className="form-container">

      <h1>Chat</h1>

      <label>
        <b>Message</b>
      </label>

      <textarea
        placeholder= "Type message.." name="msg"
        required>
      </textarea>

      <button
        type="submit"
        class="btn">Send
      </button>

      <button
        type="button"
        class="btn cancel"
        onClick= {(console.log('You clicked me!'))}>Close
      </button>

      </form>
    )
  }
}
export default Form
