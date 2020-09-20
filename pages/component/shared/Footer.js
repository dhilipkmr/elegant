function Footer() {
	return (
		<div className="justify-center p-10 bg-black text-gray-400">
			<ul className="flex flex-col md:flex-row md:justify-evenly footerTopic leading-8">
				<li className="mb-5">
					<div class="text-xl uppercase quicks font-extrabold inline-block">
						Explore
						<div class="brdr50"></div>
					</div>
					<ul className="mt-3">
						<li>About Us</li>
						<li>Testimony</li>
						<li>Portfolio</li>
					</ul>
				</li>
				<li className="mb-5">
					<div class="text-xl uppercase quicks font-extrabold inline-block">
						Services
						<div class="brdr50"></div>
					</div>
					<ul className="mt-3">
						<li>Bridal makeup</li>
						<li>Party makeup</li>
						<li>Pre Wedding Makeup</li>
						<li>Post Wedding Makeup</li>
					</ul>
				</li>
				<li className="mb-5">
					<div class="text-xl uppercase quicks font-extrabold inline-block">
						Get in Touch
						<div class="brdr50"></div>
					</div>
					<ul className="mt-3">
						<li>Email</li>
						<li>Instagram</li>
						<li>Mobile</li>
					</ul>
				</li>
			</ul>
		</div>
	)
}

export default Footer;