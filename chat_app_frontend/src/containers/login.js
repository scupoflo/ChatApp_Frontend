import React, {Component} from 'react'
import './login.css'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: ""
    }
  }

}


export default Login

  //once you enter a valid username
  //redirects to user show page


//stretch feature - when hitting the create button
//hidden form appears, you fill it out
//it posts to db and redirects to user show page
