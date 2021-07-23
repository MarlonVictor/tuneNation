import Head from 'next/head'
import nookies from 'nookies'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FiGithub } from 'react-icons/fi'
import { BiMoon, BiSun } from 'react-icons/bi'
import React, { FormEvent, useContext, useState } from 'react'

import { ThemeContext } from '../context/ThemeContext'

import DarkLogoImage from '../../public/dark-logo.svg'
import WhiteLogoImage from '../../public/white-logo.svg'

import { LoginContainer, FormContainer } from '../styles/pages/login'


export default function Login() {
	const router = useRouter()
	const { theme, toggleTheme } = useContext(ThemeContext)

	const [githubUser, setGithubUser] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	async function handleSignIn(e: FormEvent) {
		e.preventDefault()
		
		if(githubUser != '') {
			setIsLoading(true)

			const { token } = await fetch('https://alurakut.vercel.app/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ githubUser: githubUser })
			}).then(res => res.json())

			nookies.set(null, 'USER_TOKEN', token, {
				path: '/',
				maxAge: 86400 * 7
			})
			router.push('/home')

		} else {
			window.alert('Preencha o campo')
		}
	}

	return (
		<LoginContainer>
			<Head>
				<title>Login | tuneNation</title>
			</Head>

			<header>
				<Image 
					width={110}
					height={50}
					alt="Tune Nation"
					src={theme === 'light' ? WhiteLogoImage : DarkLogoImage}
				/>

				<h1>Conecte-se, compartilhe e reaja com seus seguidores do Github</h1>

				{theme == 'light' 
					? <BiMoon 
						className="toggle dark" 
						onClick={toggleTheme}
					/>
					: <BiSun 
						className="toggle light" 
						onClick={toggleTheme}
					/>
				}
			</header>

			<FormContainer>
				<div>
					<h3>Seja Bem-vindo,</h3>
					<p>por favor digite o username da sua conta do Github:</p>
				</div>

				<form onSubmit={handleSignIn}>
					<input 
						type="text"
						value={githubUser}
						placeholder="Ex: MarlonVictor"
						onChange={e => setGithubUser(e.target.value)}
					/>

					<button type="submit">
						{isLoading 
							? 'Carregando...' 
							: (
								<>
									<FiGithub />
									Fazer login
								</>
							)
						}
					</button>
				</form>

				<div>
					<h3>Ainda não possui uma conta?</h3>
					<a
						target="_blank" 
						rel="noreferrer"
						href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
					>
						ENTRAR JÁ
					</a>
				</div>
			</FormContainer>

			<footer>
				<h2>Como funciona?</h2>

				<p><strong>Conecte-se </strong>aos seus amigos e familiares usando recados e mensagens instantâneas</p>
				<p><strong>Conheça </strong>novas pessoas através de amigos de seus amigos e comunidades</p>
				<p><strong>Compartilhe </strong>suas músicas, projetos e paixões em um só lugar</p>
			</footer>
		</LoginContainer>
	)
}