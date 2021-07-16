import Link from 'next/link'
import Image from 'next/image'
import React, { useContext } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { BiSearchAlt2, BiExit, BiMoon, BiSun } from 'react-icons/bi'

import { ThemeContext } from '../../context/ThemeContext'

import LightLogoImage from '../../../public/light-logo.svg'
import DarkLogoImage from '../../../public/dark-logo.svg'

import { HeaderContainer, InputContent, NavigationAnchors, ToggleMenu } from './styles'


export function Header() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<HeaderContainer>
			<nav>
				<div>
					<Image 
						src={theme === 'light' ? LightLogoImage : DarkLogoImage}
						alt="Tune Nation"
						width={100}
						height={50}
					/>

					<InputContent>
						<BiSearchAlt2 />
						<input type="text" placeholder="Pesquisar" />
					</InputContent>

					<NavigationAnchors>
						<Link href="/">
							<a className='active'>Home</a>
						</Link>
						<Link href="/friends">
							<a>Amigos</a>
						</Link>
						<Link href="/communities">
							<a>Comunidades</a>
						</Link>
					</NavigationAnchors>
				</div>
				
				<div>
					{theme == 'light' 
						? <BiSun 
							className="toggle-theme light" 
							onClick={toggleTheme}
						/>
						: <BiMoon 
							className="toggle-theme dark" 
							onClick={toggleTheme}
						/>
					}

					<ToggleMenu>
						<img src={'https://github.com/MarlonVictor.png'} />
						<span>@MarlonVictor</span>
						<RiArrowDownSLine className="arrow" />

						<div>
							<a href="/">
								Sair
								<BiExit />
							</a>
						</div>
					</ToggleMenu>
				</div>
			</nav>
		</HeaderContainer>
	)
}