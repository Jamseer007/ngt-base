import React from 'react';
import users from '../__mock/data/userList.json'
import UserList from '../app/components/user/UserList';
import { IUser } from '@/app/types/user';

export default {
  title: 'Components/User/UserList',
  component: UserList,
};

export const Default = () => {
  return <UserList users={ users as IUser[]}  />
};


export const WithEmptyUserList = () => {
  return <UserList users={[]}  />
};