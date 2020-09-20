import Link from 'next/link';

export default function Custom404() {
	return (
		<div className="text-center m-32 p-20 leading-10">
			<h1 className="text-4xl my-3">404</h1>
			<h2 className="text-2xl my-3">Sorry we could not find this page!</h2>
			<h3>Not to worry, you can find plenty of things on our homepage.</h3>
			<button className="btn btn-theme p-2 px-4 my-3">
				<Link href="/">
					<a>Back to Home</a>
				</Link>
			</button>
		</div>
	)
}