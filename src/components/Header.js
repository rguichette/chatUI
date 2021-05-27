import React from "react";

import style from 'styled-components'


const Style = style.div`
.Header {
    padding: 1rem 2rem;
    border-bottom: 1px solid rgba(189, 189, 192, 0.2);
    
}
`

function Header({ user }) {
  const { name, status } = user;
  return (
      <Style>
    <header className="Header">
      <h1 className="Header__name">{name}</h1>
      <p className="Header__status">{status}</p>
    </header> </Style>
  );
}

export default Header;