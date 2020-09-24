import { Fragment, useState, useEffect } from 'react';
import { GoMail } from 'react-icons/go';
import Map from '../component/shared/Map';
import { FiFacebook, FiPhone } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ContactMessage from '../component/shared/ContactMessage';

function Contact({ Component, pageProps }) {
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
					Get in touch with Us
				</div>
				<div className="flex flex-row flex-wrap w-full text-4xl mt-10 mb-10 sm:mb-20 text-left">
					<div className="md:w-3/6 xl:w-2/6 mx-auto">
						<div className="w-full lg:w-1/2 my-5 lg:inline-block whitespace-no-wrap">
							<a className="contact-icon" href="/">
								<FaInstagram className="inline-block mr-4" />
								<span className="text-xl">@ms_elegant</span>
							</a>
						</div>
						<div className="w-full lg:w-1/2 my-5 lg:inline-block whitespace-no-wrap">
							<a className="contact-icon" href="/">
								<FaWhatsapp className="inline-block mr-4" />
								<span className="text-xl">@9999-9999</span>
							</a>
						</div>
						<div className="w-full lg:w-1/2 my-5 lg:inline-block whitespace-no-wrap">
							<a className="contact-icon" href="/">
								<FiFacebook className="inline-block mr-4" />
								<span className="text-xl">@ms_elegant</span>
							</a>
						</div>
						<div className="w-full lg:w-1/2 my-5 lg:inline-block whitespace-no-wrap">
							<a className="contact-icon" href="/">
								<GoMail className="inline-block mr-4" />
								<span className="text-xl">name@email.com</span>
							</a>
						</div>
						{/* <div className="w-full lg:w-1/2 my-5 lg:inline-block">
							<a className="contact-icon" href="/">
								<FiPhone className="inline-block mr-4" />
								<span className="text-xl">+91-99999-99999</span>
							</a>
						</div> */}
					</div>
				</div>
				<div className="pb-5 pt-5 sm:pt-12 text-3xl quicks font-extrabold text-center text-gray-800">
					Send us a Message
				</div>
				<div className="w-full mt-5 mb-10">
					<div className="flex flex-col md:flex-row">
						<ContactMessage />
						{loadMap ? <Map className="w-full h-64 md:h-auto mapBg rounded" /> : <div className="w-full mapBg rounded" />}
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Contact;
