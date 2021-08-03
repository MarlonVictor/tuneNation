import Head from 'next/head'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

import { api } from '../services/api'
import { useScraps } from '../hooks/useScraps'
import { useCommunities } from '../hooks/useCommunities'

import { Header } from '../components/Header'
import { FormBox } from '../components/FormBox'
import { ScrapsBox } from '../components/ScrapsBox'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { CommunitiesBox } from '../components/CommunitiesBox'
import { FollowersBox, PopularUsersBox } from '../components/ProfileRelationsBox'

import { HomeContainer } from '../styles/pages/home'


type HomeProps = {
	githubUser: string
}

export default function Home({ githubUser }: HomeProps) {
	const { communities } = useCommunities()
	const { scraps } = useScraps()

	const [followers, setFollowers] = useState([])
	const [userInfos, setUserInfos] = useState()

	async function fetchFollowers() {
		const { data } = await api.get(`users/${githubUser}/followers`)
		setFollowers(data)
	}

	async function fetchUserInfos() {
		const { data } = await api.get(`users/${githubUser}`)
		setUserInfos(data)
	}
	
	useEffect(() => {
		fetchFollowers()
		fetchUserInfos()
	}, [])

	if(!userInfos) {
		return (
			<h3>Loading...</h3>
		)
	}

	return (
		<HomeContainer>
			<Head>
				<title>Home | tuneNation</title>
			</Head>

			<Header 
				page="home" 
				username={githubUser} 
			/>

			<main>
				<div className="left">
					<ProfileSidebar user={userInfos} />

					<PopularUsersBox />

					<FollowersBox 
						username={githubUser}
						followersList={followers} 
					/>
				</div>

				<div className="mid">
					<section>
						<FormBox username={githubUser} />
					</section>
                    
					<ScrapsBox 
						scraps={scraps} 
						username={githubUser}
					/>
				</div>

				<div className="right">
					<CommunitiesBox communities={communities} />

					<FollowersBox 
						username={githubUser}
						followersList={followers} 
					/>
				</div>
			</main>
		</HomeContainer>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = nookies.get(context).USER_TOKEN
	
	const { isAuthenticated } = await fetch('https://alurakut-vinixiii.vercel.app/api/auth', {
		headers: {
			Authorization: token
		}
	}).then(res => res.json())

	if (!isAuthenticated) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			}
		}
	}

	const { githubUser }: any = jwt.decode(token)

	if (!githubUser) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			}
		}
	}

	return {
		props: {
			githubUser
		}
	}	
}