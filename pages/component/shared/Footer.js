import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiFacebook, FiPhone } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import Link from 'next/link';

function Footer() {
	return (
		<div className="justify-center p-10 md:pt-24 bg-black text-gray-400">
			<ul className="w-full">
				<li className="mb-8 w-1/2 md:w-1/3 inline-block">
					<div>
						<div className="flex flex-col items-start md:items-center">
							<div>
								<div className="text-2xl uppercase quicks font-extrabold inline-block">
									Explore
							<div className="brdr50"></div>
								</div>
								<ul className="mt-5 leading-9 md:text-lg">
									<li className="footer-icon">
										<Link href="/about">
											<a>About Us</a>
										</Link>
									</li>
									<li className="footer-icon">
										<Link href="/services">
											<a>Services</a>
										</Link>
									</li>
									<li className="footer-icon">
										<Link href="/testimonials">
											<a>Testimony</a>
										</Link>
									</li>
									<li className="footer-icon">
										<Link href="/gallery">
											<a>Gallery</a>
										</Link>
									</li>
									<li className="footer-icon">
										<Link href="/contact">
											<a>Contact</a>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</li>
				<li className="mb-8 w-1/2 md:w-1/3 inline-block">
					<div className="flex flex-col items-start md:items-center">
						<div>
							<div className="text-2xl uppercase quicks font-extrabold inline-block">
								Services
							<div className="brdr50"></div>
							</div>
							<ul className="mt-5 leading-9 md:text-lg">
								<li>Bridal makeup</li>
								<li>Party makeup</li>
								<li>Pre Wedding Makeup</li>
								<li>Post Wedding Makeup</li>
							</ul>
						</div>
					</div>
				</li>
				<li className="mb-8 md:w-1/3 inline-block">
					<div className="flex flex-col items-start md:items-center">
						<div>
							<div className="text-2xl uppercase quicks font-extrabold inline-block">
								Get in Touch
							<div className="brdr50"></div>
							</div>
							<ul className="mt-5 text-3xl flex flex-wrap flex-col">
								{/* <li className="mr-3 footer-icon">
									<a target="_blank" href="tel:555-555-5555">
										<FiPhone className="inline-block mr-3" />
										<span className="text-lg sm:text-xl">contactus@mselegant.in</span>
									</a>
								</li> */}
								<li className="mr-3 footer-icon">
									<a target="_blank" href="mailto:name@email.com">
										<GoMail className="inline-block mr-3" />
										<span className="text-lg sm:text-xl">contactus@mselegant.in</span>
									</a>
								</li>
								<li className="mr-3 footer-icon">
									<a target="_blank" href="https://www.instagram.com">
										<FaInstagram className="inline-block mr-3" />
										<span className="text-lg sm:text-xl">@mselegant</span>
									</a>
								</li>
								<li className="mr-3 footer-icon">
									<a target="_blank" href="https://www.facebook.com">
										<FiFacebook className="white inline-block mr-3" />
										<span className="text-lg sm:text-xl">@mselegant</span>
									</a>
								</li>
								<li className="mr-3 footer-icon">
									<a target="_blank" href="https://www.whatsapp.com">
										<FaWhatsapp className="inline-block mr-3" />
										<span className="text-lg sm:text-xl">@99999-99999</span>
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