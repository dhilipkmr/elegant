import { useEffect, useState, useRef, Fragment } from 'react';

function BlurImage(props) {
	const { src, className = '', style = {} } = props;
	const lowQuality = require(`../../public${src}?lqip`);
	const originalImg = require(`../../public${src}?original`);
	const [imgUrl, setImgUrl] = useState(lowQuality);
	const [lazyClass, setLazyClass] = useState(' blur');
	const imgRef = useRef(null);

	function handleLoad(e) {
		const $img = document.createElement('img');
		$img.setAttribute('src', originalImg);
		$img.onload = () => {
			setImgUrl(originalImg);
			setLazyClass('');
			$img.remove(); // Avoids memeory leak
		};
	}

	useEffect(() => {
		if (imgRef.current.complete) {
			handleLoad();
		} else {
			imgRef.current.addEventListener('load', () => {
				handleLoad();
			});
		}
	}, []);
	
	return (
		<Fragment>
			<img className={className + lazyClass} src={imgUrl} style={{ ...style, transition: 'all 300ms' }} onLoad={handleLoad} ref={imgRef}/>
		</Fragment>
	)
}

export default BlurImage;
