import React from "react";
import styled from "styled-components"

const Styles = styled.div`
width: 100%;
.Main{
    flex: 1 1 0;
    background-color: rgba(08, 25, 27, 1);
    height: 100%; 
    width: 100%;
}

`

const Main = () => {
  return(
      <Styles>
                <main className="Main">Main Stuff</main>
 
      </Styles>
 
  )
};
export default Main;
