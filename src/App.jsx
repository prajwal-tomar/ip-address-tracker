import bgDesktop from "./assets/images/pattern-bg-desktop.png";
import bgPhone from "./assets/images/pattern-bg-mobile.png";
import InformationPanel from "./components/InformationPanel";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";

import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [ipAddressDetails, setIpAddressDetails] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const onSearch = () => {
    console.log("IP Address typed by the user is: " + searchInput);
    axios
      .get(`https://ipapi.co/${searchInput}/json/`)
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
      .catch((error) => {
        console.log(
          "Error occurred in getting the ip address details: " + error
        );
      })
      .finally(setSearchInput(""));
  };

  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((ipResponse) => {
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
      });
  }, []);

  return (
    <div className="min-h-screen font-rubik">
      <div className="flex flex-col items-center relative z-[1000]">
        <h1 className="absolute top-[10%] md:text-3xl text-2xl text-white font-medium">
          IP Address Tracker
        </h1>
        <img src={bgDesktop} alt="bg" className="w-full md:block hidden" />
        <img src={bgPhone} alt="bg" className="w-full block md:hidden" />
        <div className="absolute top-[35%]">
          <SearchBar
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onSearch={onSearch}
          />
        </div>
        {ipAddressDetails && (
          <div className="absolute md:top-[80%] top-[70%]">
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
