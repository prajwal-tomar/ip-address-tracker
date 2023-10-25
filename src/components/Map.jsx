import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ userLocation, ipAddressDetails }) => {
  return (
    <MapContainer
      center={userLocation}
      zoom={13}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={userLocation}>
        <Popup> {ipAddressDetails.location} </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
