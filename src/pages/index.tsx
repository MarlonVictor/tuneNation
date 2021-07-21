import React, { useEffect, useState } from 'react'
import Head from 'next/head'

import { api } from '../services/api'
import { useCommunities } from '../hooks/useCommunities'

import { FollowersBox, PopularUsersBox } from '../components/ProfileRelationsBox'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { CommunitiesBox } from '../components/CommunitiesBox'
import { FormBox } from '../components/FormBox'
import { Header } from '../components/Header'

import { HomeContainer } from '../styles/pages/home'


export default function Home() {
	const githubUser = 'MarlonVictor'

	const { communities } = useCommunities()

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

			<Header page="home" />

			<HomeContainer>
				<div className="left">
					<ProfileSidebar username={githubUser} />

					<PopularUsersBox />
				</div>

				<div className="mid">
					<section>
						<FormBox />
					</section>

					<section>
						<h2>Scraps</h2>
					</section>
				</div>

				<div className="right">
					<CommunitiesBox communities={communities} />

					<FollowersBox 
						username={githubUser}
						followersList={followers} 
					/>
				</div>
			</HomeContainer>
		</>
	)
}