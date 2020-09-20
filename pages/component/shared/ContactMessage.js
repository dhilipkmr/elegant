import { BiSend } from 'react-icons/bi';
import { useState, useRef } from 'react';
import { RiEmotionLine } from 'react-icons/ri';
import Link from 'next/link';

export default function ContactMessage() {
	const userContactRef = useRef(null);
	const msgRef = useRef(null);
	const [status, setStatus] = useState('');

	function handleSendMessageClick(e) {
		const userContact = userContactRef.current.value;
		const msg = msgRef.current.value;
		if (userContact && msg) {
			setStatus('SUCCESS');
		} else {
			setStatus('ERROR');
		}
	}


	return (
		<form class="w-full">
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label class="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2" for="grid-password">
						E-mail/Phone No.
					</label>
					<input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="Enter your Email / Phone no." ref={userContactRef}/>
				</div>
			</div>
			<div class="flex flex-wrap -mx-3 mb-6">
				<div class="w-full px-3">
					<label class="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2" for="grid-password">
						Message
						</label>
					<textarea class="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" placeholder="Ask us anything..." id="message" ref={msgRef}>
					</textarea>
				</div>
			</div>
			<div class="md:flex md:items-center">
				<div class="md:w-1/3">
					<button class="btn btn-theme p-3 px-6 uppercase quicks flex flex-row items-center" type="button" onClick={handleSendMessageClick}>
						<span className="whitespace-no-wrap text-l">Send Message</span>
						<BiSend className="ml-2 text-2xl"/>
					</button>
				</div>
				<div class="md:w-2/3"></div>
			</div>
			<div>
				{
					status === 'SUCCESS' ?
						<div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md mt-5" role="alert">
							<div class="flex">
								<div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
								<div>
									<p class="font-bold quicks">We have received your message! <RiEmotionLine className="inline-block ml-1"/></p>
									<p class="text-sm">Rest assured, we will contact you shortly.</p>
								</div>
							</div>
						</div> :
						null
				}
				{
					status === 'ERROR' ?
						<div role="alert">
							<div class="bg-red-500 text-white quicks font-bold rounded-t px-4 py-2 mt-5">
								Error
							</div>
							<div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
								<p>Email and Message field cannot be Empty!</p>
							</div>
						</div> :
						null
				}
			</div>
		</form>
	);
}

