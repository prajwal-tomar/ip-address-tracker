import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const Map = ({ userLocation, ipAddressDetails }) => {
  return (
    <MapContainer
      center={userLocation}
      zoom={13}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CustomMap userLocation={userLocation} ipAddressDetails={ipAddressDetails} />
    </MapContainer>
  );
};

const CustomMap = ({ userLocation, ipAddressDetails }) => {
  const map = useMap();

  // When userLocation changes, update the map center
  useEffect(() => {
    if (userLocation) {
      map.setView(userLocation);
    }
  }, [userLocation, map]);

  return (
    <div>
      <Marker position={userLocation}>
        <Popup> {ipAddressDetails.location} </Popup>
      </Marker>
    </div>
  );
};

export default Map;
