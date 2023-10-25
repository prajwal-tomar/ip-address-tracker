import React from "react";

const InformationPanel = ({ ipAddressDetails }) => {
  return (
    <div className="rounded-lg flex flex-wrap gap-5 bg-white p-10 shadow-xl">
      <div className="flex flex-col pr-5 border-r border-slate-300">
        <h1 className="text-md text-slate-400 font-medium">IP ADDRESS</h1>
        <p className="text-2xl font-bold">{ipAddressDetails.ipAddress}</p>
      </div>
      <div className="flex flex-col pr-5 border-r border-slate-300">
        <h1 className="text-md text-slate-400 font-medium">LOCATION</h1>
        <p className="text-2xl font-bold">{ipAddressDetails.location}</p>
      </div>
      <div className="flex flex-col pr-5 border-r border-slate-300">
        <h1 className="text-md text-slate-400 font-medium">TIMEZONE</h1>
        <p className="text-2xl font-bold">{ipAddressDetails.timezone}</p>
      </div>
      <div className="flex flex-col">
        <h1 className="text-md text-slate-400 font-medium">ISP</h1>
        <p className="text-2xl font-bold">{ipAddressDetails.isp}</p>
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
