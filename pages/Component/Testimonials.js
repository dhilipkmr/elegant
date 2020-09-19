import TestimonialCard from './TestimonialCard';
import { testimonialsList } from '../../src/constants/constants';

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
		</div>
	)
}

export default Testimonials;
