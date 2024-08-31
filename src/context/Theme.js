import { createContext, useContext } from "react"

export const ThemeContext = createContext({
 lightMode: 'light',
 darkMode: 'dark',
 ThemeMode: () => {}
})

export const ContextProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}