import React from "react";

const InformationPanel = ({ ipAddressDetails }) => {
  return (
    <div className="md:w-full w-80  mx-auto">
      <div className="rounded-lg flex md:flex-row flex-col md:gap-5 gap-3 bg-white md:p-10 p-5 shadow-xl">
        <div className="flex flex-col md:items-start items-center md:pr-5 md:border-r md:border-slate-300">
          <h1 className="md:text-md text-sm text-slate-400 font-medium">IP ADDRESS</h1>
          <p className="md:text-2xl font-bold">{ipAddressDetails.ipAddress}</p>
        </div>
        <div className="flex flex-col md:items-start items-center md:pr-5 md:border-r md:border-slate-300">
          <h1 className="md:text-md text-sm text-slate-400 font-medium">LOCATION</h1>
          <p className="md:text-2xl font-bold">{ipAddressDetails.location}</p>
        </div>
        <div className="flex flex-col md:items-start items-center md:pr-5 md:border-r md:border-slate-300">
          <h1 className="md:text-md text-sm text-slate-400 font-medium">TIMEZONE</h1>
          <p className="md:text-2xl font-bold">{ipAddressDetails.timezone}</p>
        </div>
        <div className="flex flex-col md:items-start items-center ">
          <h1 className="md:text-md text-sm text-slate-400 font-medium">ISP</h1>
          <p className="md:text-2xl font-bold text-center">{ipAddressDetails.isp}</p>
        </div>
      </div>
    </div>
  );
};

export default InformationPanel;

// <div className="p-4">
//   <h2>IP Information</h2>
//   <p>IP Address: {ipAddressDetails.ipAddress}</p>
//   <p>Location: {ipAddressDetails.location}</p>
//   <p>Timezone: {ipAddressDetails.timezone}</p>
//   <p>ISP: {ipAddressDetails.isp}</p>
// </div>
