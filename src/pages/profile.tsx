import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import axios from 'axios'

import { api } from '../services/api'

import { FollowersBox } from '../components/ProfileRelationsBox'
import { ProfileSidebar } from '../components/ProfileSidebar'
import { ProfileInfos } from '../components/ProfileInfos'
import { Header } from '../components/Header'

import { ProfileContainer } from '../styles/pages/profile'


export default function Profile() {
	const githubUser = 'MarlonVictor'

	const [followers, setFollowers] = useState([])
	const [phrase, setPhrase] = useState('')

	async function fetchFollowers() {
		const { data } = await api.get(`users/${githubUser}/followers`)
		setFollowers(data)
	}

	async function fetchPhrase() {
		const { data } = await axios.get('https://allugofrases.herokuapp.com/frases/random')
		setPhrase(data.frase)
	}
	
	useEffect(() => {
		fetchPhrase()
		fetchFollowers()
	}, [])

	return (
		<>
			<Head>
				<title>Perfil | tuneNation</title>
			</Head>

			<Header page="profile" />
            
			<ProfileContainer>
				<div>
					<ProfileSidebar username={githubUser} />
				</div>

				<ProfileInfos 
					randomPhrase={phrase}
				/>

				<FollowersBox 
					username={githubUser}
					followersList={followers} 
				/>
			</ProfileContainer>
		</>
	)
}