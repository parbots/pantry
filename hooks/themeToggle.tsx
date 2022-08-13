import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from 'react';

interface ThemeToggleInterface {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeToggleContext = createContext<ThemeToggleInterface | null>(
    null
);

type ProviderProps = {
    children: ReactNode;
};

export const ThemeProvider = ({ children }: ProviderProps) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeToggleContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeToggleContext.Provider>
    );
};

export const useThemeToggle = () => {
    return useContext(ThemeToggleContext);
};
