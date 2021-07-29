import React from 'react'
import Link from 'next/link'
import { BiPlus } from 'react-icons/bi'


import { CommunitiesBoxList, CommunitiesBoxFooter, AllCommunitiesBoxContainer } from './styles'


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
				{communities.slice(0, 5).map(community => {
					return (
						<li key={community.id}>
							<a 
								target="_blank"
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
				<Link href="/communities">
					<a>
						<BiPlus />
						Ver mais comunidades
					</a>
				</Link>
			</CommunitiesBoxFooter>
		</section>
	)
}

export function AllCommunitiesBox({ communities }: CommunitiesBoxProps) {
	return (
		<AllCommunitiesBoxContainer>
			<h2>Todas Comunidades:</h2>

			<main>
				{communities.map(community => {
					return (
						<a target="_blank" 
							rel="noreferrer"
							key={community.id} 
							href={community.communityUrl} 
						>
							<img src={community.imageUrl} />
							<span>{community.title}</span>
						</a>
					)
				})}
			</main>
		</AllCommunitiesBoxContainer>
	)
}