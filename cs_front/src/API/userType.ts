export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export interface Users {
  users: User[];
}

export interface UserRegister {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  pswd: string;
}
