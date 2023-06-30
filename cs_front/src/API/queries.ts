import axios from "axios";
import { User, UserRegister } from "./userType";
import { useMutation } from "react-query";
import { Products } from "./producType";

interface loginProps {
  email: string;
  pswd: string;
}

export const loginQuery = async (data: loginProps) => {
  return await axios.post<User>(
    `${import.meta.env.VITE_BACKEND}/login`,
    { ...data },
    {
      withCredentials: true,
    }
  );
};

export const useMutationLogin = () => {
  return useMutation(loginQuery);
};

export const registerQuery = async (data: UserRegister) => {
  return await axios.post<User>(
    `${import.meta.env.VITE_BACKEND}/user`,
    { ...data },
    {
      withCredentials: true,
    }
  );
};

export const getProducts = async () => {
  return await axios.get<Products>(`${import.meta.env.VITE_BACKEND}/products`);
};

export const getUsers = async () => {
  return await axios.get<Products>(`${import.meta.env.VITE_BACKEND}/user`);
};

export const deleteUser = async (data: string) => {
  return await axios.delete(`${import.meta.env.VITE_BACKEND}/user/${data}`, {
    withCredentials: true,
  });
};

export const useMutationUserDelete = () => {
  return useMutation(deleteUser);
};

export const deleteProduct = async (data: string) => {
  return await axios.delete(
    `${import.meta.env.VITE_BACKEND}/products/${data}`,
    {
      withCredentials: true,
    }
  );
};

export const useMutationProductDelete = () => {
  return useMutation(deleteProduct);
};
