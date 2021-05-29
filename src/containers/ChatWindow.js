import React from "react";
import _ from "lodash"
import style from 'styled-components'

import store from "../store";
import Header from "../components/Header";
import Chat from "../components/Chats";
import MessageInput from "./MessageInput"
const Style = style.div`
.ChatWindow {

  display: flex;

  flex-direction: column;
  height: 100vh;
  background-color: orange;
}

`



const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];

  return (
    <Style>
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chat messages={_.values(activeMsgs)}/>
      <MessageInput />
    </div></Style>
  );
};

export default ChatWindow;