import { EVENT_TYPES, SESSIONS, QUOTE_HEADING } from '../../../src/constants/getQuoteConstants';
import { useRef, useState } from 'react';
import Error from './Error';
import Success from './Success';
import { RiEmotionLine } from 'react-icons/ri';
import { RiLoader4Line } from 'react-icons/ri';
import { isInPast } from '../../../src/utils/helpers';
import { CONTACT_QUOTE_API } from '../../../src/constants/constants';

export default function GetQuote() {
	const name = useRef(null);
	const contact = useRef(null);
	const eventType = useRef(null);
	const session = useRef(null);
	const eventDate = useRef(null);
	const city = useRef(null);
	const email = useRef(null);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState(false);
	const [loading, setLoading] = useState(false);


	function handleBtnClick() {
		const nameValue = name.current.value;
		const contactValue = contact.current.value;
		const cityValue = city.current.value;

		const sessionValue = session.current.value;
		const eventDateValue = eventDate.current.value;
		const eventTypeValue = eventType.current.value;
		const emailValue = email.current.value;

		let errorMsg = '';
		if (!nameValue) {
			errorMsg = 'Please enter your Name';
		} else if (!contactValue) {
			errorMsg = 'Please enter your Phone Number';
		} else if (!eventDateValue) { 
			errorMsg = 'Please select the Event Date';
		} else if (!cityValue) {
			errorMsg = 'Please enter the City';
		} else if (!eventTypeValue) {
			errorMsg = 'Please Choose an Event Type';
		} else if (!sessionValue) {
			errorMsg = 'Please Choose the No. of Sesssions';
		} else if (isInPast(eventDateValue)) {
			errorMsg = 'Please Choose a date in Future';
		}
		if (errorMsg) {
			setError(errorMsg);
			setSuccess(false);
			return;
		}
		callAPI({ city: cityValue, name: nameValue, contact: contactValue, eventType: eventTypeValue, session: sessionValue, eventDate: eventDateValue, email: emailValue });
	}

	function failure() {
		setSuccess(false);
		setErrorMsg('Something went wrong! Please try!');
		setLoading(false);
	}

	function callAPI(values) {
		setLoading(true);
		fetch(CONTACT_QUOTE_API, {
			method: 'POST',
			body: JSON.stringify(values),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			return res.json();
		}).then((res) => {
			if (res.statusCode === 200) {
				setSuccess(true);
				setError('');
				setLoading(false);
			} else {
				failure();
			}
		}).catch((err) => {
			failure();
		});
	}

	return (
		<div className="leading-loose m-4 p-5 sm:p-10 bg-white md:text-xl md:px-32 rounded pb-20" style={{ borderBottom: '2px solid #edf2f7' }}>
			<div className="pb-5 pt-16 text-3xl sm:text-5xl quicks font-extrabold text-center text-gray-800">
				{QUOTE_HEADING}
			</div>
			<form className="">
				<div className="flex flex-col md:flex-row">
					<div className="w-full md:w-1/2 md:pr-12 my-6">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="cus_name">Name <span className="text-pink-700">*</span></label>
						<input ref={name} pattern="[a-zA-Z]" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cus_name" placeholder="Enter your Name"/>
					</div>
					<div className="w-full md:w-1/2 my-6">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="cus_ph">Phone Number <span className="text-pink-700">*</span></label>
						<input ref={contact} type="number" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="cus_ph" placeholder="Enter your Phone No."/>
					</div>
				</div>
				<div className="flex flex-row">
					<div className="w-full md:w-1/2 pr-5 md:pr-12 my-6">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="email">Email ID</label>
						<input ref={email} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" placeholder="Enter your Email ID" />
					</div>
					<div className="w-full md:w-1/2 my-6">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="eventDate">Event Date <span className="text-pink-700">*</span></label>
						<input ref={eventDate} type="date" className="cursor-pointer appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="eventDate" />
					</div>
				</div>
				<div className="flex flex-row">
					<div className="w-full md:w-1/2 pr-5 md:pr-12 my-6">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="city">City <span className="text-pink-700">*</span></label>
						<input ref={city} pattern="[a-zA-Z]" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="city" placeholder="eg: coimbatore" />
					</div>
					<div className="w-full md:w-1/2 my-6">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="eventType">Event Type <span className="text-pink-700">*</span></label>
						<select ref={eventType} className="cursor-pointer block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="eventType">
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
				</div>
				<div className="flex flex-row">
					<div className="w-full md:w-1/2 md:pr-12 my-6">
						<label className="quicks block uppercase tracking-wide text-gray-700 font-bold mb-2 sm:text-xl" htmlFor="session">No. of Sessions <span className="text-pink-700">*</span></label>
						<select ref={session} className="cursor-pointer block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="session">
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
				<div className="mt-6 md:flex md:items-center">
					<button onClick={handleBtnClick} className="buttonfx slideleft rounded p-2 px-6 uppercase quicks flex items-center whitespace-no-wrap" type="button" >
						<span className="whitespace-no-wrap sm:text-lg z-1">Get Quote</span>
					</button>
					{loading ? <RiLoader4Line className="rotate ml-3 text-3xl text-gray-600" /> : null}
				</div>
				<div className="w-1/2 md:pr-12">
					{
						success ?
							<Success>
								<p className="font-bold quicks">We have received your message! <RiEmotionLine className="inline-block ml-1" /></p>
								<p className="text-sm">We will contact you shortly.</p>
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

