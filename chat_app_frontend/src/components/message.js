import React from 'react';
import './modal.css';

class Message extends React.Component {


render() {
 return(
   <ul>
     <li>

     {this.props.speaker }
     {this.props.text}
        
    </li>
  </ul>
 )
}

}



export default Message;
