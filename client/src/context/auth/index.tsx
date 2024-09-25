import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../../services/configs";

type AuthProps = {
  children: ReactNode
}

type userProps = {
  email: string,
  id: number,
}

type AuthContextData = {
  user: userProps | null,
  signed: boolean,
  signIn: (email: string, password: string) => Promise<void>,
}

export const AuthContext = createContext<AuthContextData>({
  user: null,
  signed: true,
  signIn: async () => {
    throw new Error("signIn function not implemented");
  }
});



const teste = {"id":3,"email":"rafael167@gmail.com"}

export const AuthProvider = ({ children }: AuthProps) => {  
  const [user, setUser] = useState<userProps | null>(teste);

  useEffect(() => {
    const loadingStoreData = () => {
      const storagetoken = localStorage.getItem("Auth:token");
      const storageUser = localStorage.getItem("Auth:user");
  
      if (storagetoken && storageUser) {
        setUser(JSON.parse(storageUser))
      } else {
        setUser(null)
      }
    };
    loadingStoreData();
  }, []);  

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post("auth", {
        email,
        password
      });

      setUser(response.data.user);

      api.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;

      localStorage.setItem("Auth:token", response.data.token);
      localStorage.setItem("Auth:user", JSON.stringify(response.data.user));
    }
    catch (error) {
      alert(error)
    }
  }

  const authValue = {
    user,
    signed: !!user,
    signIn
  }

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}