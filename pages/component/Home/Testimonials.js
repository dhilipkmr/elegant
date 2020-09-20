import TestimonialCard from './TestimonialCard';
import { testimonialsList } from '../../../src/constants/constants';

function Testimonials() {
	return (
		<div className="homeTestimonalBg">
			<div className="py-20 text-5xl quicks font-extrabold text-center text-gray-800">Testimonials</div>
			<div className="p-3 md:p-20 md:pt-5 w-full">
				{
					testimonialsList.slice(0, 2).map((item, index) => {
						return (
							<div key={index} className="inline-block md:w-1/2">
								<TestimonialCard data={item} />
							</div>
						)
					})
				}
			</div>
			<div className="text-center pt-5 pb-20">
				<a href="/testimonials">
					<button className="btn btn-theme uppercase p-5 px-10 quicks font-bold">
						View More
					</button>
				</a>
			</div>
		</div>
	)
}

export default Testimonials;
