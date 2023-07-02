import axios from "axios";
import { UserType, UserRegister } from "./userType";
import { useMutation } from "react-query";
import { ProductType, ProductTypeCreate } from "./producType";

interface loginProps {
  email: string;
  pswd: string;
}

export const loginQuery = async (data: loginProps) => {
  return await axios.post<UserType>(
    `${import.meta.env.VITE_BACKEND}/user/login`,
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
  return await axios.post<ProductType>(
    `${import.meta.env.VITE_BACKEND}/user`,
    { ...data },
    {
      withCredentials: true,
    }
  );
};

export const useMutationRegister = () => {
  return useMutation(registerQuery);
};

export const getProducts = async () => {
  return await axios.get<ProductType[]>(
    `${import.meta.env.VITE_BACKEND}/products`
  );
};

export const getUsers = async () => {
  return await axios.get<UserType[]>(`${import.meta.env.VITE_BACKEND}/user`);
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

export const productQuery = async (data: ProductTypeCreate) => {
  return await axios.post(
    `${import.meta.env.VITE_BACKEND}/products`,
    { ...data },
    {
      withCredentials: true,
    }
  );
};

export const useMutationCreateProduct = () => {
  return useMutation(productQuery);
};

export const productEditQuery = async (data: ProductType) => {
  return await axios.put(
    `${import.meta.env.VITE_BACKEND}/products/${data.id}`,
    { ...data },
    {
      withCredentials: true,
    }
  );
};

export const useMutationEditProduct = () => {
  return useMutation(productEditQuery);
};
