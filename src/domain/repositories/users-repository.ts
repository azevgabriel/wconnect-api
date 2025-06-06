import { AddUserModel, UserModel } from '@/domain/models/users';

export interface UsersRepository {
  add: (user: AddUserModel) => Promise<Omit<UserModel, 'password'>>;
  loadByEmail: (email: string) => Promise<UserModel | null>;
}
