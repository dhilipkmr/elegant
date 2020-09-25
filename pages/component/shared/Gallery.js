import Link from 'next/link';
import { RiExternalLinkFill } from 'react-icons/ri';
import BlurImage from '../shared/BlurImage';

const IMAGES = ['/images/gallery/a.jpg', '/images/gallery/a.jpg', '/images/gallery/a.jpg'];
function Gallery() {
	return (
		<div className="bg-dark-theme pb-24 ">
			<div className="pb-10 py-20 text-3xl sm:text-5xl quicks font-extrabold text-center text-white">Our Gallery</div>
			<div class="flex flex-wrap justify-center">
				{
					IMAGES.map((url) => {
						return (
							<div class="mx-auto my-5">
								<div class="galleryImageWrap text-center mx-auto my-5">
									<div className="overlay"></div>
									<img loading="lazy" src={url} className="galleryImage" width="740" height="560" style={{
										objectFit: 'cover'
									}}/>
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