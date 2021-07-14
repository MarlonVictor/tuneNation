import React from 'react'

import { BiPlus } from 'react-icons/bi'

import { PopularProfilesContainer } from './styles'


type User = {
	id: number,
	login: string,
	avatar_url: string,
	html_url: string,
}

type ProfileRelationsBoxProps = {
	type: string,
	users?: User[],
}

export function ProfileRelationsBox({ type, users }: ProfileRelationsBoxProps) {
	if (type === 'followers') {
		return (
			<PopularProfilesContainer>
				<h2>Meus seguidores</h2>

				<ul>
					{users.slice(0, 6).map(user => {
						return (
							<li key={user.id} className="follower-item">
								<a href={user.html_url} target="_blank" rel="noreferrer">
									<img src={user.avatar_url} />
									
									<div>
										<span>@{user.login}</span>
									</div>
								</a>
							</li>
						)
					})}
				</ul>

				<footer>
					<a href="/">
						<BiPlus />
						Ver mais pessoas
					</a>
				</footer>
			</PopularProfilesContainer>
		)

	} else {
		return (
			<PopularProfilesContainer>
				<h2>Pessoas populares</h2>

				<ul>
					{users.slice(0, 4).map(user => {
						return (
							<li key={user.id}>
								<img src={user.avatar_url} />
							
								<div>
									<span>@{user.login}</span>
									<a 
										target="_blank" 
										rel="noreferrer"
										href={user.html_url} 
									>
										Seguir
									</a>
								</div>
							</li>
						)
					})}
				</ul>

				<footer>
					<a href="/">
						<BiPlus />
						Ver mais pessoas
					</a>
				</footer>
			</PopularProfilesContainer>
		)
	}
}