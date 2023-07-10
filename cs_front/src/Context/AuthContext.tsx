import { ReactNode, createContext, useContext, useState } from "react";
import { UserType } from "../API/userType";
import { useNavigate } from "react-router-dom";
import { BasketContext } from "./BasketContext";

interface AuthContextProps {
  children: ReactNode;
}

export interface AuthProps {
  id: string | null;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
  login: (arg0: UserType) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [id, setId] = useState<string | null>(null);
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const basketCtx = useContext(BasketContext);

  const navigate = useNavigate();

  const login = (data: UserType) => {
    setId(data.id);
    setFirst_name(data.firstName);
    setLast_name(data.lastName);
    setEmail(data.email);
    if (data.role !== null) setRole(data.role);
    navigate("/desserts");
  };

  const logout = () => {
    setId(null);
    setFirst_name("");
    setLast_name("");
    setEmail("");
    setRole("user");
    basketCtx?.clearBasket();
    navigate("/desserts");
  };

  return (
    <AuthContext.Provider
      value={{ id, first_name, last_name, email, role, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
