import React from 'react'
import Link from 'next/link'

import { ProfileSidebarContainer } from './styles'


type ProfileSidebarProps = {
    user: {
		name: string,
		login: string,
		followers: number,
		following: number,
	}
}

export function ProfileSidebar({ user }: ProfileSidebarProps) {
	return (
		<ProfileSidebarContainer>
			<header>
				<Link href="/profile">
					<a>
						<img src={`https://github.com/${user?.login}.png`} />

						<h3>{user?.name}</h3>
						<span>@{user?.login}</span>
					</a>
				</Link>

				<div className="infos">
					<div>
						<h3>{user?.following}</h3>
						<span>Seguindo</span>
					</div>
					<div>
						<h3>{user?.followers}</h3>
						<span>Seguidores</span>
					</div>
				</div>
			</header>
		</ProfileSidebarContainer>
	)
}