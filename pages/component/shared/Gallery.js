import Link from 'next/link';
import { RiExternalLinkFill } from 'react-icons/ri';

const IMAGES = ['/images/F2.jpg', '/images/F1.jpg', '/images/F3.jpg'];
function Gallery() {
	return (
		<div className="bg-dark-theme pb-24 hidden xl:block">
			<div className="pb-10 py-20 text-3xl sm:text-5xl quicks font-extrabold text-center text-white">Our Gallery</div>
			<div class="flex flex-wrap justify-center">
				{
					IMAGES.map((url) => {
						return (
							<div class="w-full px-5 sm:w-1/2 lg:w-1/3 lg:px-20 leading-10">
								<div class="flex flex-col items-center my-5 sm:my-20 galleryImageWrap" style={{
									width: '450px',
									height: '350px'
								}}>
									<div className="overlay"></div>
									<img loading="lazy" src={url} className="galleryImage" style={{
										width: '450px',
										height: '350px',
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