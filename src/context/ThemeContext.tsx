import nookies from 'nookies'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import React, { createContext, ReactNode, useState, useEffect } from 'react'

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
	const [theme, setTheme] = useState('')
	const { THEME_MODE } = nookies.get(null, 'THEME_MODE')

	useEffect(() => {
		if (!THEME_MODE) {
			nookies.set(null, 'THEME_MODE', 'light', {
				path: '/',
				maxAge: 86400 * 7
			})

		} else {
			setTheme(THEME_MODE)
		} 
	}, [])

	function toggleTheme() {
		if (theme === 'light') {
			nookies.set(null, 'THEME_MODE', 'dark', {
				path: '/',
				maxAge: 86400 * 7
			})
			setTheme('dark')

		} else {
			nookies.set(null, 'THEME_MODE', 'light', {
				path: '/',
				maxAge: 86400 * 7
			})
			setTheme('light')
		}
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}