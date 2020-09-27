import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { CgArrowLeftR, CgArrowRightR, CgArrowDownR, CgArrowUpR } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';

const NEXT = 39;
const PREV = 37;

const ZOOM_IN = 38;
const ZOOM_OUT = 40;

function Modal(props) {
	const { list = [], selectedIndex, closeModal } = props;
	const [imgIndex, setImgindex] = useState(selectedIndex);
	const lastIndex = (list || []).length - 1;
	const DEFAULT_WIDTH = 400;
	const [width, setWidth] = useState(DEFAULT_WIDTH);

	function loadNext() {
		setImgindex((index) => {
			const nextIndex = index + 1 <= lastIndex ? index + 1 : 0;
			return nextIndex;
		});
		setWidth(DEFAULT_WIDTH);
	}

	function loadPrev() {
		setImgindex((index) => {
			const prevIndex = index - 1 >= 0 ? index - 1 : lastIndex;
			return prevIndex;
		});
		setWidth(DEFAULT_WIDTH);
	}

	function handleKeydown(e) {
		if (NEXT === (e.keyCode)) {
			e.preventDefault();
			loadNext();
		} else if (PREV === (e.keyCode)) {
			e.preventDefault();
			loadPrev();
		} else if (e.keyCode === 27) {
			closeModal();
		} else if (e.keyCode === ZOOM_IN) {
			e.preventDefault();
			setWidth((width) => width + 40);
		} else if (e.keyCode === ZOOM_OUT) {
			e.preventDefault();
			setWidth((width) => width - 40 > DEFAULT_WIDTH ? width - 20 : DEFAULT_WIDTH);
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		return () => {
			window.removeEventListener('keydown', handleKeydown);
		}
	}, []);

	const { url2 } = list[imgIndex] || {};

	return (
		<div className="fixed z-10 inset-0 overflow-y-auto">
			<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
				<div className="fixed inset-0 transition-opacity" onClick={closeModal}>
					<div className="absolute inset-0 bg-gray-900 opacity-75"></div>
				</div>
				<span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
				&#8203;
				<div
					className="inline-block align-bottom rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal-headline"
					style={{ marginBottom: '10vh'}}
				>
					<div className="">
						<div className="bg-white p-3" style={{ minHeight: '50vh' }}>
							<img src={url2} onLoad={() => console.log('loaded')} style={{
								width: `${width}px`,
								transition: 'all 0.5s ease-out'
							}} />
							{/* <div className="sm:flex sm:items-start"> */}
								{/* <BlurImage key={src1} src1={src1} src2={src2} /> */}
								
								{/* <img src={require(`../../public${src2}?lqip`)} /> */}
								{/* <img src={require(`../../public${src2}?original`)} /> */}
							{/* </div> */}
						</div>
					</div>
				</div>
			</div>
			<div className="fixed bottom-0 left-0 right-0" style={{ top: '85vh', zIndex: 2 }}>
				<div className="relative">
					<div className="relative sm:static md:relative text-center pt-2" style={{ top: '50px'}}>
						<FaArrowLeft className=" inline-block text-5xl text-white mx-5 cursor-pointer hover:text-yellow-600" onClick={loadPrev} />
						<FaArrowRight className=" inline-block text-5xl text-white mx-5 cursor-pointer hover:text-yellow-600" onClick={loadNext} />
						<IoMdClose className="sm:hidden absolute left-0 text-white text-5xl mx-5 cursor-pointer hover:text-yellow-600" onClick={closeModal} style={{ top: '6px' }}/>
					</div>
					<div className="hidden sm:block text-left text-xl text-gray-400 pt-5 pl-2 pb-2">
						<div>
							<AiOutlineInfoCircle className="inline-block pl-2 text-3xl" />
							<span> Use Keyboard <CgArrowUpR className="inline" /> <CgArrowDownR className="inline" /> to Zoom pictures</span>
						</div>
						<div className="my-2">
							<AiOutlineInfoCircle className="inline-block pl-2 text-3xl" />
							<span> Use Keyboard <CgArrowLeftR className="inline"/> <CgArrowRightR className="inline"/> to Change pictures</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Modal;
