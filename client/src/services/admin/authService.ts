

import api from "../api";

export const authService = {
  login: (data: { email: string; password: string }) =>
    api.post("/auth/login", data).then(res => res.data),

  refresh: (refreshToken: string) =>
    api.post("/auth/refresh", { refreshToken }).then(res => res.data),

  logout: (refreshToken: string) =>
    api.post("/auth/logout", { refreshToken }).then(res => res.data),

  me: () =>
    api.get("/auth/me").then(res => res.data),
};