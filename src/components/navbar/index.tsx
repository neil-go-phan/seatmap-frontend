import React from "react";
import Auth from "../auth";
import {NavbarContainer, Title} from "./style"
const NavBar: React.FC = () => {
  return (
    <NavbarContainer>
      <Title>Seatmap</Title>
      <Auth />
    </NavbarContainer>
  );
};

export default NavBar;
