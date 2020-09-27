export const GALLERY_HEADING = 'Our Stunning Makeovers'

const IMG_LIST = ['f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f10', 'f11', 'f12', 'f13', 'f14', 'f15',
	'f16', 'f17', 'f18', 'f19', 'f20'];
export const GALLERY_IMAGES_LIST = IMG_LIST.map((name) => {
	return {
		url1: `/images/gallery/${name}.jpg`,
		url2: `/images/galleryhq/${name}.jpg`
	}
});

export const GALLERY_IMAGES_LIST_HOME = IMG_LIST.slice(0, 3).map((name) => {
	return `/images/gallery/${name}.jpg`
});