import React, { Component } from 'react';
import './App.css';
import index from './index.js'
import LoginPage from './components/loginPage'
// import Modal from './components/modal'
// import Form from './Form'


class App extends Component {

      render() {
         return (
           <div className="app">
            <LoginPage setCurrentUser = {this.setCurrentUser}/>
           </div>
         );
       }
}

export default App;
