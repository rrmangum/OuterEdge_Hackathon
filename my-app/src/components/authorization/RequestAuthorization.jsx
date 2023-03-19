import React from "react";

export default function Authentication() {
  const handleAuthorization = () => {
    console.log("It's working");
  };
  
  return (
    <div className="container">
      <div className="row">
        <h1>Authorize brands to use my image</h1>
      </div>
      <div className="row">
        <button onClick={handleAuthorization}>Request Authorization</button>
      </div>
    </div>
  );
}
