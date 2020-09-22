import { GiPencilBrush } from 'react-icons/gi';

//Nav bar
export const WEBSITE_NAME = 'MS.ELEGANT';
export const ROUTES = [
	// {
	// 	url: '/about',
	// 	name: 'About'
	// },
	{
		url: '/',
		name: 'Home'
	},

	{
		url: '/services',
		name: 'Services'
	},
	// {
	// 	url: '/portfolio',
	// 	name: 'Portfolio'
	// },
	{
		url: '/testimonials',
		name: 'Testimony'
	},
	{
		url: '/contact',
		name: 'Contact'
	}
];


// Home testimonials

export const testimonialsList = new Array(10).fill({
	imgUrl: "/images/2.jpg",
	testimonialTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!",
	customerName: "Jane Doe"
});

// services

export const SERVICES_LIST = new Array(4).fill({
	Icon: GiPencilBrush,
	title: 'Eye Makeup Specialist',
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!',
	imgurl: "/images/2.jpg"
});
