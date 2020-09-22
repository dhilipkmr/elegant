import TestimonialCard from '../component/Home/TestimonialCard';
import { testimonialsList } from '../../src/constants/constants';

function Testimonials() {
	return (
		<div className="testimonial homeTestimonalBg">
			<div className="pb-20 sm:pb-5 pt-12 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">Testimonials</div>
			<div className="pt-10 p-3 md:p-20 md:pt-5 w-full">
				{
					testimonialsList.map((item, index) => {
						return (
							<div key={index} className="my-2">
								<TestimonialCard data={item} />
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Testimonials;
