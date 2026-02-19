import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [name, setName] = useState("Julien");

  const value = {
    name: name,
    setName: setName,
    helloWorld: () => {
      console.log("hello world");
    },
  };

  return <UserContext value={value}>{children}</UserContext>;
};

export default UserContextProvider;

export { UserContext };
