import React from "react";
import style from "styled-components"

import {setActiveUserId, deleteContact} from '../actions'
import store from '../store'

const Style = style.div`


.User {
    display: flex;
    align-items: flex-start;
    padding: 1rem;
  }
  
  .User:hover {
    background: rgba(255, 0, 0, 0.2);
    cursor: pointer;
  }
  
  .User__pic {
    width: 50px;
    border-radius: 50%;
  }
  
  .User__details {
    display: none;
  }
  /* not small devices  */
  
  @media (min-width: 576px) {
    .User__details {
      display: block;
      padding: 0 0 0 1rem;
    }
    .User__details-name {
      margin: 0;
      color: rgba(255, 255, 255, 0.8);
      font-size: 1rem;
    } 
  }


`

const User = ({ user }) => {
  const { name, profile_pic, status } = user;

  //delete goes here 
  return (
      <Style> 
      <div style={{backgroundColor:"red"}} onClick={handleDeleteContact.bind(null, user.user_id)}>delete</div>

    <div className="User" onClick={handleUserClick.bind(null, user)}>
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__details">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div> </Style>
  );
};

function handleUserClick({ user_id }) {
  console.log("handleUser");
  store.dispatch(setActiveUserId(user_id));
}

function handleDeleteContact(user_id){
  console.log("target is: ", user_id)
  store.dispatch(deleteContact(user_id))
}

export default User;