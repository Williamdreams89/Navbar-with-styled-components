import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "../RightNav";

function Burger() {
  const [showMenu, setShowMenu] = useState(false);

  const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 10px;
    right: 20px;
    pointer: cursor;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${({ showMenu }) => (showMenu ? "orangered" : "white")};
      pointer: cursor;
      border-radius: 10px;
      transform-origin: 1px;
      transition: 0.3s linear;
    }

    div:nth-of-type(1) {
      transform: ${({ showMenu }) =>
        showMenu ? "rotate(45deg)" : "rotate(0)"};
    }

    div:nth-of-type(2) {
      transform: ${({ showMenu }) =>
        showMenu ? "translateX(100%)" : "translate(0)"};
      opacity: ${({ showMenu }) => (showMenu ? "0" : "1")};
    }

    div:nth-of-type(3) {
      transform: ${({ showMenu }) =>
        showMenu ? "rotate(-45deg)" : "rotate(0)"};
    }

    @media screen and (min-width: 761px) {
      display: none;
    }
  `;
  return (
    <>
      <StyledBurger showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
        <div />
        <div />
        <div />
      </StyledBurger>
        <RightNav  showMenu = {showMenu} />
    </>
  );
}

export default Burger;
