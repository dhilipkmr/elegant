import { useState, Fragment } from "react";
import { GALLERY_IMAGES_LIST } from '../../src/constants/constants';
import BlurImage from '../component/shared/BlurImage';
import Modal from './modal';

function Gallery({ Component, pageProps }) {
	const [modalImgIndex, setModalImgIndex] = useState(-1);

	function handleImageClick(index) {
		setModalImgIndex(index);
	}

	function closeModal() {
		setModalImgIndex(-1);
	}

	return (
		<Fragment>
			<div className="pb-0 md:pb-20 mx-5 lg:mx-20 xl:mx-32">
				<div className="pt-2 pb-8 md:pb-20 md:pt-12 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">Gallery</div>
				<div class="flex flex-wrap justify-center">
					{
						GALLERY_IMAGES_LIST.map((item, index) => {
							const { url1, url2 } = item;
							return (
								<div class="w-full px-5 sm:w-1/2 lg:w-1/3 lg:px-8 leading-10">
									<div class="mx-auto my-5 galleryImageWrap overshadow" onClick={() => handleImageClick(index)}>
										<div className="overlay"></div>
										<BlurImage src1={url1 || url2} src2={url2} className="galleryImage"/>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			{
				modalImgIndex !== -1 ? 
					<Modal list={GALLERY_IMAGES_LIST} selectedIndex={modalImgIndex} closeModal={closeModal}/> :
					null
			}
		</Fragment>
	);
}

export default Gallery;
