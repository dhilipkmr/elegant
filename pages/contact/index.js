import { Fragment, useState, useEffect } from 'react';
import Map from '../component/shared/Map';
import ContactMessage from '../component/shared/ContactMessage';
import { CONTACT_HEADING, CONTACT_MESSAGE_US, CONTACT_OPTIONS} from '../../src/constants/contactConstants';

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
				<div className="pb-5 pt-8 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">
					{CONTACT_HEADING}
				</div>
				<div className="flex flex-row flex-wrap w-full text-4xl mt-10 mb-10 sm:mb-20 text-left">
					<div className="md:w-3/6 xl:w-2/6 mx-auto">
						{
							CONTACT_OPTIONS.map((option) => {
								const { Icon, url, text } = option;
								return (
									<div className="w-full lg:w-1/2 my-5 lg:inline-block whitespace-no-wrap">
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
				<div className="pb-5 pt-5 sm:pt-12 text-3xl quicks font-extrabold text-center text-gray-800">
					{CONTACT_MESSAGE_US}
				</div>
				<div className="w-full mt-5 mb-10">
					<div className="flex flex-col md:flex-row">
						<ContactMessage />
						{
							loadMap ?
								<Map className="w-full h-64 md:h-auto mapBg rounded" /> :
								<div className="wrapper">
									<div className="w-full mapBg rounded loadingShimmer" style={{ height: '340px' }}/>
								</div>
						}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Contact;
