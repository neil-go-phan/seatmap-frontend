import React, { useEffect, useState } from "react";
import axiosClient from "src/helpers/axiosClient";
import {
  UserListContainer,
  TableUser,
  HeaderItem,
} from "src/components/userList/style";
import User from "./user";


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
        // parse json to users
        data.forEach((user: IUser) => userList.push(user));
        setUsers(userList);
      } catch (error) {
        console.log(error);
      }
    };
    getUserList();
  }, []);
  console.log(users);
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
              return <User user={user} index={index} />;
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
