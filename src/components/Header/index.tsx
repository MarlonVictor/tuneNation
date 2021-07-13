import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BiSearchAlt2, BiExit, BiMoon, BiSun } from 'react-icons/bi'
import { RiArrowDownSLine } from 'react-icons/ri'

import LogoImage from '../../../public/logo.svg'

import { HeaderContainer, InputContent, NavigationAnchors, ToggleMenu } from './styles'


export function Header() {
	const [isDark, setIsDark] = useState(false)

	return (
		<HeaderContainer>
			<nav>
				<div>
					<Image 
						src={LogoImage}
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
					{isDark 
						? <BiSun 
							className="toggle-theme light" 
							onClick={() => setIsDark(false)}
						/>
						: <BiMoon 
							className="toggle-theme dark" 
							onClick={() => setIsDark(true)}
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