import { createContext } from "react";

export const CreatTry = createContext();



export const TryProvider = ({ children }) => {
    const myValue = {
 name:"grandelfe",
 age:"500 years",
 passion:"magic"
}
  return <CreatTry.Provider value={myValue}>{children}</CreatTry.Provider>;
};
