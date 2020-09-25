import { BiSend } from 'react-icons/bi';
import { useState, useRef } from 'react';
import { RiEmotionLine, RiLoader4Line } from 'react-icons/ri';
import Link from 'next/link';
import Error from './Error';
import Success from './Success';

const MSG_API = 'https://ihqtv3dj46.execute-api.us-east-1.amazonaws.com/dev/nodemailer';

export default function ContactMessage() {
	const userContactRef = useRef(null);
	const msgRef = useRef(null);
	const [status, setStatus] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [loading, setLoading] = useState(false);

	function failure() {
		setStatus('ERROR');
		setErrorMsg('Something went wrong! Please try!');
		setLoading(false);
	}

	function handleSendMessageClick(e) {
		const email = userContactRef.current.value;
		const message = msgRef.current.value;
		if (message && email) {
			setLoading(true);
			fetch(MSG_API, {
				method: 'POST',
				body: JSON.stringify({
					message, email
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}).then((res) => {
				return res.json();
			}).then((res) => {
				if (res.statusCode === 200) {
					setStatus('SUCCESS');
					setLoading(false);
				} else {
					failure();
				}
			}).catch((err) => {
				failure();
			});
		} else {
			setLoading(false);
			setStatus('ERROR');
			setErrorMsg('Please enter valid Email/Phone No. and Message!');
		}
	}


	return (
		<form className="w-full mb-10 md:mr-10 md:max-w-3xl">
			<div className="flex flex-wrap -mx-3 mb-6 sm:text-xl">
				<div className="w-full px-3 pr-8">
					<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="grid-password">
						E-mail/Phone No.
					</label>
					<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Enter your Email / Phone no." ref={userContactRef}/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 pr-8">
					<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="grid-password">
						Message
						</label>
					<textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none sm:text-xl" placeholder="Ask us anything..." id="message" ref={msgRef}>
					</textarea>
				</div>
			</div>
			<div className="md:flex md:items-center">
				<div className="md:w-1/3 flex items-center">
					<button className="btn btn-theme p-3 px-6 uppercase quicks flex flex-row items-center" type="button" onClick={handleSendMessageClick}>
						<span className="whitespace-no-wrap sm:text-xl">Send Message</span>
						<BiSend className="ml-2 text-2xl" />
					</button>
				</div>
				{loading ? <RiLoader4Line className="rotate ml-3 text-3xl text-gray-600" /> : null}
				<div className="md:w-2/3"></div>
			</div>
			<div>
				{
					status === 'SUCCESS' ?
						<Success>
							<p className="font-bold quicks">We have received your message! <RiEmotionLine className="inline-block ml-1" /></p>
							<p className="text-sm">Rest assured, we will contact you shortly.</p>
						</Success> :
						null
				}
				{
					status === 'ERROR' ?
						<Error errorMsg={errorMsg}/> :
						null
				}
			</div>
		</form>
	);
}

