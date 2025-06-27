import { axiosInstance } from './axios/instance';
import { Course } from "@types";
import { apiEndpoints } from "@const";

export const courses = {
  getAllCourses: async (): Promise<Course[]> => {
    const { data } = await axiosInstance.get(apiEndpoints.getAllCourses);
    return data.data;
  },
  getCourse: async (title:  string): Promise<Course> => {
    const { data } = await axiosInstance.get(apiEndpoints.getAllCourses, {
      params: { title },
    });
    return data.data[0];
  }
};
