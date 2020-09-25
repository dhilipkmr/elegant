import { EVENT_TYPES, SESSIONS } from '../../../src/constants/constants';
import { useRef, useState } from 'react';
import Error from './Error';
import Success from './Success';
import { RiEmotionLine } from 'react-icons/ri';

export default function GetQuote() {
	const name = useRef(null);
	const contact = useRef(null);
	const eventType = useRef(null);
	const session = useRef(null);
	const eventDate = useRef(null);
	const city = useRef(null);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);


	function handleBtnClick() {
		const nameValue = name.current.value;
		const contactValue = contact.current.value;
		const cityValue = city.current.value;

		const sessionValue = session.current.value;
		const eventDateValue = eventDate.current.value;
		const eventTypeValue = eventType.current.value;

		let errorMsg = '';
		if (!nameValue) {
			errorMsg = 'Please enter your Name';
		} else if (!contactValue) {
			errorMsg = 'Please enter your Email';
		} else if (!eventDateValue) { 
			errorMsg = 'Please select the Event Date';
		} else if (!cityValue) {
			errorMsg = 'Please enter the City';
		} else if (!eventTypeValue) {
			errorMsg = 'Please Choose an Event Type';
		}
		if (errorMsg) {
			setError(errorMsg);
			setSuccess(false);
			return;
		}
		setSuccess(true);
		setError('');
		console.log({ cityValue, nameValue, contactValue, eventTypeValue, sessionValue, eventDateValue });
	}

	return (
		<div className="leading-loose">
			<div className="pb-5 pt-16 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">
				Get Quote
			</div>
			<form className="m-4 p-3 md:p-10 bg-white md:text-xl md:px-32">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-1/2 md:pr-12 my-3">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="cus_name">Name <span className="text-pink-700">*</span></label>
						<input ref={name} pattern="[a-zA-Z]" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cus_name" />
					</div>
					<div className="w-full md:w-1/2 my-3">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="cus_email">Email <span className="text-pink-700">*</span></label>
						<input ref={contact} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cus_email" />
					</div>
				</div>
				<div className="flex flex-row">
					<div className="w-1/2 pr-3 md:pr-12 my-3">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="eventDate">Event Date <span className="text-pink-700">*</span></label>
						<input ref={eventDate} type="date" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="eventDate" />
					</div>
					<div className="w-1/2 my-3">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="city">City <span className="text-pink-700">*</span></label>
						<input ref={city} pattern="[a-zA-Z]" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" placeholder="Coimbatore"/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="w-1/2 pr-3 md:pr-12 my-3">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="eventType">Event Type <span className="text-pink-700">*</span></label>
						<select ref={eventType} className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="eventType">
							<option value="">Choose</option>
							{
								EVENT_TYPES.map((type) => {
									return (
										<option key={type} value={type}>{type}</option>
									);
								})
							}
						</select>
					</div>
					<div className="w-1/2 my-3">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="session">No. of Sessions</label>
						<select ref={session} className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="session">
							<option value="">Choose</option>
							{
								SESSIONS.map((val) => {
									return (
										<option key={val} value={val}>{val}</option>
									);
								})
							}
						</select>
					</div>
				</div>
				<div className="mt-4 w-1/2">
					<button onClick={handleBtnClick} className="btn btn-theme p-3 px-6 uppercase quicks flex flex-row items-center" type="button">
						<span class="whitespace-no-wrap sm:text-xl">Get Quote</span>
					</button>
				</div>
				<div className="w-1/2 md:pr-12">
					{
						success ?
							<Success>
								<p className="font-bold quicks">We have received your message! <RiEmotionLine className="inline-block ml-1" /></p>
								<p className="text-sm">Rest assured, we will contact you shortly.</p>
							</Success> :
							null
					}
					{
						error ?
							<Error errorMsg={error} /> :
							null
					}
				</div>
			</form>
		</div>
	);
}

