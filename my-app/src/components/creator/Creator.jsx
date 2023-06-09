import React, { useState, useEffect, useCallback } from "react";
import { init, mintToken } from "../../services/Web3Client";
import { pinataService } from "../../services/pinataService";
import { useDropzone } from "react-dropzone";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./creator.css";

export default function Creator(props) {
  const [tokenData, setTokenData] = useState({
    name: "Test Approval",
    description: "Approval issued to Test Brand",
    image: "",
  });
  const [walletData, setWalletData] = useState({
    address: props.brandWallet,
    //address: "0x1f1b5b91e51a8383c23a1c9A24D3A32A30FB2064",
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
    props.setCreatorShow(false);
  };

  const handleInputAddress = (event) => {
    setWalletData((prevState) => {
      let newWalletData = { ...prevState };
      newWalletData.address = event.target.value;
      return newWalletData;
    });
  };

  const onFormChange = (e) => {
    const newUserValue = e.target.value;
    const nameOfField = e.target.name;

    setTokenData((prevState) => {
      const newTokenData = {
        ...prevState,
      };
      newTokenData[nameOfField] = newUserValue;
      return newTokenData;
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <form id="creatorForm">
            <input
              type="text"
              name="name"
              className="form-control mt-2"
              placeholder="Enter a name for your approval contract"
              onChange={onFormChange}
            />
            <input
              type="text"
              name="description"
              className="form-control mt-2"
              placeholder="Description"
              onChange={onFormChange}
            />
            <input {...getInputProps()}></input>
            <div className="dropzone mt-2" {...getRootProps()}>
              <div className="creator-cursor d-flex align-items-center">
                <AiOutlineCloudUpload size={40} />
                <h6 className="ms-2 mt-2">Upload Content</h6>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-success mt-2"
              onClick={handleMint}
            >
              Issue Approval
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
