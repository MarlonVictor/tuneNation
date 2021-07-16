import React from 'react'
import { BiPlus } from 'react-icons/bi'

import { CommunitiesBoxList, CommunitiesBoxFooter } from './styles'


export function CommunitiesBox() {
	const communities = [
		{
			title: 'Red Hot Chili Peppers Brasil',
			imageUrl: 'https://scontent.fbhz2-1.fna.fbcdn.net/v/t1.6435-9/80009508_2076254039143754_7117716770407841792_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=e3f864&_nc_ohc=EH21sXxfpTYAX9jaNnC&tn=gBC96MFmSn0IxJ1C&_nc_ht=scontent.fbhz2-1.fna&oh=3ff72ac9d358c007212619ba35747b11&oe=60F5FB84'
		},
		{
			title: 'Rock Eterno',
			imageUrl: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/102770922_2592062977725680_4282122336332062291_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8631f5&_nc_ohc=3zmeY3DSZxEAX_-X344&_nc_ht=scontent-gig2-1.xx&oh=8882f9bf73085935e337204a46723f4b&oe=60F4E608'
		},
		{
			title: 'Linkin Park Family',
			imageUrl: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/165775838_5933909423301908_7784027905359332051_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8631f5&_nc_ohc=4ZWefRBitLsAX_SEcFY&_nc_ht=scontent-gig2-1.xx&oh=525a41ec7c8d1916b12248bf001d160b&oe=60F688FF'
		},
		{
			title: '100% SYSTEM OF A DOWN',
			imageUrl: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/s960x960/204571785_10159795801304459_5133212782435756359_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8631f5&_nc_ohc=06Xo5OcuDWMAX93RB2W&_nc_ht=scontent-gig2-1.xx&oh=c58da7c74edf2d5b01d02c92ba7b856c&oe=60F59B39'
		},
		{
			title: 'Trap Flacko',
			imageUrl: 'https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/78370471_160638965298346_8949231880738177024_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=uz2yYvsm0iEAX-mTcnc&_nc_ht=scontent-gig2-1.xx&oh=74d89712268a06487e08a8a94a5a7eb0&oe=60F5E6C9'
		},
	]

	return (
		<section>
			<h2>Comunidades</h2>

			<CommunitiesBoxList>
				{communities.map((community, key) => {
					return (
						<li key={key}>
							<a href="">
								<img src={community.imageUrl} />
								<span>{community.title}</span>
							</a>
						</li>

					)
				})}
			</CommunitiesBoxList>

			<CommunitiesBoxFooter>
				<a href="/">
					<BiPlus />
					Ver mais comunidades
				</a>
			</CommunitiesBoxFooter>
		</section>
	)
}