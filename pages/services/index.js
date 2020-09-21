import { SERVICES_LIST } from '../../src/constants/constants';

function Services({ Component, pageProps }) {
	return (
		<div className="pb-0 md:pb-20 mx-5 lg:mx-20 xl:mx-32">
			<div className="pt-2 pb-8 md:pb-20 md:pt-12 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">Our Services</div>
			{
				SERVICES_LIST.map(({ title, description, imgurl }, index) => {
					return (
						<div className="flex flex-col md:flex-row items-center px-10 mb-24 md:mb-16" key={index}>
							<div className="md:w-1/2 md:px-3">
								<div className="text-center text-2xl md:text-3xl quicks mb-5 md:mb-10 theme-dark-color">{title}</div>
								<div className="text-lg leading-10">
									{description}
								</div>
							</div>
							<div className="mt-5 md:w-1/2">
								<img src={imgurl} className="rounded"/>
							</div>
						</div>
					)
				})
			}
		</div>
	);
}

export default Services;
