import { useState, Fragment } from "react";
import { GALLERY_IMAGES_LIST } from '../../src/constants/constants';
import BlurImage from '../component/shared/BlurImage';

function Gallery({ Component, pageProps }) {
	const [imgUrl, setImgUrl] = useState('');

	function handleClick() {
		// setImgUrl('/images/2.jpg');
	}

	return (
		<Fragment>
			<div className="pb-0 md:pb-20 mx-5 lg:mx-20 xl:mx-32">
				<div className="pt-2 pb-8 md:pb-20 md:pt-12 text-4xl sm:text-5xl quicks font-extrabold text-center text-gray-800">Gallery</div>
				<div class="flex flex-wrap justify-center">
					{
						GALLERY_IMAGES_LIST.map(({ url1, url2 }, index) => {
							return (
								<div class="w-full px-5 sm:w-1/2 lg:w-1/3 lg:px-8 leading-10">
									<div class="mx-auto my-5 galleryImageWrap overshadow" onClick={handleClick}>
										<div className="overlay"></div>
										<BlurImage src1={url1} src2={url2} className="galleryImage"/>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			{
				imgUrl ? 
					<div>
						<div className="fixed top-0 bottom-0 left-0 right-0 opacity-50 bg-black z-10">
						</div>
						<div className="fixed top-0 z-20 w-full">
							<div class="flex justify-center">
								<img src={imgUrl} className="galleryImage z-20" />
							</div>
						</div>
					</div> :
					null
			}
		</Fragment>
	);
}

export default Gallery;
