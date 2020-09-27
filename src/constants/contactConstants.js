import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';


export const CONTACT_HEADING = 'Get in touch with Us';
export const CONTACT_MESSAGE_US = 'Send us a Message';
export const CONTACT_US_API = 'https://ihqtv3dj46.execute-api.us-east-1.amazonaws.com/dev/nodemailer';
export const CONTACT_OPTIONS = [
	{
		Icon: FaInstagram,
		url: 'https://www.instagram.com/ms.elegant_makeoverbypavithra/',
		text: '@ms_elegant'
	},
	{
		Icon: FaWhatsapp,
		url: 'https://api.whatsapp.com/send?phone=7010644291&text=Hi%20There',
		text: '@ms_elegant'
	},
	{
		Icon: FiFacebook,
		url: 'https://www.instagram.com/ms.elegant_makeoverbypavithra/',
		text: '@ms_elegant'
	},
	{
		Icon: GoMail,
		url: 'mailto:name@rmail.com',
		text: 'name@email.com'
	}
];
