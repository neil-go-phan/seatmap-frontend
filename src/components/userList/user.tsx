import React from "react";
import { IUser } from "./index";
import { DeleteUser, EditUser, UserItem } from "./style";

interface Props {
  user: IUser;
  index: number;
}
const Users: React.FC<Props> = ({ user, index }: Props) => {
  const handleDelete = () => {

  }
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
        <DeleteUser onClick={handleDelete}>Delete</DeleteUser>
      </UserItem>
    </tr>
  );
};

export default Users;
