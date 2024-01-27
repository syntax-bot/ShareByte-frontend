import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const Themes = {
    light: 'light',
    dark: 'dark',
}

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(Themes.light);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
