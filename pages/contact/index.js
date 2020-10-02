import { Fragment, useState, useEffect } from 'react';
import Map from '../component/shared/Map';
import ContactMessage from '../component/shared/ContactMessage';
import { CONTACT_HEADING, CONTACT_MESSAGE_US, CONTACT_OPTIONS} from '../../src/constants/contactConstants';
import Link from 'next/link';
import { GET_QUOTE_REDIRECT } from '../../src/constants/constants';

function Contact() {
	const [loadMap, setLoadMap] = useState(false);
	
	useEffect(() => {
		setTimeout(() => {
			setLoadMap(true);
		}, 2000);
	}, []);

	return (
		<Fragment>
			<div className="md:mx-20 md:mb-20 p-5">
				<div className="bg-white">
					<div className="pb-5 pt-20 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">
						{CONTACT_HEADING}
					</div>
					<div className="flex flex-row flex-wrap w-full text-4xl mt-10 text-left pb-20">
						<div className="md:w-3/6 xl:w-2/6 mx-auto">
							{
								CONTACT_OPTIONS.map((option) => {
									const { Icon, url, text } = option;
									return (
										<div className="w-full lg:w-1/2 my-5 lg:inline-block sm:whitespace-no-wrap max-w-xs sm:max-w-none">
											<a className="contact-icon" href={url} target="_blank">
												<Icon className="inline-block mr-4" />
												<span className="text-xl">{text}</span>
											</a>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
				<div className="mt-0 bg-white">
					<div className="pb-5 pt-5 sm:pt-12 text-3xl quicks font-extrabold text-center text-gray-800">
						{CONTACT_MESSAGE_US}
					</div>
					<div className="w-full mt-5 mb-10">
						<div className="flex flex-col md:flex-row bg-white p-10">
							<ContactMessage />
							{
								loadMap ?
									<Map className="w-full h-64 md:h-auto mapBg rounded" /> :
									<div className="wrapper">
										<div className="w-full mapBg rounded loadingShimmer" style={{ height: '340px' }} />
									</div>
							}
						</div>
					</div>
					<div className="text-center text-xl flex flex-col justify-center items-center my-10 pb-20">
						<Link href="/get-quote">
							<a className="my-5">
								<button className="buttonfx slideleft rounded-full p-3 px-6 quicks flex items-center block whitespace-no-wrap" type="button">
									<span className="whitespace-no-wrap sm:text-xl z-1">{GET_QUOTE_REDIRECT}</span>
								</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Contact;
