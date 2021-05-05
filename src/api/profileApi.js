import React from "react";
import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f68df3c5-c852-45bd-9494-29bd973ac7c9",
  },
});

export const profileAPI = {
  getUser(userId) {
    return instance.get("profile/" + userId).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status: status });
  },
};
