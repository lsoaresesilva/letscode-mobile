// @flow

import { IUser } from '../interfaces/User';

export default class User implements IUser {
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  id: string;

  name: string;

  email: string;

  password: string;
}
