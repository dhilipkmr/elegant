import { Fragment } from 'react';
import BlurImage from '../../src/components/BlurImage';
import { ABOUTME_HEADING, DESCRIPTION, PHOTO } from '../../src/constants/aboutmeConstants';
import { GALLERY_REDIRECT, GET_QUOTE_REDIRECT } from '../../src/constants/constants';
import Link from 'next/link';

const REDIRECTS = [
	{
		text: GALLERY_REDIRECT,
		url: '/gallery'
	},
	{
		text: GET_QUOTE_REDIRECT,
		url: '/get-quote'
	}
];


function AboutMe({ Component, pageProps }) {
	return (
		<Fragment>
			<div className="p-10 md:p-56 bg-white mt-1">
				<div className="w-full md:w-1/3 flex md:inline-block justify-center my-10">
					<BlurImage src={PHOTO} className="rounded" style={{ width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%' }} />
				</div>
				<div className="text-xl leading-10 w-full md:w-2/3 my-10 inline-block">
					<div className="text-6xl py-12 quicks" style={{ lineHeight: 1.2 }}>{ABOUTME_HEADING}</div>
					{DESCRIPTION}
				</div>
			</div>
			<div className="text-center text-xl flex flex-col justify-center items-center my-10">
				{
					REDIRECTS.map(({ url, text }) => {
						return (
							<Link href={url}>
								<a className="my-5">
									<button className="buttonfx slideleft rounded-full p-3 px-6 quicks flex items-center block whitespace-no-wrap" type="button">
										<span className="whitespace-no-wrap sm:text-xl z-1">{text}</span>
									</button>
								</a>
							</Link>
						)
					})
				}
			</div>
		</Fragment>
	);
}

export default AboutMe;
