import React from 'react';
import './modal.css';

class Message extends React.Component {


render() {
 return(
   <ul>
     <ul className= "messages">

     <b>{this.props.speaker} </b> :   " {this.props.text} "
     <br / >


    </ul>
  </ul>
 )
}

}



export default Message;
