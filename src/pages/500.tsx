import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { NotFoundContainer } from '../styles/pages/error'


export default function Custom500() {
	const router = useRouter()

	function goToHome() {
		router.push('/')
	}

	function goBack() {
		router.back()
	}

	return (
		<NotFoundContainer>
			<Head>
				<title>500 | tuneNation</title>
			</Head>
			<div className="top">
				<h1>500</h1>
				<h3>ERROR</h3>
			</div>
			<div className="container">
				<div className="ghost-copy">
					<div className="one" />
					<div className="two" />
					<div className="three" />
					<div className="four" />
				</div>
				<div className="ghost">
					<div className="face">
						<div className="eye" />
						<div className="eye-right" />
						<div className="mouth" />
					</div>
				</div>
				<div className="shadow" />
			</div>
			<div className="bottom">
				<p>Parece que não ocorreu algum erro ao encontrar a página que você estava procurando!</p>
				<div className="buttons">
					<button onClick={goBack}>Back</button>
					<button onClick={goToHome}>Home</button>
				</div>
			</div>
		</NotFoundContainer>
	)
}