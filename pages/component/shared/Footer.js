import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiFacebook, FiPhone } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';

function Footer() {
	return (
		<div className="justify-center p-10 bg-black text-gray-400 footer_border">
			<ul className="w-full">
				<li className="mb-8 w-full md:w-1/3 flex flex-row md:justify-center md:inline-block">
					<div className="flex flex-col items-center">
						<div>
							<div className="text-xl uppercase quicks font-extrabold inline-block">
								Explore
							<div className="brdr50"></div>
							</div>
							<ul className="mt-5 leading-9">
								<li>About Us</li>
								<li>Testimony</li>
								<li>Portfolio</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="mb-8 w-full md:w-1/3 flex flex-row md:justify-center md:inline-block">
					<div className="flex flex-col items-center">
						<div>
							<div className="text-xl uppercase quicks font-extrabold inline-block">
								Services
							<div className="brdr50"></div>
							</div>
							<ul className="mt-5 leading-9">
								<li>Bridal makeup</li>
								<li>Party makeup</li>
								<li>Pre Wedding Makeup</li>
								<li>Post Wedding Makeup</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="mb-8 w-full md:w-1/3 flex flex-row md:justify-center md:inline-block">
					<div className="flex flex-col items-center">
						<div>
							<div className="text-xl uppercase quicks font-extrabold inline-block">
								Get in Touch
							<div className="brdr50"></div>
							</div>
							<ul className="mt-8 text-3xl flex flex-wrap">
								<li className="mr-3 footer-icon">
									<a target="_blank" href="tel:555-555-5555">
										<FiPhone />
									</a>
								</li>
								<li className="mx-3 footer-icon">
									<a target="_blank" href="mailto:name@email.com">
										<GoMail />
									</a>
								</li>
							</ul>
							<ul className="mt-5 text-3xl flex flex-wrap">
								<li className="mr-3 footer-icon">
									<a target="_blank" href="https://www.instagram.com">
										<FaInstagram />
									</a>
								</li>
								<li className="mx-3 footer-icon">
									<a target="_blank" href="https://www.facebook.com">
										<FiFacebook />
									</a>
								</li>
								<li className="mx-3 footer-icon">
									<a target="_blank" href="https://www.whatsapp.com">
										<FaWhatsapp />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
			<div className="text-center my-5 quicks font-bold">
				Copyright 2020 | ALL RIGHTS RESERVED ©
			</div>
		</div>
	)
}

export default Footer;