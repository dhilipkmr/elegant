import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { CgArrowLeftR, CgArrowRightR, CgArrowDownR, CgArrowUpR } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import Slider from './Slider';

const NEXT = 39;
const PREV = 37;

const ZOOM_IN = 38;
const ZOOM_OUT = 40;

function Modal(props) {
	const { list = [], selectedIndex, closeModal } = props;
	// const [imgIndex, setImgindex] = useState(selectedIndex);
	// const lastIndex = (list || []).length - 1;
	// const DEFAULT_WIDTH = 560;
	// const [width, setWidth] = useState(DEFAULT_WIDTH);

	// function loadNext() {
	// 	setImgindex((index) => {
	// 		const nextIndex = index + 1 <= lastIndex ? index + 1 : 0;
	// 		return nextIndex;
	// 	});
	// 	setWidth(DEFAULT_WIDTH);
	// }

	// function loadPrev() {
	// 	setImgindex((index) => {
	// 		const prevIndex = index - 1 >= 0 ? index - 1 : lastIndex;
	// 		return prevIndex;
	// 	});
	// 	setWidth(DEFAULT_WIDTH);
	// }

	// function handleKeydown(e) {
	// 	if (NEXT === (e.keyCode)) {
	// 		e.preventDefault();
	// 		loadNext();
	// 	} else if (PREV === (e.keyCode)) {
	// 		e.preventDefault();
	// 		loadPrev();
	// 	} else if (e.keyCode === 27) {
	// 		closeModal();
	// 	} else if (e.keyCode === ZOOM_IN) {
	// 		e.preventDefault();
	// 		setWidth((width) => width + 40);
	// 	} else if (e.keyCode === ZOOM_OUT) {
	// 		e.preventDefault();
	// 		setWidth((width) => width - 40 > DEFAULT_WIDTH ? width - 20 : DEFAULT_WIDTH);
	// 	}
	// }

	// useEffect(() => {
		// window.addEventListener('keydown', handleKeydown);
		// return () => {
			// window.removeEventListener('keydown', handleKeydown);
	// 	}
	// }, []);

	// const { url2 } = list[imgIndex] || {};
	const start = list.slice(selectedIndex).map((item) => item.url2);
	const end = list.slice(0, selectedIndex).map((item) => item.url2);

	const sliderList = [...start, ...end];
	return (
		<div className="fixed z-10 inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div className="fixed inset-0 transition-opacity" onClick={closeModal}>
					<div className="absolute inset-0 bg-gray-900 opacity-75"></div>
				</div>
				<IoMdClose className="sm:hidden fixed z-10 left-0 mt-3 text-white text-5xl mx-5 cursor-pointer hover:text-yellow-600" onClick={closeModal} style={{ top: '6px' }} />
				<div className="inline-block galleryBigImg mt-12">
					<Slider list={sliderList} className="galleryBigImg"/>
				</div>
			</div>
		</div>
	);
}
export default Modal;
