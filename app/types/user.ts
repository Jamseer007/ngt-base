// User.ts
export interface IUser {
    id?: number;
    name: string;
    email: string;
}

export interface IUserList {
  users: IUser[];
}

  