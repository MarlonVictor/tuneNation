import React from 'react'
import Link from 'next/link'

import { ProfileSidebarContainer } from './styles'


type ProfileSidebarProps = {
    username: string,
}

export function ProfileSidebar({ username }: ProfileSidebarProps) {
	return (
		<ProfileSidebarContainer>
			<header>
				<Link href="/profile">
					<a>
						<img src={`https://github.com/${username}.png`} />

						<h3>Marlon Victor</h3>
						<span>@{username}</span>
					</a>
				</Link>

				<div className="infos">
					<div>
						<h3>27</h3>
						<span>Seguindo</span>
					</div>
					<div>
						<h3>31</h3>
						<span>Seguidores</span>
					</div>
					<div>
						<h3>3</h3>
						<span>Comunidades</span>
					</div>
				</div>
			</header>
		</ProfileSidebarContainer>
	)
}