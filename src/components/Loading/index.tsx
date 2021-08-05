import React from 'react'
import Head from 'next/head'
import ReactLoading from 'react-loading'

import { LoadingContainer } from './styles'


export function Loading() {
	return (
		<LoadingContainer>
			<Head>
				<title>Carregando...</title>
			</Head>

			<ReactLoading 
				type='spinningBubbles' 
				color='#7698E2' 
				height={'6rem'} 
				width={'6rem'} 
			/>
		</LoadingContainer>
	)
}