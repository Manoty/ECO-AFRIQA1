import axios from 'axios';
import config from '../config';
// Function to get CSRF token from meta tag
function getCSRFToken() {
  const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
  return csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : '';
}
axios.defaults.withCredentials = true; // even for get requests if
                                    // demand session authentication
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

// Create an axios instance
const api = axios.create({
  baseURL: config.API_URL, // Ensure this points to your backend URL
  withCredentials: true, // Ensures cookies are sent with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include CSRF token
api.interceptors.request.use(config => {
  const csrfToken = getCSRFToken();
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default api;
