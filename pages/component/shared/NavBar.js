import Link from 'next/link'
import { useEffect, useState } from 'react';
import { ROUTES, WEBSITE_NAME } from '../../../src/constants/constants';

function NavBar() {
	const [activePage, setActivePage] = useState('/');

	useEffect(() => {
		setActivePage(window.location.pathname);
		console.log(activePage);
	}, []);

	return (
		<nav id="header" className="w-full z-30 top-0 py-1">
			<div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-20 py-6">
				<div className="order-1 md:order-2">
					<a className="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-2xl quicks" href="/">
						{WEBSITE_NAME}
          </a>
				</div>
				<div className="order-2 md:order-3 flex items-center" id="nav-content">
					<label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
						<svg className="fill-current text-gray-900" width="20" height="20" viewBox="0 0 20 20">
							<title>menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
					</label>
					<input className="hidden" type="checkbox" id="menu-toggle" />
					<div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
						<nav>
							<ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0 text-xl quicks">
								{
									ROUTES.map(({ url, name }) => {
										const activeClass = (activePage !== '/' && url.startsWith(activePage)) ? 'active' : 'hover_line';
										return (
											<li key={url} className="relative">
												<Link href={url}>
													<a className={`nav-item ${activeClass}`}>{name}</a>
												</Link>
											</li>
										)
									})
								}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;
