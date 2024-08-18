import React from "react";

const OfflinePage = () => {
  return (
    <div className="offline-container">
      <h1>You are offline</h1>
      <h2>Please check your internet connection...☹️</h2>
      <button onClick={() => {
        window.location.reload()
      }}>Refresh Page</button>
      <div className="bouncing-ball"></div>
    </div>
  );
};

export default OfflinePage;
