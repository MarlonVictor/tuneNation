import React from 'react'

import { ProfileInfosContainer, NostalgicIconsList } from './styles'


type UserType = {
	bio: string,
	name: string,
	email: string,
	company: string,
	location: string,
	html_url: string,
}

type ProfileInfosProps = {
	user: UserType
}

export function ProfileInfos({ user }: ProfileInfosProps) {
	const nostalgicIcons = [
		[
			{ name: 'Scraps', icon: 'book' },
			{ name: 'Fotos', icon: 'camera' },
			{ name: 'Videos', icon: 'video-camera' },
			{ name: 'Fãs', icon: 'star' },
			{ name: 'Mensagens', icon: 'email' },
		],
		[
			{ name: 'Confiável', icon: 'smile' },
			{ name: 'Legal', icon: 'cool' },
			{ name: 'Sexy', icon: 'heart' },
		]
	]

	return (
		<ProfileInfosContainer>
			<section>
				<h2>Bem vindo(a), {user.name}</h2>

				<NostalgicIconsList>
					{nostalgicIcons[0].map(({ name, icon }) => {
						return (
							<li key={icon}>
								<span style={{ gridArea: 'title' }}>
									{name}
								</span>
								<span style={{ gridArea: 'number' }}>
									<img src={`https://alurakut.vercel.app/icons/${icon}.svg`} />
									0
								</span>
							</li>
						)
					})}
					{nostalgicIcons[1].map(({ name, icon }) => {
						return (
							<li key={icon}>
								<span>
									{name}
								</span>

								<span style={{ gridArea: 'number' }}>
									{[0, 1, 2].map((_, index) => {
										const isHeartActive = index <= (2 - 1)

										return (
											<img 
												key={index} 
												src={`https://alurakut.vercel.app/icons/${icon}.svg`} 
												style={{ marginRight: '2px', opacity: isHeartActive ? 1 : '0.5' }} 
											/>	
										)
									})}
								</span>
							</li>
						)
					})}
				</NostalgicIconsList>
			</section>

			<section>
				<h2>Dados do perfil</h2>

				<ul>
					<li>
						<p>
							<strong>Email: </strong>
							{user.email || '...'}
						</p>
					</li>
					<li>
						<p>
							<strong>Github: </strong>
							{user.html_url || '...'}
						</p>
					</li>
					<li>
						<p>
							<strong>Localização: </strong>
							{user.location || '...'}
						</p>
					</li>
					<li>
						<p>
							<strong>Companhia(s): </strong>
							{user.company || '...'}
						</p>
					</li>
					<li>
						<p>
							<strong>Biografia: </strong>
							{user.bio || '...'}
						</p>
					</li>
				</ul>
			</section>
		</ProfileInfosContainer>
	)
}