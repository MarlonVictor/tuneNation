import React from 'react'
import Head from 'next/head'

import { Header } from '../components/Header'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { FormBox } from '../components/FormBox'
import { PopularProfiles, ProfileFriends } from '../components/ProfileRelationsBox'

import { HomeContainer } from '../styles/pages/home'


export default function Home() {
	const githubUser = 'MarlonVictor'

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
					<section>
						<FormBox />
					</section>

					<section>
						<h2>Scraps</h2>
					</section>
				</div>

				<div>
					<PopularProfiles />
					<ProfileFriends />
				</div>
			</HomeContainer>
		</>
	)
}