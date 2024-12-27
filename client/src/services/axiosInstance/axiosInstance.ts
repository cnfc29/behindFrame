import type { AxiosError } from "axios";
import axios from "axios";
import type { StoreType } from "../../redux/store";
import type { AuthResponseType } from "../../types/authTypes";

let store: StoreType;

export const injectStore = (_store: StoreType): void => {
  store = _store;
};

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${
      store?.getState().auth.accessToken
    }`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  async (err: AxiosError & { config: { sent?: boolean; url?: string } }) => {
    const prevRequest = err.config;
    if (prevRequest.url?.endsWith("/tokens/refresh")) {
      return Promise.reject(err);
    }
    if (err.response?.status === 403 && !prevRequest.sent) {
      prevRequest.sent = true;
      const {
        data: { accessToken },
      } = await axiosInstance<AuthResponseType>("/api/tokens/refresh");
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
      store.dispatch({ type: "auth/setAccessToken", payload: accessToken });
      return axiosInstance(prevRequest);
    }
    return Promise.reject(err);
  }
);
