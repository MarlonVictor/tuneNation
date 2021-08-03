import Link from 'next/link'
import Image from 'next/image'
import { destroyCookie } from 'nookies'
import React, { useContext } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { BiSearchAlt2, BiExit, BiMoon, BiSun, BiUser } from 'react-icons/bi'

import { ThemeContext } from '../../context/ThemeContext'

import LightLogoImage from '../../../public/light-logo.svg'
import DarkLogoImage from '../../../public/dark-logo.svg'

import { HeaderContainer, InputContent, NavigationAnchors, ToggleMenu } from './styles'


type HeaderProps = {
	page: string,
	username: string,
}

export function Header({ page, username }: HeaderProps) {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<HeaderContainer>
			<nav>
				<div>
					<Link href="/home">
						<a>
							<Image 
								src={theme === 'light' ? LightLogoImage : DarkLogoImage}
								alt="Tune Nation"
								width={100}
								height={50}
							/>
						</a>
					</Link>

					<InputContent>
						<BiSearchAlt2 />
						<input type="text" placeholder="Pesquisar" />
					</InputContent>

					<NavigationAnchors>
						<Link href="/home">
							<a className={page === 'home' ? 'active' : ''}>Home</a>
						</Link>
						<Link href="/profile">
							<a className={page === 'profile' ? 'active' : ''}>Perfil</a>
						</Link>
						<Link href="/communities">
							<a className={page === 'communities' ? 'active' : ''}>Comunidades</a>
						</Link>
					</NavigationAnchors>
				</div>
				
				<div>
					{theme == 'light' 
						? <BiMoon 
							className="toggle dark" 
							onClick={toggleTheme}
						/>
						: <BiSun 
							className="toggle light" 
							onClick={toggleTheme}
						/>
					}

					<ToggleMenu>
						<img src={`https://github.com/${username}.png`} />
						<span>@{username}</span>
						<RiArrowDownSLine className="arrow" />

						<div>
							<Link href="/profile">
								<a>
									Perfil
									<BiUser />
								</a>
							</Link>
							
							<Link href="/">
								<a onClick={() => destroyCookie(null, 'USER_TOKEN')}>
									Sair
									<BiExit />
								</a>
							</Link>
						</div>
					</ToggleMenu>
				</div>
			</nav>
		</HeaderContainer>
	)
}