// import GoogleMapReact from 'google-map-react';
import {
	withScriptjs,
	withGoogleMap,
	GoogleMap,
	Marker
} from "react-google-maps";

const defaultCenter = { lat: 11.003953, lng: 76.953658 };

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
const mapElementStyle = { height: '100%' };

export default function GoogleMaps({className = ''}) {
	return (
		<RegularMap
			googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCU4AWLJljj5kyjJDobc1zZi_HiwqKsCxY"
			loadingElement={<div className="mapBg" style={loadingElementStyle} />}
			containerElement={<div className={className} id="map" />}
			mapElement={<div style={mapElementStyle} />}
		/>
	);
}