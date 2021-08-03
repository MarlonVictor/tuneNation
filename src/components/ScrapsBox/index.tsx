import React from 'react'

import { ScrapContent } from './styled'


type ScrapType = {
    text: string,
    creatorSlug: string
}

type ScrapsBoxProps = {
    scraps: ScrapType[],
    username: string
}

export function ScrapsBox({ scraps, username }: ScrapsBoxProps) {
	return (
		<section>
			<h2>Scraps</h2>

			{scraps.map((scrap, key) => {
				return (
					<ScrapContent key={key}>
						<img src={`https://github.com/${scrap.creatorSlug}.png`} />
                        
						<div>
							{username === scrap.creatorSlug
								? (
									<a 
										target="_blank"
										rel="noreferrer"
										href={`https://github.com/${scrap.creatorSlug}`}
									>
                                        Eu
									</a>
								)
								: (
									<a 
										target="_blank"
										rel="noreferrer"
										href={`https://github.com/${scrap.creatorSlug}`}
									>
                                        @{scrap.creatorSlug}
									</a>
								)
							}
							<p>{scrap.text}</p>
						</div>
					</ScrapContent>
				)
			})}
		</section>
	)
}