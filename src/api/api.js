import axios from "axios";

const instance = axios.create({
  baseURL : 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers:{
    "API-KEY":"1e301298-249e-4e7f-953e-dd11443a2b32"
  }
})


export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};
