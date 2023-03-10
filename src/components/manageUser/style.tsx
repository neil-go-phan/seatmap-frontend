import styled from "styled-components";

export const UserListContainer = styled.div``;

export const ManageUserTitle= styled.div`
  width: 100%;
  min-height: 10vh;
  display: table;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
  display: table-cell;
  }
`;

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

export const Modal = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin: 0;
`;

export const Line = styled.div`
  border-bottom: 2px solid #000;
  margin: 1rem 0;
`;

export const ErrorMessage = styled.p`
  max-width: 100%;
  margin-top: 0.3rem;
  padding-left: 10px;

  color: red;

  font-size: 0.8rem;
  font-weight: 600;
  text-align: left;
`;

export const ErrorMessageFromSever = styled(ErrorMessage)`
  text-align: center;
  font-size: 1rem;
`;

export const SubmitBtn = styled.button`
  background-color: #184b29;
  line-height: 1.42;
  text-decoration: none;
  text-align: center;
  white-space: normal;
  font-size: calc(var(--typeBaseSize) - 4px);
  font-size: max(calc(var(--typeBaseSize) - 4px), 13px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.3rem 1rem;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 50px;

  cursor: pointer;

  position: relative;
  overflow: hidden;
  transition: .5s ease;
  &:hover{
    background-image: linear-gradient(90deg,transparent,hsla(0,0%,100%,.25),transparent);
`;

export const Info = styled.label`
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 1em;
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 90%;

  max-width: 100%;
  padding: 8px 10px;
  border-radius: 0;

  background-color: #fff;
  cursor: text;
  font-weight: 500;
  font-size: 1em;
`;

export const InputCluster = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const RoleSelect = styled.select`
min-width: 50%;
height: 100%;
padding: 0.5rem;
margin-bottom: 1rem;
font-size:1rem;
`

export const RoleOption = styled.option`
  padding: 0.5rem;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
`