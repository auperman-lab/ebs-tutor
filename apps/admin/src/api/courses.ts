import { axiosInstance } from "./axios/instance";
import { CategoryResponse, Course, GetCoursesRequest, GetCoursesResponse } from "@types";
import { apiEndpoints } from "@const";

export const courses = {
  getAllCourses: async (params: GetCoursesRequest): Promise<GetCoursesResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.getAllCourses, {
      params,
    });
    return {
      data: data.data,
      total: data.meta.total,
    };
  },
  getCourse: async (id:  string): Promise<Course> => {
    const { data } = await axiosInstance.get(apiEndpoints.getAllCourses + `/${id}`);
    return data.data;
  },
  getCategories: async (): Promise<CategoryResponse[]>=>{
    const { data } = await axiosInstance.get(apiEndpoints.getCategories + `?per_page=1000`);
    return data.data;
  },
  getTags: async (): Promise<any>=>{
    const { data } = await axiosInstance.get(apiEndpoints.getTags + `?per_page=1000`);
    return data.data;
  }

};
