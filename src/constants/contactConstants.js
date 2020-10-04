import { FiFacebook } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';

export const CONTACT_HEADING = 'Get in touch with Us';
export const CONTACT_MESSAGE_US = 'Send us a Message';
export const CONTACT_US_API = 'https://ihqtv3dj46.execute-api.us-east-1.amazonaws.com/dev/nodemailer';
export const INSTA_URL = 'https://www.instagram.com/ms.elegant_makeoverbypavithra/';
export const INSTA_TEXT = '@ms_elegant';
export const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=+917010644291&text=Hi%20There';
export const WHATSAPP_TEXT = '7010644291';
export const FB_URL = 'https://www.instagram.com/ms.elegant_makeoverbypavithra/';
export const FB_TEXT = '@ms_elegant';
export const MAIL_URL = 'mailto:pavipsg28@gmail.com';
export const MAIL_TEXT = 'pavipsg28@gmail.com';
export const LOCATION_TXT = `51A, Thiyagi Kumar street,
														P.N.Pudhur, Coimbatore 641041`;
export const LOCATION_URL = 'https://goo.gl/maps/2LDyJk1WMWiV75Wc6';
export const CONTACT_OPTIONS = [
	{
		Icon: FaInstagram,
		url: INSTA_URL,
		text: INSTA_TEXT
	},
	{
		Icon: FaWhatsapp,
		url: WHATSAPP_URL,
		text: WHATSAPP_TEXT
	},
	{
		Icon: FiFacebook,
		url: FB_URL,
		text: FB_TEXT
	},
	{
		Icon: GoMail,
		url: MAIL_URL,
		text: MAIL_TEXT
	},
	{
		Icon: MdLocationOn,
		url: LOCATION_URL,
		text: LOCATION_TXT
	}
];
