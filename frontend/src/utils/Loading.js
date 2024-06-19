import React from "react";

const Loading = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col loading-spinner">
          <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="spinner-border text-info"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
