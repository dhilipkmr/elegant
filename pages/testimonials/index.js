import TestimonialCard from '../component/Home/TestimonialCard';
import { TESTIMONIALS_LIST, TESTIMONY_HEADING } from '../../src/constants/testimonyConstants';

function Testimonials() {
	return (
		<div className="testimonial homeTestimonalBg">
			<div className="pb-20 sm:pb-5 pt-12 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">{TESTIMONY_HEADING}</div>
			<div className="pt-10 p-3 md:p-20 md:pt-5 w-full">
				{
					TESTIMONIALS_LIST.map((item, index) => {
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
