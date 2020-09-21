import { BiSend } from 'react-icons/bi';
import { useState, useRef } from 'react';
import { RiEmotionLine, RiLoader4Line } from 'react-icons/ri';
import Link from 'next/link';

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
		<form className="w-full">
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3">
					<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2" for="grid-password">
						E-mail/Phone No.
					</label>
					<input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Enter your Email / Phone no." ref={userContactRef}/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3">
					<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2" for="grid-password">
						Message
						</label>
					<textarea className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" placeholder="Ask us anything..." id="message" ref={msgRef}>
					</textarea>
				</div>
			</div>
			<div className="md:flex md:items-center">
				<div className="md:w-1/3 flex items-center">
					<button className="btn btn-theme p-3 px-6 uppercase quicks flex flex-row items-center" type="button" onClick={handleSendMessageClick}>
						<span className="whitespace-no-wrap text-l">Send Message</span>
						<BiSend className="ml-2 text-2xl" />
					</button>
					{loading ? <RiLoader4Line className="rotate ml-3 text-3xl text-gray-600" /> : null}
				</div>
				<div className="md:w-2/3"></div>
			</div>
			<div>
				{
					status === 'SUCCESS' ?
						<div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-5" role="alert">
							<div className="flex">
								<div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
								<div>
									<p className="font-bold quicks">We have received your message! <RiEmotionLine className="inline-block ml-1"/></p>
									<p className="text-sm">Rest assured, we will contact you shortly.</p>
								</div>
							</div>
						</div> :
						null
				}
				{
					status === 'ERROR' ?
						<div role="alert">
							<div className="bg-red-500 text-white quicks font-bold rounded-t px-4 py-2 mt-5">
								Error
							</div>
							<div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
								<p>{errorMsg}</p>
							</div>
						</div> :
						null
				}
			</div>
		</form>
	);
}

