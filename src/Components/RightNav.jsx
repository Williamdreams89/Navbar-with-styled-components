import React from 'react';
import styled from "styled-components";


function RightNav() {
    const Ul = styled.ul`
    display:flex;
    width: 60vw;
    justify-content:space-evenly;
    list-style-type:none;
    align-items:center;

    @media screen and (max-width:760px){
        flex-direction: column;
        position: absolute;
        top: 10px;
        right:0;
        gap: 2rem;
        background-color: #333;
        height: 100vh;
        width:70vw;
        transform: ${({showMenu}) => showMenu ? "translateX(0)" : "translate(100%)"}
    }
    `
  return (
    <div showMenu = {showMenu}>
        <Ul showMenu = {showMenu}>
          <li>Home</li>
          <li>AboutMe</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </Ul>
    </div>
  )
}

export default RightNav