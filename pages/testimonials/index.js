import TestimonialCard from '../../src/components/TestimonialCard';
import { TESTIMONIALS_LIST, TESTIMONY_HEADING } from '../../src/constants/testimonyConstants';
import Link from 'next/link';
import { GALLERY_REDIRECT, GET_QUOTE_REDIRECT } from '../../src/constants/constants';

function Testimonials() {
	return (
		<div className="testimonial homeTestimonalBg">
			<div className="pb-20 sm:pb-5 pt-12 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">{TESTIMONY_HEADING}</div>
			<div className="pt-10 p-3 md:p-20 md:pt-5 w-full">
				<div className="">
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
				<div class="text-center text-xl flex flex-col justify-center items-center mb-10 sm:my-10">
					<Link href="/gallery">
						<a className="mb-5 sm:my-5">
							<button className="buttonfx slideleft rounded-full p-3 px-6 quicks flex items-center block whitespace-no-wrap" type="button">
								<span className="whitespace-no-wrap sm:text-xl z-1">{GALLERY_REDIRECT}</span>
							</button>
						</a>
					</Link>
					<Link href="/get-quote">
						<a className="my-5">
							<button className="buttonfx slideleft rounded-full p-3 px-6 quicks flex items-center block whitespace-no-wrap" type="button">
								<span className="whitespace-no-wrap sm:text-xl z-1">{GET_QUOTE_REDIRECT}</span>
							</button>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Testimonials;
