import { GiPencilBrush } from 'react-icons/gi';
import BlurImage from '../../../src/components/BlurImage';
import { HOME_PAGE_SERVICES_LIST } from '../../../src/constants/ServicesConstants';
import Link from 'next/link';

function Services() {
	return (
		<div className="pb-20 lg:pb-40 px-3 sm:px-10">
			<div className="pb-10 py-20 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">Our Offerings</div>
			<div className="flex flex-wrap justify-center mt-5 md:mt-16">
					{
					HOME_PAGE_SERVICES_LIST.map(({ imgurl, title }, index) => {
							return (
								<div key={index} className="w-full sm:w-1/4 mb-5 md:mb-3">
									<div className="mx-10 flex flex-col shadow hover:shadow-xl transition-all duration-100">
										<Link href={`/services#type${index}`}>
											<a className="curPoint">
												<div className="servicesImgWrap text-center mx-auto">
													<div className="overlay"></div>
													<BlurImage src={imgurl} className="galleryImage" style={{ maxHeight: '350px', objectFit: 'cover', width: '100%' }} />
												</div>
												<div className="flex flex-col items-center py-5 sm:py-10">
													<div className="text-2xl sm:text-3xl py-3 quicks">{title}</div>
												</div>
											</a>
										</Link>
									</div>
								</div>
							)
						})
					}
			</div>
		</div>
	);
}

export default Services;
