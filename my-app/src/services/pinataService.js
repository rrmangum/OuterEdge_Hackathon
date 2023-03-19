import axios from "axios";

const PINATA_JWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIwNThmODBkNi0wN2M2LTQxNGUtOTMxYy03OWI3NTUwNTg1ZTMiLCJlbWFpbCI6ImV1Z2VuZWsuY29kZUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiZDU4Y2NlNWM2NDRmOWRhZTQ5MDkiLCJzY29wZWRLZXlTZWNyZXQiOiIzZDZmY2JiNjhlYmU0ZDViYmY0YTg5ZTJkMmE2MDViMDdmYzM4Y2M5ZDNiNGUzYTFhNWNmNDdiMTRiYjI1NGYzIiwiaWF0IjoxNjc5MTYyMDIyfQ.LyQCQOq-lDaFNfjKcAR_a-6GH0UDswjAnSdTCSEm3Fc`;

const testPinata = () => {
  const config = {
    method: "GET",
    url: "https://api.pinata.cloud/data/testAuthentication",
    headers: {
      Authorization: `Bearer ${PINATA_JWT}`,
    },
  };
  return axios(config);
};

const pinJSON = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    data: payload,
    headers: {
      Authorization: `Bearer ${PINATA_JWT}`,
    },
  };
  return axios(config);
};

const pinFile = (payload) => {
  const config = {
    method: "POST",
    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
    data: payload,
    maxBodyLength: "Infinity",
    headers: {
      "Content-Type": `multipart/form-data; boundary=${payload._boundary}`,
      Authorization: `Bearer ${PINATA_JWT}`,
    },
  };
  return axios(config);
};

const pinataService = {
  testPinata,
  pinJSON,
  pinFile,
};

export { pinataService };
