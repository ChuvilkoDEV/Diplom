import axios from "axios";

const index = axios.create({
  baseURL: "http://212.233.90.56:8081",
  headers: {
    "Content-Type": "application/json"
  }
});

export default index;
