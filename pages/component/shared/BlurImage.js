import { useEffect, useState, useRef } from 'react';

function BlurImage(props) {
	const { src1, src2, className = '', style = {} } = props;
	const [imgUrl, setImgUrl] = useState(src1);
	const [lazyClass, setLazyClass] = useState(' blur');
	const imgRef = useRef(null);

	function handleLoad(e) {
		if (lazyClass && src2) {
			const $img = document.createElement('img');
			$img.setAttribute('src', src2);
			$img.onload = () => {
				setImgUrl(src2);
				setLazyClass('');
				$img.remove(); // Avoids memeory leak
			};
		}
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
		<img load="lazy" src={imgUrl} className={className + lazyClass} style={{ ...style, transition: 'all 300ms' }} onLoad={handleLoad} ref={imgRef}/>
	)
}

export default BlurImage;
