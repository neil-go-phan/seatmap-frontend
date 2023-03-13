import React, { useEffect, useState } from "react";
import axiosClient from "src/helpers/axiosClient";
import {
  UserListContainer,
  TableUser,
  HeaderItem,
  ManageUserTitle,
} from "src/components/manageUser/style";
import User from "./user";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { _ROUTES } from "src/constants/appRoutes";

export interface IUser {
  Username: string;
  FullName: string;
  Role: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const navigate = useNavigate();

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
        
        navigate(_ROUTES.HOME_PAGE);
      }
    };
    getUserList();
    // eslint-disable-next-line
  }, []);

  const handleDeleteUser = async (username: string) => {
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

  const handleEditUser = (
    username: string,
    full_name: string,
    role: string
  ) => {
    setUsers(users.map((user) => {
      if (user.Username === username) {
        user.FullName = full_name
        user.Role = role
        return user
      }
      return user
    }))
  };

  if (users.length !== 0) {
    return (
      <UserListContainer>
        <ManageUserTitle><h1>Manage users</h1></ManageUserTitle>
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
                  handleEditUser={handleEditUser}
                  key={`user_list_${index}`}
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
