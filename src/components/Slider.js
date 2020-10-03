import { Component } from "react";
import Carousel from 'react-multi-carousel';
import BlurImage from './BlurImage';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 1
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

export default class Slider extends Component {
	render() {
		const { list = [], style = {}, className = '' } = this.props;
		return (
			<Carousel responsive={responsive} infinite arrows draggable keyBoardControl minimumTouchDrag={80} renderButtonGroupOutside={false}
				renderDotsOutside={false}>
				{
					list.map((imgUrl, index) => {
						return (
							<BlurImage key={index} src={imgUrl} className={`rounded inline-block ${className}`} style={{ width: '100%', height: '500px', objectFit: 'cover' }} style={style} />
						)
					})
				}
			</Carousel>
		);
	}
}
