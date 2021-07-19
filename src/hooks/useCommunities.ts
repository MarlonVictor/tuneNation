import { useEffect, useState } from 'react'


type CommunityType = {
    id: string,
    title: string,
    imageUrl: string,
    creatorSlug: string,
	communityUrl: string
}

export function useCommunities() {
	const [communities, setCommunities] = useState<CommunityType[]>([])

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
					allCommunities {
						id 
						title
						imageUrl
						creatorSlug
						communityUrl
					}
				}` 
			})
		})
			.then(res => res.json())
			.then(res => setCommunities(res.data.allCommunities))
	}, [])

	return { communities }
}