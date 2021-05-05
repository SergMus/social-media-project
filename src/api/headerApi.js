import React from "react";
import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "f68df3c5-c852-45bd-9494-29bd973ac7c9",
  },
});

export const headerAPI = {
  getUser() {
    return instance.get("auth/me");
  },
  login(email, password, rememberMe) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  },
};
