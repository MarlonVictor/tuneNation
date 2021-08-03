import { useEffect, useState } from 'react'


type ScrapType = {
    text: string,
    creatorSlug: string
}

export function useScraps() {
	const [scraps, setScraps] = useState<ScrapType[]>([])

	useEffect(() => {
		fetch('https://graphql.datocms.com/', {
			method: 'POST',
			headers: {
				'Authorization': '43e5aaddfe296b52e4f105c338ab52',
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({ 
				'query': `query {
					allScraps {
						text
						creatorSlug
					}
				}` 
			})
		})
			.then(res => res.json())
			.then(res => setScraps(res.data.allScraps))

	}, [])

	return { scraps }
}