import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({}); // creatin user context

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    try {
      if (!user) {
        axios.get("/api/profile").then(({ data }) => {
          setUser(data);
        });
      }
    } catch (err) {}
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
