import Head from 'next/head'
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'

import { api } from '../services/api'
import { useCommunities } from '../hooks/useCommunities'

import { Header } from '../components/Header'
import { AllCommunitiesBox } from '../components/CommunitiesBox'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { PopularUsersBox } from '../components/ProfileRelationsBox'

import { CommunitiesContainer } from '../styles/pages/communities'


type CommunitiesProps = {
	githubUser: string
}

export default function Communities({ githubUser }: CommunitiesProps) {
	const { communities } = useCommunities()

	const [userInfos, setUserInfos] = useState()

	async function fetchUserInfos() {
		const { data } = await api.get(`users/${githubUser}`)
		setUserInfos(data)
	}
	
	useEffect(() => {
		fetchUserInfos()
	}, [])

	if(!userInfos) {
		return (
			<h3>Loading...</h3>
		)
	}

	return (
		<CommunitiesContainer>
			<Head>
				<title>Perfil | tuneNation</title>
			</Head>

			<Header 
				page="communities" 
				username={githubUser} 
			/>
            
			<main>
				<div className="left">
					<ProfileSidebar user={userInfos} />

					<PopularUsersBox />
				</div>

				<AllCommunitiesBox communities={communities} />
			</main>
		</CommunitiesContainer>
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