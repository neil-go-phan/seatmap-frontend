import React, { useEffect, useState } from "react";
import axiosClient from "src/helpers/axiosClient";
import {
  UserListContainer,
  TableUser,
  HeaderItem,
} from "src/components/userList/style";
import User from "./user";
import Swal from "sweetalert2";

export interface IUser {
  Username: string;
  FullName: string;
  Role: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  useEffect(() => {
    const getUserList = async () => {
      let userList: Array<IUser> = [];
      try {
        const { data } = await axiosClient.get(`/auth/users`);
        data.forEach((user: IUser) => {
          if (user.Role !== "Admin") {
            userList.push(user);
          }
        });
        setUsers(userList);
      } catch (error: any) {
        Swal.fire({
          title: "Error",
          text: "You do not have permission",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    };
    getUserList();
  }, []);

  const handleDeleteUser = async (username: string, index: number) => {
    try {
      const { data } = await axiosClient.delete(
        `/auth/delete-user/${username}`
      );
      setUsers(users.filter((user) => user.Username !== username));
      Swal.fire({
        title: "Success",
        text: data.message,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error: any) {
      Swal.fire({
        title: "Error",
        text: "Error when trying to detele user",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (users.length !== 0) {
    return (
      <UserListContainer>
        <TableUser>
          <thead>
            <tr>
              <HeaderItem>Index</HeaderItem>
              <HeaderItem>Full name</HeaderItem>
              <HeaderItem>Username</HeaderItem>
              <HeaderItem>Role</HeaderItem>
              <HeaderItem>Action</HeaderItem>
            </tr>
          </thead>
          <tbody>
            {users.map((user: IUser, index: number) => {
              return (
                <User
                  user={user}
                  index={index}
                  handleDeleteUser={handleDeleteUser}
                />
              );
            })}
          </tbody>
        </TableUser>
      </UserListContainer>
    );
  }
  return (
    <UserListContainer>
      <div>Loading</div>
    </UserListContainer>
  );
};

export default UserList;
