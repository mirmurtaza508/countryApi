import { createContext, useState } from "react";

export const themeContext = createContext()

export function ThemeProvider ({children}){
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("theme")))
 
   return <themeContext.Provider value={[isDark,setIsDark]}>
    {children}
  </themeContext.Provider>
}