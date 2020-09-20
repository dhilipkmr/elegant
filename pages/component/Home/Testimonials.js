import TestimonialCard from './TestimonialCard';
import { testimonialsList } from '../../../src/constants/constants';

function Testimonials() {
	return (
		<div className="homeTestimonalBg">
			<div class="py-10 text-5xl quicks font-extrabold text-center text-gray-800">Testimonials</div>
			<div className="p-3 md:p-20 md:pt-5 w-full">
				{
					testimonialsList.map((item, index) => {
						return (
							<TestimonialCard key={index} data={item} />
						)
					})
				}
			</div>
			<div className="text-center pt-5 pb-12">
				<a href="/testimonials">
					<button class="btn btn-theme uppercase p-5 px-10">
						View More
					</button>
				</a>
			</div>
		</div>
	)
}

export default Testimonials;
