import React from "react";
import "../styles/mobileapp.css";

const MobileApp = () => {
  return (
    <div className="ma-container">
      {/* Breadcrumb */}
      <div className="ma-breadcrumb">
        <span>You are here :</span>
        <a href="/">Home</a>
        <span> / </span>
        <span className="ma-active">Work in Progress</span>
      </div>

      {/* Main Content */}
      <div className="ma-box">
        <img
          src="/assets/images/work-in-progress.jpg"
          alt="Construction"
        />
      </div>
    </div>
  );
};

export default MobileApp;
