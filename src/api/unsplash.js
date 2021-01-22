import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID k6fd3Wz1FSpgt29NV5w8lX2pCXRmBcEqzLybrQ83WoM",
  },
});
