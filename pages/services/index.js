import { SERVICES_LIST, SERVICES_HEADING } from '../../src/constants/ServicesConstants';
import BlurImage from '../../src/components/BlurImage';
import { GALLERY_REDIRECT, GET_QUOTE_REDIRECT } from '../../src/constants/constants';
import Link from 'next/link';
import Slider from '../../src/components/Slider';


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

function Services({ Component, pageProps }) {
	return (
		<div className="pb-0 md:pb-20 mx-5 lg:mx-20 xl:mx-32">
			<div className="pt-12 pb-8 md:pb-20 md:pt-20 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">{SERVICES_HEADING}</div>
			{
				SERVICES_LIST.map(({ title, description, list }, index) => {
					return (
						<div id={`type${index}`} className="flex flex-col md:flex-row items-center mb-24 md:mb-16 bg-white rounded shadow mx-auto" style={{ maxWidth: '950px' }}key={index}>
							<div className="md:w-1/2 md:px-3">
								<div className="flex flex-col py-10 items-center md:py-0 md:items-start px-10 md:px-20 ">
									<div className="text-center text-3xl md:text-4xl quicks mb-5 md:my-10">{title}</div>
									<div className="text-xl leading-10">
										{description}
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2">
								<Slider list={list} style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
							</div>
						</div>
					)
				})
			}
			<div className="text-center text-xl flex flex-col justify-center items-center my-10">
				{
					REDIRECTS.map(({ url, text }, index) => (
						<Link href={url} key={index}>
							<a className="my-5">
								<button className="buttonfx slideleft rounded-full p-3 px-6 quicks flex items-center block whitespace-no-wrap" type="button">
									<span className="whitespace-no-wrap sm:text-xl z-1">{text}</span>
								</button>
							</a>
						</Link>
					))
				}
			</div>
		</div>
	);
}

export default Services;
