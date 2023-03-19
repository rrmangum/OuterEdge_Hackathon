import React, { useEffect } from "react";
import { init } from './Web3Client';

export default function Creator() {
  useEffect(() => {
    init();
  }, []);

  const handleCreate = () => {
    console.log("It's working");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Authorize brands to use my image</h1>
      </div>
      <div className="row">
        <button onClick={handleCreate}>Request Authorization</button>
      </div>
    </div>
  );
}
