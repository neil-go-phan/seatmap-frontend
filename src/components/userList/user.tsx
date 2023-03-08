import React from "react";
import { IUser } from "./index";
import { DeleteUser, EditUser, UserItem } from "./style";

interface Props {
  user: IUser;
  index: number;
  handleDeleteUser: (username: string, index:number) => Promise<void>
}
const Users: React.FC<Props> = ({ user, index, handleDeleteUser }: Props) => {

  const handleEdit = () => {

  }
  return (
    <tr>
      <UserItem>{index}</UserItem>
      <UserItem>{user.FullName}</UserItem>
      <UserItem>{user.Username}</UserItem>
      <UserItem>{user.Role}</UserItem>
      <UserItem>
        <EditUser onClick={handleEdit}>Edit</EditUser>
        <DeleteUser onClick={()=>handleDeleteUser(user.Username, index)}>Delete</DeleteUser>
      </UserItem>
    </tr>
  );
};

export default Users;
