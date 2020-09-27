import { GiPencilBrush } from 'react-icons/gi';

const LIST = new Array(6).fill({
	Icon: GiPencilBrush,
	heading: 'Heading',
	subTxt: 'Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore et dolore magna'
})
function Services() {
	return (
		<div className="pb-20 lg:pb-40 px-3 sm:px-10 ">
			<div className="pb-10 py-20 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">Our Offerings</div>
			<div className="flex flex-wrap justify-center">
					{
						LIST.map(({ Icon, heading, subTxt}, index) => {
							return (
								<div key={index} className="w-full px-5 sm:w-1/2 lg:w-1/3 lg:px-20 leading-10">
									<div className="flex flex-col items-center py-5 sm:py-20">
										<div className="text-5xl sm:text-6xl"><Icon className="theme-dark-color"/></div>
										<div className="text-2xl sm:text-3xl py-3 quicks">{heading}</div>
										<div className="text-lg sm:text-xl py-3 ">{subTxt}</div>
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
