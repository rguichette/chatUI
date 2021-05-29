import React, {useState} from "react";
import _, { set } from "lodash"
import style from 'styled-components'

import store from "../store";
import Header from "../components/Header";
import Chat from "../components/Chats";

import {sendMessage} from '../actions'

const Style = style.div`
// background-color: green;
max-width: 100%;


// position: fixed;
// bottom: 0;
// margin-left: auto;
// margin-right: auto;
display: inline-block;

   & input {
    //    color: orange;
       width: 90%;
       padding: .3rem;
       margin-bottom: 15px;
       margin-top: 7px;
border-radius: 9px;

}

`


const MessageInput = () => {
  const [textVal, setTextVal]= useState("")
    const {activeUserId}  = store.getState()

function setTypedValue(e){
    setTextVal(e.target.value)
 
}

function handleSubmit (e){
e.preventDefault();
store.dispatch(sendMessage(textVal, activeUserId))
setTextVal("");
console.log("e is", e.target.firstElementChild.value);
e.target.firstElementChild.value = ""


}

  return (
    <Style>
        <div className="container">

 <form onSubmit={handleSubmit}>
<input type="text" 
onChange={setTypedValue}

/></form> 
  </div>
   </Style>
  );
};



export default MessageInput;