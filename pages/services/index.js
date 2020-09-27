import { SERVICES_LIST, SERVICES_HEADING } from '../../src/constants/ServicesConstants';
import BlurImage from '../../src/components/BlurImage';

function Services({ Component, pageProps }) {
	return (
		<div className="pb-0 md:pb-20 mx-5 lg:mx-20 xl:mx-32">
			<div className="pt-12 pb-8 md:pb-20 md:pt-20 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">{SERVICES_HEADING}</div>
			{
				SERVICES_LIST.map(({ Icon, title, description, imgurl }, index) => {
					return (
						<div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 bg-white rounded shadow mx-auto" style={{ maxWidth: '950px' }}key={index}>
							<div className="md:w-1/2 md:px-3">
								<div className="flex flex-col py-10 items-center md:py-0 md:items-start px-10 md:px-20 ">
									{/* <div className="text-6xl"><Icon className="theme-dark-color" /></div> */}
									<div className="text-center text-3xl md:text-4xl quicks mb-5 md:my-10">{title}</div>
									<div className="text-xl leading-10">
										{description}
									</div>
								</div>
							</div>
							<div className="md:w-1/2">
								<BlurImage src={imgurl} className="rounded" style={{ width: '100%', height: '500px', objectFit: 'cover' }}/>
							</div>
						</div>
					)
				})
			}
		</div>
	);
}

export default Services;
