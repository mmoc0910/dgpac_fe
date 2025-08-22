import dayjs from "dayjs";
import { apiClient } from "./axios";
import qs from "qs";

// Types
export interface Product {
  _id: string;
  title: string;
  image: string;
  description: string;
  range: string[];
  position: number;
  content?: string;
  linkSharepoint?: string;
}

export enum IndustryEnum {
  ALL = "all",
  CHEMICALS = "chemicals",
  PHARMACEUTICALS = "pharmaceuticals & healthcare",
  OIL_GAS = "oil & gas",
  ELECTRONICS = "electronics & semiconductors",
  DEFENSE = "defense & military",
  ENERGY = "energy & renewables",
  CONSUMER_GOODS = "consumer goods",
  OTHERS = "others",
}

export enum WorkEnum {
  ALL = "all",
  PACKAGING = "packaging",
  DECANTING = "decanting",
  TRANSPORT = "transport",
  WAREHOUSING = "warehousing",
  TRAINING = "training",
  LABELLING = "labelling",
  DECLARATION = "declaration",
}

export interface Project {
  _id?: string;
  title: string;
  image: string;
  description: string;
  industry: IndustryEnum;
  work: WorkEnum;
  slug: string;
  content: string;
  createdAt: dayjs.Dayjs;
}

export interface UserRequest {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  location: string;
  request: string;
  safetyDataSheet?: string;
  packingList?: string;
}

export interface Blog {
  _id?: string;
  title: string;
  tag: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    data: T[];
    total: number;
    page: number;
    totalPages: number;
  };
}

// Product API Services
export const productService = {
  // Get all products
  getAll: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<PaginatedResponse<Product>> => {
    try {
      const response = await apiClient.get<PaginatedResponse<Product>>(
        "/products",
        { params }
      );
      return response;
    } catch (error) {
      // Error already handled by interceptor
      throw error;
    }
  },

  // Get single product
  getById: async (id: string): Promise<ApiResponse<Product>> => {
    try {
      const response = await apiClient.get<ApiResponse<Product>>(
        `/products/${id}`
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

// Project API Services
export const projectService = {
  // Get all projects
  getAll: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    industries?: string[];
    works?: string[];
  }): Promise<PaginatedResponse<Project>> => {
    try {
      const response = await apiClient.get<PaginatedResponse<Project>>(
        "/projects",
        {
          params,
          paramsSerializer: (p: unknown) =>
            qs.stringify(p, { arrayFormat: "repeat" }),
        }
      );
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get single project
  getById: async (id: string): Promise<ApiResponse<Project>> => {
    try {
      const response = await apiClient.get<ApiResponse<Project>>(
        `/projects/${id}`
      );
      return response;
    } catch (error) {
      throw error;
    }
  },

  getRelated: async (id: string): Promise<PaginatedResponse<Project>> => {
    try {
      const response = await apiClient.get<PaginatedResponse<Project>>(
        `/projects/${id}/related`
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
};

// Blog API Services
export const blogService = {
  // Get all blogs
  getAll: async (params?: {
    page?: number;
    limit?: number;
    search?: string;
    tag?: string;
  }): Promise<PaginatedResponse<Blog>> => {
    try {
      const response = await apiClient.get<PaginatedResponse<Blog>>("/blogs", {
        params,
      });
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get single blog
  getById: async (id: string): Promise<ApiResponse<Blog>> => {
    try {
      const response = await apiClient.get<ApiResponse<Blog>>(`/blogs/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Create blog
};

//
export const userRequestService = {
  submit: async (userRequestData: UserRequest) => {
    try {
      const response = await apiClient.post(`/user-requests`, userRequestData);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

// Upload Service
export const uploadService = {
  // Upload single file
  uploadFile: async (
    file: File,
    onProgress?: (progress: number) => void
  ): Promise<
    ApiResponse<{ filename: string; originalname: string; path: string }>
  > => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await apiClient.upload<
        ApiResponse<{ filename: string; originalname: string; path: string }>
      >("/upload", formData, onProgress);
      // toast({
      //   title: 'Success',
      //   description: 'File uploaded successfully',
      // });
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Upload multiple files
  uploadFiles: async (
    files: File[],
    onProgress?: (progress: number) => void
  ): Promise<ApiResponse<{ urls: string[]; fileNames: string[] }>> => {
    try {
      const formData = new FormData();
      files.forEach((file, index) => {
        formData.append(`files[${index}]`, file);
      });

      const response = await apiClient.upload<
        ApiResponse<{ urls: string[]; fileNames: string[] }>
      >("/upload/multiple", formData, onProgress);
      // toast({
      //   title: 'Success',
      //   description: `${files.length} files uploaded successfully`,
      // });
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export const getImageUrl = (image: string): string => {
  return image.startsWith("http")
    ? image
    : `${process.env.NEXT_PUBLIC_API_URL}/${image}`;
};
