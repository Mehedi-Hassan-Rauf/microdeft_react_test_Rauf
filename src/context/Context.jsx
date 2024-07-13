import { createContext, useContext } from "react";

const ThemeContext = createContext(null);

export const useData = () => {
  return useContext(ThemeContext);
};

export default function MyApp(children) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
