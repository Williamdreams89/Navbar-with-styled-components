import React from "react";
import styled from "styled-components";
import Burger from "./Burger";


function Navbar() {
  const Nav = styled.nav`
    background-color: #333;
    color:aliceblue;
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    height:3rem;
    margin-bottom:1rem;

  `
  return (
    <div>
      <Nav>
        <div className="nav__logo">
          <h2>William Dreams</h2>
        </div>
        <Burger />
      </Nav>
    </div>
  );
}

export default Navbar;
