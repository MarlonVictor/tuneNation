import React, { useState } from 'react'

import { BiMessageAdd, BiGroup } from 'react-icons/bi'
import { IoMdSend } from 'react-icons/io'

import { FormBoxContainer, ButtonContainer } from './styles'


export function FormBox() {
	const githubUser = 'MarlonVictor'

	const [isScrap, setIsScrap] = useState(true)

	function handleNewCommunity(e) {
		e.preventDefault()

		const data = new FormData(e.target)

		const community = {
			title: data.get('title'),
			imageUrl: data.get('imageUrl'),
			creatorSlug: githubUser,
			communityUrl: data.get('communityUrl'),
		}

		if (!isScrap) {
			fetch('/api/communities', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(community)
			})

			setIsScrap(true)
		}
	}

	function handleChangeContent() {
		setIsScrap(!isScrap)
	}
    
	return (
		<FormBoxContainer onSubmit={handleNewCommunity}>
			<div>
				{isScrap 
					? (
						<textarea 
							placeholder="Digite seu scrap aqui..."
						/>
					)
					: (
						<>
							<input 
								type="text"
								name="title"
								placeholder="Nome da comunidade" 
								required
							/>
							<input 
								type="text"
								name="imageUrl"
								placeholder="Url da imagem de capa" 
								required
							/>
							<input 
								type="text"
								name="communityUrl"
								placeholder="Link externo da comunidade" 
								required
							/>
						</>
					)
				}
			</div>


			<ButtonContainer>
				{isScrap
					? (
						<button onClick={handleChangeContent} type="reset">
							<BiGroup />
							Criar uma comunidade
						</button>
					)
					: (
						<button onClick={handleChangeContent} type="reset">
							<BiMessageAdd />
							Deixar um scrap
						</button>
					)
				}
				
				<button className="submit">
					<IoMdSend />
				</button>
			</ButtonContainer>
		</FormBoxContainer>
	)
}