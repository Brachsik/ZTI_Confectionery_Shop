import { ReactNode, createContext, useState } from "react";

interface AuthContextProps {
  children: ReactNode;
}

export interface AuthProps {
  id: string | null;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export const AuthContext = createContext<AuthProps | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  const [id, setId] = useState<string | null>(null);
  const [first_name, setFirst_name] = useState<string>("");
  const [last_name, setLast_name] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("user");

  return (
    <AuthContext.Provider value={{ id, first_name, last_name, email, role }}>
      {children}
    </AuthContext.Provider>
  );
};
