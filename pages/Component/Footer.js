function Footer() {
	return (
		<div className="justify-center m-10">
			<ul className="flex flex-col md:flex-row items-center md:justify-evenly footerTopic leading-8">
				<li className="mb-5">
					<div class="text-xl uppercase font-bold mb-2"> Explore</div>
					<ul>
						<li>About Us</li>
						<li>Testimony</li>
						<li>Portfolio</li>
					</ul>
				</li>
				<li className="mb-5">
					<div class="text-xl uppercase font-bold mb-2">Services</div>
					<ul>
						<li>Briday makeup</li>
						<li>Groom Makeup</li>
						<li>Eye lashes</li>
					</ul>
				</li>
				<li className="mb-5">
					<div class="text-xl uppercase font-bold mb-2">Get in Touch</div>
					<ul>
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