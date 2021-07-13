import React from 'react'

import { BiPlus } from 'react-icons/bi'

import { PopularProfilesContainer } from './styles'


export function PopularProfiles() {
	const favoritesPeople = [
		'juunegreiros',
		'omariosouto',
		'peas',
		'rafaballerini',
		'marcobrunodev',
	]

	return (
		<PopularProfilesContainer>
			<h2>Pessoas populares</h2>

			<ul>
				{favoritesPeople.map((people, key) => {
					return (
						<li key={key}>
							<img src={`https://github.com/${people}.png`} />
							
							<div>
								<span>@{people}</span>
								<a 
									target="_blank" 
									rel="noreferrer"
									href={`https://github.com/${people}`} 
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

export function ProfileFriends() {
	return (
		<section>
			<h2>Meus seguidores</h2>
		</section>
	)
}