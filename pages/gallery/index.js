import { useState, Fragment } from "react";
import { GALLERY_IMAGES_LIST, GALLERY_HEADING } from '../../src/constants/galleryConstants';
import BlurImage from '../../src/components/BlurImage';
import Modal from '../../src/components/modal';
import Link from 'next/link';
import { GET_QUOTE_REDIRECT, TESTIMONY_REDIRECT } from '../../src/constants/constants';

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
			<div className="pb-0 md:pb-20 mx-5 lg:mx-20 xl:mx-32 bg-white my-4 pt-5">
				<div className="pt-2 pb-8 md:pb-20 md:pt-12 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">{GALLERY_HEADING}</div>
				<div className="flex flex-wrap justify-center">
					{
						GALLERY_IMAGES_LIST.map((item, index) => {
							const { url1 } = item;
							return (
								<div key={index} className="w-full sm:w-1/2 lg:w-1/3 leading-10">
									<div className="mx-auto my-5 mx-5 galleryImageWrap overshadow" onClick={() => handleImageClick(index)}>
										<div className="overlay"></div>
										<BlurImage src={url1} className="galleryImage"/>
									</div>
								</div>
							)
						})
					}
				</div>
				<div class="text-center text-xl flex flex-col justify-center items-center my-10">
					<Link href="/testimonials">
						<a className="my-5">
							<button className="buttonfx slideleft rounded-full p-3 px-6 quicks flex items-center block whitespace-no-wrap" type="button">
								<span className="whitespace-no-wrap sm:text-xl z-1">{TESTIMONY_REDIRECT}</span>
							</button>
						</a>
					</Link>
					<Link href="/get-quote">
						<a className="my-5">
							<button className="buttonfx slideleft rounded-full p-3 px-6 quicks flex items-center block whitespace-no-wrap" type="button">
								<span className="whitespace-no-wrap sm:text-xl z-1">{GET_QUOTE_REDIRECT}</span>
							</button>
						</a>
					</Link>
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
