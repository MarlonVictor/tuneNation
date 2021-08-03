import type { NextApiRequest, NextApiResponse } from 'next'
import { SiteClient } from 'datocms-client'


export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		const token = process.env.DATOCMS_FULL_ACCESS_TOKEN
		const client = new SiteClient(token)

		const newScrap = await client.items.create({
			itemType: '1026963', // model ID
			...req.body,
		})

		res.json({
			data: newScrap
		})

		return
	}

	res.status(404).json({
		message: 'ERROR: Only post method requests'
	})
}