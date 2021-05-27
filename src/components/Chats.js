import React, { Component } from "react";
import style from 'styled-components';

const Style = style.div`
overflow-y: scroll;

.Chats{
  background-color: blue;
  overflow-y: scroll;


//   flex: 1 1 0;

  display: flex;

  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 90%;





}


.Chat{
    margin: 1rem 1rem;
  color: #fff;
  padding: 1rem;
  background: linear-gradient(90deg, #1986d8, #7b9cc2);
  max-width: 90%;
    border-radius: 7px;
    // background: linear-gradient(90deg, #1986d8, #7b9cc2);
}

.is-user-msg {
    margin-left: auto;
    background: #2b2c33;

    // border-top-right-radius: 0;
    // border-bottom-right-radius: 0;
    // border-top-left-radius: 10px;
    // border-bottom-left-radius: 10px;
  }

  @media (min-width: 576px) {
    .Chat {
  201
  
  max-width: 60%;
       }
  }

`

const Chat = ({ message }) => {
  const { text, is_user_msg } = message;
  return (
 
    <span className={`Chat ${is_user_msg ? "is-user-msg" : ""}`}
      >{text}</span>
    
  ); 
};
class Chats extends Component {
  render() {
    return (
       <Style>
      <div className="Chats">
        {this.props.messages.map(message => (
          <Chat message={message} key={message.number} />
        ))} </div></Style>
        
    ); 
  }
}
export default Chats;