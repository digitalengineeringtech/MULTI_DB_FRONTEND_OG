import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.1.146:9000/api",
  baseURL: "https://detfsmm.com/api",
});

// https://detfsmm.com/api
// https://detfsmm.com/api
//Real Port - https://detmm-fuelstations.com/api
// Singapore Port - http://13.251.206.31:9000/api
// Singapore SSl Port - http://detfsmm.com/api  //now
// Singapore SSl Port - http://detfsmm.com/api
//raspberrppi - http://192.168.100.62:9000/api

export default instance;
