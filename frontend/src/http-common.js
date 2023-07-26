import axios from "axios";

export default axios.create({
  baseURL: "https://repo-api-d7dk.onrender.com/api/v1/restaurants",
  headers: {
    "Content-type": "application/json",
  },
});
