import React from "react";
import Empty from "./components/Empty";
import ChatWindow from "./containers/ChatWindow";

import style from 'styled-components'


const Style =style.div`
backgroung-color: red;
width: 100%;
height: 100%;
`
const Main = ({ user, activeUserId }) => {

  const renderMainContent = () => {
    if (!activeUserId) {
      return <Empty user={user} activeUserId={activeUserId} />;
    } else {
        return <ChatWindow activeUserId={activeUserId} />;
       }
  };
  return <Style><main className="Main">{renderMainContent()}</main></Style>;
};
export default Main;