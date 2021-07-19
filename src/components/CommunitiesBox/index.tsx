import React from 'react'
import { BiPlus } from 'react-icons/bi'

import { CommunitiesBoxList, CommunitiesBoxFooter } from './styles'


type CommunityType = {
    id: string,
    title: string,
    imageUrl: string,
    creatorSlug: string,
	communityUrl: string
}

type CommunitiesBoxProps = {
    communities: CommunityType[],
}

export function CommunitiesBox({ communities }: CommunitiesBoxProps) {
	return (
		<section>
			<h2>Comunidades</h2>

			<CommunitiesBoxList>
				{communities.map(community => {
					return (
						<li key={community.id}>
							<a 
								target='_blank'
								rel="noreferrer"
								href={community.communityUrl}
							>
								<img src={community.imageUrl} alt={community.title} />
								<span>{community.title}</span>
							</a>
						</li>
					)
				})}
			</CommunitiesBoxList>

			<CommunitiesBoxFooter>
				<a href="/">
					<BiPlus />
					Ver mais comunidades
				</a>
			</CommunitiesBoxFooter>
		</section>
	)
}