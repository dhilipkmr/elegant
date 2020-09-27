import Link from 'next/link';
import { RiExternalLinkFill } from 'react-icons/ri';
import BlurImage from '../../../src/components/BlurImage';
import { GALLERY_IMAGES_LIST_HOME } from '../../../src/constants/galleryConstants';

function Gallery() {
	return (
		<div className="pb-24" style={{ background: '#545454' }}>
			<div className="pb-10 py-20 text-3xl sm:text-5xl quicks font-extrabold text-center text-white">Our Gallery</div>
			<div className="flex flex-wrap justify-center">
				{
					GALLERY_IMAGES_LIST_HOME.map((url) => {
						return (
							<div className="mx-auto my-5">
								<div className="galleryImageWrap text-center mx-auto my-5">
									<div className="overlay"></div>
									<BlurImage src={url} className="galleryImage"/>
								</div>
							</div>
						)
					})
				}
			</div>
			<div className="text-center pt-5">
				<Link href="/gallery">
					<a>
						<button className="btn bg-gray-200 uppercase p-3 px-5 sm:p-5 sm:px-10 quicks font-bold hover:bg-gray-300">
							<div className="flex flex-row items-center">
								<span className="whitespace-no-wrap text-base sm:text-lg">View More</span>
								<RiExternalLinkFill className="ml-2" />
							</div>
						</button>
					</a>
				</Link>
			</div>
		</div>
	);
}
export default Gallery;