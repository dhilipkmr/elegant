import ContactMessage from '../component/shared/ContactMessage';

function Contact({ Component, pageProps }) {
	return (
		<div>
			<div class="pb-5 pt-12 text-5xl quicks font-extrabold text-center text-gray-800">
				Get in touch with us
			</div>
			<div className="w-full p-5 md:max-w-xl md:m-20">
				<ContactMessage />
			</div>
		</div>
	);
}

export default Contact;
