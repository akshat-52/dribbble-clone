import { createContext, useContext, useState } from "react"
import { RenderHeader } from "../components/structure/Header";
import { RenderFooter } from "../components/structure/Footer";
import { RenderMenu, RenderRoutes } from "../components/structure/RenderNavigation";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {

     const [user, setUser] = useState({ name: "", isAuthenticated: false });

     const login = (userName, password) => {
          // Replace this logic with your actual authentication mechanism
          // For demonstration purposes, I'll use hardcoded username and password
          const validUsername = "user";
          const validPassword = "password";

          if (userName === validUsername && password === validPassword) {
               setUser({ name: userName, isAuthenticated: true });
               return Promise.resolve("success");
          } else {
               return Promise.reject("Incorrect username or password");
          }
     };

     const logout = () => {
          setUser({ name: "", isAuthenticated: false });
     };

     return (
          <AuthContext.Provider value={{ user, login, logout }}>
               <>
                    <RenderHeader />
                    <RenderMenu />
                    <RenderRoutes />
                    <RenderFooter />
               </>
          </AuthContext.Provider>
     );
};

export default AuthWrapper;
