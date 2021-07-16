import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { api } from '../services/api'

import { FollowersBox, PopularUsersBox } from '../components/ProfileRelationsBox'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { CommunitiesBox } from '../components/CommunitiesBox'
import { FormBox } from '../components/FormBox'
import { Header } from '../components/Header'

import { HomeContainer } from '../styles/pages/home'


export default function Home() {
	const githubUser = 'MarlonVictor'

	const [followers, setFollowers] = useState([])

	async function fetchFollowers() {
		const { data } = await api.get(`users/${githubUser}/followers`)
		setFollowers(data)
	}

	useEffect(() => {
		fetchFollowers()
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

					<PopularUsersBox />
				</div>

				<div>
					<section>
						<FormBox />
					</section>

					<section>
						<h2>Scraps</h2>
					</section>
				</div>

				<div>
					<CommunitiesBox />

					<FollowersBox followersList={followers} />
				</div>
			</HomeContainer>
		</>
	)
}