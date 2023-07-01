export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

export interface Users {
  users: UserType[];
}

export interface UserRegister {
  firstName: string;
  lastName: string;
  email: string;
  pswd: string;
}
