import React from 'react'
import { BiPlus } from 'react-icons/bi'

import { ProfileRelationsContainer, ProfileRelationsFooter } from './styles'


type User = {
	id: number,
	login: string,
	avatar_url: string,
	html_url: string,
}

type FollowersBoxProps = {
	followersList: User[]
}

function FooterComponent() {
	return (
		<ProfileRelationsFooter>
			<a href="/">
				<BiPlus />
				Ver mais pessoas
			</a>
		</ProfileRelationsFooter>
	)
}

export function FollowersBox({ followersList }: FollowersBoxProps) {
	return (
		<ProfileRelationsContainer>
			<h2>Meus Seguidores</h2>

			<ul>
				{followersList.slice(0, 6).map(follower => {
					return (
						<li key={follower.id} className="follower-item">
							<a href={follower.html_url} target="_blank" rel="noreferrer">
								<img src={follower.avatar_url} />
									
								<div>
									<span>@{follower.login}</span>
								</div>
							</a>
						</li>
					)
				})}
			</ul>

			<FooterComponent />
		</ProfileRelationsContainer>
	)
}

export function PopularUsersBox() {
	const popularUsers = [
		'peas',
		'omariosouto',
		'juunegreiros',
		'rafaballerini',
	]
	
	return (
		<ProfileRelationsContainer>
			<h2>Pessoas Populares</h2>

			<ul>
				{popularUsers.map((user, key) => {
					return (
						<li key={key}>
							<img src={`https://github.com/${user}.png`} />
							
							<div>
								<span>@{user}</span>
								<a 
									target="_blank" 
									rel="noreferrer"
									href={`https://github.com/${user}`} 
								>
									Seguir
								</a>
							</div>
						</li>
					)
				})}
			</ul>

			<FooterComponent />
		</ProfileRelationsContainer>
	)
}