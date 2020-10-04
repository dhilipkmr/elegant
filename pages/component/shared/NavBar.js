import Link from 'next/link'
import { useEffect, useState, useRef } from 'react';
import { ROUTES } from '../../../src/constants/constants';
import BlurImage from '../../../src/components/BlurImage';
import { IoMdClose } from 'react-icons/io';

function NavBar() {
	const [didMount, setDidMount] = useState(false);
	const navMenuRef = useRef(null);
	const navMenuBread = useRef(null);
	const navMenuClose = useRef(null);

	function handleClick() {
		navMenuRef.current.classList.toggle('navMenu-show');
		navMenuBread.current.classList.toggle('hidden');
		navMenuClose.current.classList.toggle('hidden');
	}

	useEffect(() => {
		setDidMount(true);
	}, []);

	const activePage = (typeof location !== 'undefined' && didMount) ? location.pathname : '';
	return (
		<nav id="header" className="bg-white w-full z-30 top-0 py-0 shadow-sm" key={activePage}>
			<div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 px-10 sm:px-20 py-4 md:py-3">
				<div className="order-1 lg:order-2 flex items-center" id="nav-content">
					<label htmlFor="menu-toggle" className="cursor-pointer block lg:hidden">
						<svg ref={navMenuBread} className="fill-current text-gray-900" width="20" height="20" viewBox="0 0 20 20">
							<title>menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
						</svg>
						<span ref={navMenuClose} className="hidden">
							<IoMdClose className="text-4xl" />
						</span>
					</label>
					<input className="hidden" type="checkbox" id="menu-toggle" onClick={handleClick} />
					<div className="hidden lg:flex lg:items-center lg:w-auto w-full order-3 lg:order-1" id="menu">
						<nav>
							<ul className="lg:flex items-center justify-between text-gray-700 pt-4 lg:pt-0 lg:text-2xl quicks">
								{
									ROUTES.map(({ url, name }) => {
										const isHome = activePage === '/' && url === '/';
										const activeClass = (isHome || (activePage !== '/' && url.startsWith(activePage))) ? 'active' : 'hover_line';
										return (
											<li key={url} className="relative px-3">
												<Link href={url}>
													<a className={`nav-item quicks ${activeClass}`}>{name}</a>
												</Link>
											</li>
										)
									})
								}
							</ul>
						</nav>
					</div>
				</div>
				<div className="order-2 lg:order-1">
					<Link href="/">
						<a className="hidden md:block">
							<BlurImage src="/images/logo.jpg" style={{ height: "65px" }} noTrans={true}/>
						</a>
					</Link>
					<Link href="/">
						<a className="block md:hidden">
							<BlurImage src="/images/logo.jpg" style={{ height: "65px" }} noTrans={true} />
						</a>
					</Link>
				</div>
				<div className="order-3 lg:hidden"></div>
			</div>
			<div className="lg:hidden bg-dark-theme">
				<ul className="text-center text-xl leading-9 h-0 overflow-hidden navMenu" ref={navMenuRef}>
					{
						ROUTES.map(({ url, name }) => {
							const activeClass = (activePage !== '/' && url.startsWith(activePage)) ? 'active' : 'hover_line';
							return (
								<li key={url} className="relative">
									<Link href={url}>
										<a className={`nav-item text-white quicks ${activeClass}`}>{name}</a>
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		</nav>
	);
}
export default NavBar;
