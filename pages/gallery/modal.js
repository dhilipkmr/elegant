import BlurImage from '../component/shared/BlurImage';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const NEXT = [38, 39];
const PREV = [37, 40];

function Modal(props) {
	const { list, selectedIndex, closeModal } = props;
	const [imgIndex, setImgindex] = useState(selectedIndex);
	const lastIndex = list.length - 1;

	function loadNext() {
		setImgindex((index) => {
			const nextIndex = index + 1 <= lastIndex ? index + 1 : 0;
			return nextIndex;
		});
	}

	function loadPrev() {
		setImgindex((index) => {
			const prevIndex = index - 1 >= 0 ? index - 1 : lastIndex;
			return prevIndex;
		});
	}

	function handleKeydown(e) {
		if (NEXT.includes(e.keyCode)) {
			e.preventDefault();
			loadNext();
		} else if (PREV.includes(e.keyCode)) {
			e.preventDefault();
			loadPrev();
		} else if (e.keyCode === 27) {
			closeModal();
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		}
	}, []);

	const { url1, url2, url3 } = list[imgIndex];
	const src1 = url2 || url1;
	const src2 = url3 || url2;
	return (
		<div className="fixed z-10 inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div className="fixed inset-0 transition-opacity" onClick={closeModal}>
					<div className="absolute inset-0 bg-gray-900 opacity-75"></div>
				</div>
				<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
				&#8203;
				<div
					className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-headline"
					style={{ marginBottom: '10vh'}}
				>
					<div className="bg-white p-3">
						<div className="sm:flex sm:items-start">
							{/* <BlurImage key={src1} src1={src1} src2={src2} /> */}
							<img src={src2}/>
						</div>
					</div>
				</div>
			</div>
			<div className="fixed bottom-0 left-0 right-0" style={{ top: '85vh', zIndex: 2 }}>
				<div className="relative">
					<div className="text-center pt-2">
						<FaArrowLeft className="inline-block text-5xl text-white mx-5 cursor-pointer" onClick={loadPrev} />
						<FaArrowRight className="inline-block text-5xl text-white mx-5 cursor-pointer" onClick={loadNext} />
					</div>
					<div className="hidden sm:block text-center text-base text-gray-400 pt-5">
						<AiOutlineInfoCircle className="inline-block pl-2 text-2xl" />
						<span> You can also use Arrow Keys to shift pictures</span>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;
