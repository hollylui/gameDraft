import { createContext, useState } from "react";

// Create Context object.
export const userContext = createContext();

// Export Provider.
export function UserProvider({ children }) {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <userContext.Provider value={[pageIndex, setPageIndex]}>
      {children}
    </userContext.Provider>
  );
}

// Export useContext Hook.
export default UserProvider;
