
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
	{
		url: '/gallery',
		name: 'Gallery'
	},
	{
		url: '/testimonials',
		name: 'Testimony'
	},
	{
		url: '/get-quote',
		name: 'Get Quote'
	},
	{
		url: '/contact',
		name: 'Contact'
	}
];



// Home testimonials
export const testimonialsList = new Array(10).fill(1).map(() => {
	const index = Math.floor(Math.random() * 1000) % 4 || Math.floor(Math.random() * 1000) % 4 || 1;
	return {
		imgUrl: `/images/F${index}.jpg`,
		testimonialTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!",
		customerName: "Jane Doe"
	};
});



// Gallery 
const IMG_LIST = ['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f10', 'f11', 'f111', 'f12', 'f13', 'f14', 'f15',
'f16', 'f17', 'f18', 'f19', 'f20'];
export const GALLERY_IMAGES_LIST = IMG_LIST.map((name) => {
	return {
		url1: `/images/gallery/${name}.jpg`,
		url2: `/images/gallery/${name}.jpg`,
		url3: `/images/galleryhq/${name}.jpg`
	}
});

// Get Quote:
export const EVENT_TYPES = [
	'Wedding',
	'Pre-wedding',
	'Post-wedding',
	'Engagement',
	'Party',
	'Baby Shower',
	'Bridesmaid',
	'Others'
]
export const SESSIONS = ['1', '2', '3', '4 and more'];