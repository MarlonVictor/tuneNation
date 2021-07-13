import React, { FormEvent, useState } from 'react'

import { BiMessageAdd, BiGroup } from 'react-icons/bi'
import { IoMdSend } from 'react-icons/io'

import { FormBoxContainer, ButtonContainer } from './styles'


type CommunityType = {
    name: string,
    imageUrl: string,
}

export function FormBox() {
	const [isScrap, setIsScrap] = useState(true)

	const [communities, setCommunities] = useState<CommunityType[]>([])

	const [communityName, setCommunityName] = useState('')
	const [communityImage, setCommunityImage] = useState('')

	function handleGetFormData(e: FormEvent) {
		e.preventDefault()
		
		if (!isScrap) {
			if (communityName == '' || communityImage == '') {
				return
			}

			setCommunities([
				...communities,
				{
					name: communityName,
					imageUrl: communityImage,
				}
			])
		}

		setCommunityName('')
		setCommunityImage('')
		return
	}
    
	return (
		<FormBoxContainer onSubmit={handleGetFormData}>
			{isScrap 
				? (
					<textarea 
						placeholder="Qual mensagem você quer deixar?"
					/>
				)
				: (
					<div className="create-community-wrapper">
						<input 
							placeholder="Url da imagem de capa" 
							type="text"
							value={communityImage}
							onChange={e => setCommunityImage(e.target.value)}
						/>
						<input 
							placeholder="Nome da comunidade" 
							type="text"
							value={communityName}
							onChange={e => setCommunityName(e.target.value)}
						/>
					</div>
				)
			}
			
			<footer>
				<ButtonContainer>
					<button 
						type="button"
						onClick={() => setIsScrap(true)}
						className={isScrap ? 'selected' : ''}
					>
						<BiMessageAdd /> 
                    Deixar um scrap
					</button>
					<button 
						type="button"
						onClick={() => setIsScrap(false)}
						className={isScrap ? '' : 'selected'}
					>
						<BiGroup /> 
                        Criar uma comunidade
					</button>
				</ButtonContainer>

				<button type="submit">
					<IoMdSend />
				</button>
			</footer>
		</FormBoxContainer>
	)
}