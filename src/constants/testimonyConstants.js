export const TESTIMONY_HEADING = 'What do our Customers say';
export const TESTIMONIALS_LIST = new Array(10).fill(1).map(() => {
	const index = Math.floor(Math.random() * 1000) % 3 || Math.floor(Math.random() * 1000) % 3 || 1;
	return {
		imgUrl: `/images/F${index}.jpg`,
		testimonialTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco!",
		customerName: "Jane Doe"
	};
});