import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useAuthStore } from '../stores/authStore';

const axiosInstance = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: 10000,
});

// instance for refreshing
const axiosRefreshInstance = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: 10000,
});

// refresh token
const refreshAccessToken = async () => {
  const { authInfo, setAuthInfo } = useAuthStore();
  const refreshToken = authInfo.refreshToken;
  try {
    const response = await axiosRefreshInstance.post('/auth/refresh-token', {
      token: refreshToken,
    }); // re-check link API
    const { accessToken, refreshToken: newRefreshToken } = response.data;

    // Update tokens in store
    setAuthInfo({
      ...authInfo,
      jwtToken: accessToken,
      refreshToken: newRefreshToken || refreshToken,
    });

    return accessToken;
  } catch (error) {
    // redirect to login page or show error
    console.error('Error refreshing token', error);
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const { authInfo } = useAuthStore();
    let token = authInfo.jwtToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken?.exp && decodedToken?.exp * 1000 < Date.now()) {
        // call refresh token when token is expired
        token = await refreshAccessToken();
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const { clearAuthInfo } = useAuthStore();
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await refreshAccessToken(); // Refresh the token
        axiosInstance.defaults.headers.common['Authorization'] =
          `Bearer ${newToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest); // Retry the original request
      } catch (refreshError) {
        console.error(refreshError);
        clearAuthInfo(); // Optionally logout user
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
