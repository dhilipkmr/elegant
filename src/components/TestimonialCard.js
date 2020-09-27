import { FaQuoteLeft } from 'react-icons/fa';
import BlurImage from './BlurImage';

function TestimonialCard(props) {
	const { data = {} } = props || {};
	const { imgUrl = '', testimonialTxt = '', customerName = ''} = data || {};
	return (
		<div className="p-3 inline-block w-full">
			<div className="md:mx-5">
				<div className="flex flex-end">
				<div className="testimonialCard relative">
					<div className="dummyImgBrdr">
						<BlurImage src={imgUrl}/>
					</div>
					<FaQuoteLeft className="quote"/>
						<div className="bg-white leading-10 text-lg sm:text-xl py-10">
						{testimonialTxt}
					</div>
					<div className="text-lg uppercase quicks font-extrabold text-gray-700">
						{customerName}
					</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TestimonialCard;
