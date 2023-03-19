import React, { useState, useEffect, useCallback } from "react";
import { init, mintToken } from "../../services/Web3Client";
import { pinataService } from "../../services/pinataService";
import { useDropzone } from "react-dropzone";

export default function Creator() {
  const [tokenData, setTokenData] = useState({
    name: "Test Approval",
    attributes: {
      Issuer: "Test Creator",
    },
    description: "Approval issued to Test Brand",
    image: "",
  });
  const [walletData, setWalletData] = useState({
    address: "",
  });

  useEffect(() => {
    init();
  }, []);

  const onDrop = useCallback((acceptedFiles) => {
    let formData = new FormData();

    acceptedFiles.forEach((file) => {
      formData.append("file", file);
    });

    pinataService
      .pinFile(formData)
      .then(onImageUploadSuccess)
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxFiles: 1 });

  const onImageUploadSuccess = (response) => {
    setTokenData((prevState) => {
      let newTokenData = { ...prevState };
      newTokenData.image = `ipfs://${response.data.IpfsHash}`;
      return newTokenData;
    });
  };

  const handleMint = () => {
    pinataService
      .pinJSON(tokenData)
      .then(onJSONUploadSuccess)
      .catch((err) => {
        console.log(err);
      });
  };

  const onJSONUploadSuccess = (response) => {
    console.log(response);
    mintToken(`${walletData.address}`, `ipfs://${response.data.IpfsHash}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputAddress = (event) => {
    setWalletData((prevState) => {
      let newWalletData = { ...prevState };
      newWalletData.address = event.target.value;
      return newWalletData;
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Authorize brands to use my image</h1>
      </div>
      <div className="row">
        <div>
          <input {...getInputProps()}></input>
          <div className="dropzone" {...getRootProps()}>
            <div>
              <h5>Drop files here or click to upload</h5>
            </div>
          </div>
        </div>
        <form>
          <input
            type="text"
            name="address"
            onChange={handleInputAddress}
          ></input>
        </form>
        <button onClick={handleMint}>Mint NFT</button>
      </div>
    </div>
  );
}
