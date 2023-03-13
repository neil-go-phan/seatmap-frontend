import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

export const NavbarContainer = styled.div`
  background-color: #FFB100 ;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1A0000;
  font-weight: 600;
`;

export const NavBarLink = styled(Link)`
  text-decoration: none;
`;

export const Tabs = styled.div`
display: flex;
flex-grow: 1;

`

export const TabBtn = styled.div`
display: inline-block;
margin: 0 0.5rem;
background-color: #FFB100;
line-height: 1.42;
text-decoration: none;
text-align: center;
white-space: normal;
font-size: calc(var(--typeBaseSize) - 4px);
font-size: max(calc(var(--typeBaseSize) - 4px), 13px);
font-weight: 700;
text-transform: uppercase;
letter-spacing: 0.3em;
color: #1A0000;
font-weight: 600;
font-size: 1rem;
padding: 0.3rem 1rem;
border: 1px solid transparent;

cursor: pointer;

position: relative;
overflow: hidden;
transition: .5s ease;
&:hover{
  background-image: linear-gradient(90deg,transparent,hsla(0,0%,100%,.25),transparent);
`

export const LogoutBtn = styled(FaSignOutAlt)`
  color: #fff;
  font-size: 2rem;
  cursor: pointer;

`