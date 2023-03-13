import React, { useState } from "react";
import Popup from "reactjs-popup";
import EditModal from "./editModal";
import { IUser } from "./index";
import { DeleteUser, EditUser, UserItem } from "./style";

interface Props {
  user: IUser;
  index: number;
  handleDeleteUser: (username: string, index: number) => Promise<void>;
  handleEditUser:(username: string, full_name:string, role: string) => void;
}
const Users: React.FC<Props> = ({ user, index, handleDeleteUser, handleEditUser }: Props) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const handleEditModelClose = () => {
    setIsEditModalOpen(false);
  };
  return (
    <tr>
      <UserItem>{index}</UserItem>
      <UserItem>{user.FullName}</UserItem>
      <UserItem>{user.Username}</UserItem>
      <UserItem>{user.Role}</UserItem>
      <UserItem>
        <EditUser onClick={() => setIsEditModalOpen(!isEditModalOpen)}>
          Edit
        </EditUser>
        <Popup modal open={isEditModalOpen} onClose={handleEditModelClose}>
          <EditModal
            handleEditModelClose={handleEditModelClose}
            handleEditUser={handleEditUser}
            fullName={user.FullName}
            defaultRole={user.Role}
            username={user.Username}
          />
        </Popup>
        <DeleteUser onClick={() => handleDeleteUser(user.Username, index)}>
          Delete
        </DeleteUser>
      </UserItem>
    </tr>
  );
};

export default Users;
