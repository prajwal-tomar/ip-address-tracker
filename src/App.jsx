import bgDesktop from "./assets/images/pattern-bg-desktop.png";
import InformationPanel from "./components/InformationPanel";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";

import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [ipAddressDetails, setIpAddressDetails] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    // Fetch the user's IP address using ipify
    axios
      .get("https://api.ipify.org?format=json")
      .then((ipResponse) => {
        setloading(true);
        const userIP = ipResponse.data.ip;

        // Fetch location data based on the user's IP address
        axios
          .get(`https://ipapi.co/${userIP}/json/`)
          .then((locationResponse) => {
            const locationData = locationResponse.data;

            setIpAddressDetails({
              ipAddress: locationData.ip,
              location: locationData.city,
              timezone: locationData.timezone,
              isp: locationData.org,
            });

            // Extract latitude and longitude from location data
            const { latitude, longitude } = locationData;

            // Update the user's location state with the retrieved coordinates
            setUserLocation({
              lat: parseFloat(latitude),
              lng: parseFloat(longitude),
            });
          })
          .catch((locationError) => {
            console.error("Failed to fetch user location data:", locationError);
          });
      })
      .catch((ipError) => {
        console.error("Failed to fetch user IP address:", ipError);
      })
      .finally(setloading(false));
  }, []);

  return (
    <div className="min-h-screen w-full font-rubik">
      <div className="h-1/2 flex flex-col items-center relative z-[1000]">
        <h1 className="absolute top-[10%] text-3xl text-white font-medium">
          IP Address Tracker
        </h1>
        <img src={bgDesktop} alt="bg" className="w-full" />
        <div className="absolute top-[35%]">
          <SearchBar />
        </div>
        {ipAddressDetails && (
          <div className="absolute top-[80%]">
            <InformationPanel ipAddressDetails={ipAddressDetails} />
          </div>
        )}
      </div>

      {userLocation && (
        <div className="">
          {" "}
          <Map
            userLocation={userLocation}
            ipAddressDetails={ipAddressDetails}
          />
        </div>
      )}
    </div>
  );
};

export default App;