// import GoogleMapReact from 'google-map-react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

const defaultCenter = { lat: 11.025259, lng: 77.002158 };

const defaultOptions = { scrollwheel: false };

const RegularMap = withScriptjs(
	withGoogleMap(props => (
		<GoogleMap
			defaultZoom={16}
			defaultCenter={defaultCenter}
			defaultOptions={defaultOptions}
		>
			<Marker position={defaultCenter} />
		</GoogleMap>
	))
);

const loadingElementStyle = { height: '100%' };
const containerElementStyle = { height: '280px' };
const mapElementStyle = { height: '100%' };

export default function GoogleMaps({className = ''}) {
	return (
		<RegularMap
			googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCU4AWLJljj5kyjJDobc1zZi_HiwqKsCxY"
			loadingElement={<div style={loadingElementStyle} />}
			containerElement={<div className={className} />}
			mapElement={<div style={mapElementStyle} />}
		/>
	);
}