import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "1e301298-249e-4e7f-953e-dd11443a2b32",
  },
});

export const UsersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  unfollow(id) {
    return instance.delete(`follow/${id}`);
  },

  follow(id) {
    return instance.post(`follow/${id}`);
  },

  getProfile(userId) {
    console.warn("Obsolute method. PLS use profileApi");
    return profileApi.getProfile(userId);
  },
};

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

export const authApi = {
  getAuthMe() {
    return instance.get(`auth/me`);
  },
};
