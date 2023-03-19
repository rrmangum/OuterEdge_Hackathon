import axios from "axios";

const PINATA_JWT = `${process.env.REACT_APP_PINATA_API_KEY}`

const testPinata = () => {
const config = {
  method: 'GET',
  url: 'https://api.pinata.cloud/data/testAuthentication',
  headers: { 
    'Authorization': `Bearer ${PINATA_JWT}`,
  }
};
return axios(config);
}

const pinJSON = (payload) => {
    const config = {
        method: 'POST',
        url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
        data: payload,
        headers: { 
          'Authorization': `Bearer ${PINATA_JWT}`,
        },
      };
      return axios(config);
}

const pinFile = (payload) => {
    const config = {
        method: 'POST',
        url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
        data: payload,
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${payload._boundary}`,
          'Authorization': `Bearer ${PINATA_JWT}`,
        }
    }
    return axios(config);
}

const pinataService = 
{
    testPinata,
    pinJSON,
    pinFile,
}

export { pinataService };