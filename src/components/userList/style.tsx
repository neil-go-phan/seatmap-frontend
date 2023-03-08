import styled from "styled-components";

export const UserListContainer = styled.div``;

export const TableUser = styled.table`
  border-collapse: collapse;
  width: 80%;
  margin: auto;
  margin-top: 2rem;
`;

export const HeaderItem = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-weight: bold;
`;

export const UserItem = styled.td`
  border: 1px solid #dddddd;
  padding: 8px;
`;

export const EditUser = styled.button`
display: inline-block;
margin: 0 0.5rem;
background-color: #006400;
text-decoration: none;
text-align: center;
white-space: normal;
font-weight: 700;
text-transform: uppercase;
color: #ffffff;
font-weight: 600;
padding: 0.3rem 1rem;
border: 1px solid transparent;
border-radius: 50px;

cursor: pointer;

position: relative;
overflow: hidden;
transition: .5s ease;
&:hover{
  background-image: linear-gradient(90deg,transparent,hsla(0,0%,100%,.25),transparent);

`;
export const DeleteUser = styled.button`
  display: inline-block;
margin: 0 0.5rem;
background-color: #f10000;
text-decoration: none;
text-align: center;
white-space: normal;
font-weight: 700;
text-transform: uppercase;
color: #ffffff;
font-weight: 600;
padding: 0.3rem 1rem;
border: 1px solid transparent;
border-radius: 50px;

cursor: pointer;

position: relative;
overflow: hidden;
transition: .5s ease;
&:hover{
  background-image: linear-gradient(90deg,transparent,hsla(0,0%,100%,.25),transparent);

`;
