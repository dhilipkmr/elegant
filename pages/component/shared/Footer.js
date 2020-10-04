import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FiFacebook, FiPhone } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import Link from 'next/link';
import { MdLocationOn } from 'react-icons/md';
import { INSTA_URL, INSTA_TEXT, FB_TEXT, FB_URL, MAIL_TEXT, MAIL_URL, WHATSAPP_TEXT, WHATSAPP_URL, LOCATION_TXT, LOCATION_URL} from '../../../src/constants/contactConstants';
import { ROUTES } from '../../../src/constants/constants';
import { SERVICES_LIST } from '../../../src/constants/ServicesConstants';


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
									{
										ROUTES.map(({ url, name }) => {
											return (
												<li className="footer-icon">
													<Link href={url}>
														<a>{name}</a>
													</Link>
												</li>
											)
										})
									}
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
								{
									SERVICES_LIST.map(({ title }, index) => {
										return (
											<li className="footer-icon">
												<Link href={`/services#type${index}`}>
													<a>{title}</a>
												</Link>
											</li>
										)
									})
								}
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
								<li className="mr-3 footer-icon">
									<a target="_blank" href={WHATSAPP_URL}>
										<FaWhatsapp className="inline-block mr-3" />
										<span className="text-lg sm:text-xl">{WHATSAPP_TEXT}</span>
									</a>
								</li>
								<li className="mr-3 footer-icon">
									<a target="_blank" href={MAIL_URL}>
										<GoMail className="inline-block mr-3" />
										<span className="text-lg sm:text-xl">{MAIL_TEXT}</span>
									</a>
								</li>
								<li className="mr-3 footer-icon">
									<a target="_blank" href={INSTA_URL}>
										<FaInstagram className="inline-block mr-3" />
										<span className="text-lg sm:text-xl">{INSTA_TEXT}</span>
									</a>
								</li>
								<li className="mr-3 footer-icon">
									<a target="_blank" href={FB_URL}>
										<FiFacebook className="white inline-block mr-3" />
										<span className="text-lg sm:text-xl">{FB_TEXT}</span>
									</a>
								</li>
								<li className="mr-3 footer-icon max-w-xs">
									<a target="_blank" href={LOCATION_URL}>
										<MdLocationOn className="inline-block mr-3" />
										<span className="text-lg sm:text-xl">{LOCATION_TXT}</span>
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