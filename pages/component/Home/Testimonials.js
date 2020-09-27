import Link from 'next/link';
import TestimonialCard from '../../../src/components/TestimonialCard';
import { TESTIMONIALS_LIST } from '../../../src/constants/testimonyConstants';
import { RiExternalLinkFill } from 'react-icons/ri';

function Testimonials() {
	return (
		<div className="homeTestimonalBg">
			<div className="pt-10 pb-20 sm:py-20 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">Testimonials</div>
			<div className="pt-10 px-3 md:p-10 md:pt-5 w-full">
				{
					TESTIMONIALS_LIST.slice(0, 2).map((item, index) => {
						return (
							<div key={index} className="inline-block md:w-1/2">
								<TestimonialCard data={item} />
							</div>
						)
					})
				}
			</div>
			<div className="text-center pb-10 md:pb-24 md:pt-8">
				<Link href="/testimonials">
					<a>
						<button className="btn btn-theme uppercase p-3 px-5 sm:p-5 sm:px-10 quicks font-bold">
							<div className="flex flex-row items-center">
								<span className="whitespace-no-wrap text-base sm:text-lg">View More</span>
								<RiExternalLinkFill className="ml-2" />
							</div>
						</button>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Testimonials;
