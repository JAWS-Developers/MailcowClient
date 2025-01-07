import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the context type
type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

// Create the context with a default value of "light"
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

type ThemeProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'light') {
            root.style.setProperty('--background-color', '#ededed');
            root.style.setProperty('--sidebar-background-color', '#f8f9fa');
            root.style.setProperty('--text-color', '#333333');
            root.style.setProperty('--hover-background-color', '#f0f0f0');
            root.style.setProperty('--primary-color', '#007bff');
        } else {
            root.style.setProperty('--background-color', '#1e1e2f');
            root.style.setProperty('--sidebar-background-color', '#2a2a40');
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--hover-background-color', '#3a3a50');
            root.style.setProperty('--primary-color', '#6a9efc');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
