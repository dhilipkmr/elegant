export const TESTIMONY_HEADING = 'What do our Customers say';
export const TESTIMONIALS_LIST = new Array(10).fill(1).map(() => {
	const index = Math.floor(Math.random() * 1000) % 3 || Math.floor(Math.random() * 1000) % 3 || 1;
	const val = ['f2', 'f3', 'f4'][index];
	return {
		imgUrl: `/images/gallery/${val}.jpg`,
		testimonialTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!",
		customerName: "Jane Doe"
	};
});