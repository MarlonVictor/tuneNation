import React from 'react'

import { ProfileInfosContainer, NostalgicIconsList } from './styles'


type ProfileInfosProps = {
	randomPhrase: string
}

export function ProfileInfos({ randomPhrase }: ProfileInfosProps) {
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
				<h2>Bem vindo(a), Marlon Victor</h2>
					
				<p>
					<strong>Frase do momento: </strong>
					{randomPhrase}
				</p>

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
						<strong>Email:</strong>
						<span>cmarlonvictor11@gmail.com</span>
					</li>
					<li>
						<strong>Github:</strong>
						<span>https://github.com/MarlonVictor</span>
					</li>
					<li>
						<strong>Companhia:</strong>
						<span>UNIGRANRIO</span>
					</li>
					<li>
						<strong>Localização:</strong>
						<span>Rio de Janeiro</span>
					</li>
					<li>
						<strong>Biografa:</strong>
						<span>19 years, studying Analysis and Systems Development</span>
					</li>
				</ul>
			</section>
		</ProfileInfosContainer>
	)
}