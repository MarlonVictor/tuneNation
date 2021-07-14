import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { api } from '../services/api'

import { Header } from '../components/Header'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { FormBox } from '../components/FormBox'
import { ProfileRelationsBox } from '../components/ProfileRelationsBox'

import { HomeContainer } from '../styles/pages/home'


export default function Home() {
	const githubUser = 'MarlonVictor'

	const [followers, setFollowers] = useState([])
	const [popularUsers, setPopularUsers] = useState([])

	async function fetchFollowers() {
		const { data } = await api.get(`users/${githubUser}/followers`)
		setFollowers(data)
	}

	async function fetchPopularUsers() {
		const { data } = await api.get('orgs/Rocketseat/members')
		setPopularUsers(data)
	}

	useEffect(() => {
		fetchFollowers()
		fetchPopularUsers()
	}, [])

	return (
		<>
			<Head>
				<title>Home | tuneNation</title>
			</Head>

			<Header />

			<HomeContainer>
				<div>
					<ProfileSidebar username={githubUser} />

					<section>
						<h2>Comunidades</h2>
					</section>
				</div>

				<div>
					{/* <section className="flex">
						<h2>Bem vindo(a), Marlon Victor</h2>
						<small className="day">
							<strong>Sorte de hoje: </strong>
							O melhor profeta do futuro é o passado
						</small>
					</section> */}

					<section>
						<FormBox />
					</section>

					<section>
						<h2>Scraps</h2>
					</section>
				</div>

				<div>
					<ProfileRelationsBox 
						type="popular"
						users={popularUsers}
					/>

					<ProfileRelationsBox 
						type="followers"
						users={followers}
					/>
				</div>
			</HomeContainer>
		</>
	)
}