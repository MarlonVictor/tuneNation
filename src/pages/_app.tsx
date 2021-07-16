import React from 'react'
import { AppProps } from 'next/app'

import { ThemesProvider } from '../context/ThemeContext'

import GlobalStyle from '../styles/global'


export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemesProvider>
			<GlobalStyle />
			<Component { ...pageProps } />
		</ThemesProvider>
	)
}