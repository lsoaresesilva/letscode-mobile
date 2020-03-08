/* eslint-disable class-methods-use-this */
// @flow
import User from '../../model/User';

import { firebaseFirestore } from '../api';

export class UserService {
  getAll(): Promise<User[]> {}
}
