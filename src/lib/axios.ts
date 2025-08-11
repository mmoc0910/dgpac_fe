import axios, { AxiosProgressEvent, AxiosRequestConfig} from "axios"

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})
// Helper functions for common API operations
export const apiClient = {
  // GET request
get: async <T = unknown>(url: string, config: AxiosRequestConfig = {}) => {
  const response = await api.get<T>(url, config);
  return response.data;
},

  // POST request
  post: async <T = unknown>(url: string, data = {}, config = {}) => {
    const response = await api.post<T>(url, data, config)
    return response.data
  },

  // PUT request
  put: async <T = unknown>(url: string, data = {}, config = {}) => {
    const response = await api.put<T>(url, data, config)
    return response.data
  },

  // PATCH request
  patch: async <T = unknown>(url: string, data = {}, config = {}) => {
    const response = await api.patch<T>(url, data, config)
    return response.data
  },

  // DELETE request
  delete: async <T = unknown>(url: string, config = {}) => {
    const response = await api.delete<T>(url, config)
    return response.data
  },

  // Upload file
  upload: async <T = unknown>(url: string, formData: FormData, onUploadProgress?: (progress: number) => void) => {
    const response = await api.post<T>(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent: AxiosProgressEvent) => {
        if (onUploadProgress && progressEvent.total) {
          const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          onUploadProgress(progress)
        }
      },
    })
    return response.data
  },
}

export default api
