import React from "react";
import styled from 'styled-components'


import User from "../containers/User"


const SidebarWrapper = styled.div`


.Sidebar{
    width: 80px;
  background-color: rgba(32, 32, 35, 1);
  height: 100%;
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  transition: width 0.3s;
  overflow-y: scroll;
}

/* not small devices  */
@media (min-width: 576px) {
  .Sidebar {
    width: 320px;
  }
}
`



const Sidebar = ({contacts}) => {
  return (
  <SidebarWrapper>
        <aside className="Sidebar">

            {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
        
        
        </aside>;
  </SidebarWrapper>)
};
export default Sidebar;