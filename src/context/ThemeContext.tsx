import React, { createContext, ReactNode, useState } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../styles/theme'


type ThemeContextData = {
    theme: DefaultTheme,
    toggleTheme(): void,
}

type ThemesProviderProps = {
    children: ReactNode,
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemesProvider({ children }: ThemesProviderProps){
	const [theme, setTheme] = useState('light')

	function toggleTheme() {
		theme === 'light' ? setTheme('dark') : setTheme('light')
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}