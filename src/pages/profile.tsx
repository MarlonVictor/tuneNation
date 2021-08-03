import Head from 'next/head'
import Link from 'next/link'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

import { api } from '../services/api'

import { Header } from '../components/Header'
import { ProfileInfos } from '../components/ProfileInfos'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { FollowersBox } from '../components/ProfileRelationsBox'

import { ProfileContainer, CommunitiesButton } from '../styles/pages/profile'


type ProfileProps = {
	githubUser: string
}

export default function Profile({ githubUser }: ProfileProps) {
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
		<ProfileContainer>
			<Head>
				<title>Perfil | tuneNation</title>
			</Head>

			<Header 
				page="profile" 
				username={githubUser} 
			/>
            
			<main>
				<div>
					<ProfileSidebar user={userInfos} />
				</div>

				<Link href="/communities">
					<CommunitiesButton>
						Ver todas comunidades
					</CommunitiesButton>
				</Link>

				<ProfileInfos 
					user={userInfos}
				/>

				<FollowersBox 
					username={githubUser}
					followersList={followers} 
				/>
			</main>
		</ProfileContainer>
	)
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const token = nookies.get(context).USER_TOKEN
	const { githubUser }: any = jwt.decode(token)

	return {
		props: {
			githubUser
		}
	}	
}