import { axiosInstance } from './axios/instance';
import {
  CategoryResponse,
  Course,
  GetCoursesRequest,
  GetCoursesResponse,
  CreateCourseRequest,
} from '@types';
import { apiEndpoints } from '@const';

export const courses = {
  getAllCourses: async (
    params: GetCoursesRequest
  ): Promise<GetCoursesResponse> => {
    const { data } = await axiosInstance.get(apiEndpoints.courses, {
      params,
    });
    return {
      data: data.data,
      total: data.meta.total,
    };
  },
  getCourse: async (id: string): Promise<Course> => {
    const { data } = await axiosInstance.get(apiEndpoints.courses + `/${id}`);
    return data.data;
  },
  getCategories: async (): Promise<CategoryResponse[]> => {
    const { data } = await axiosInstance.get(
      apiEndpoints.getCategories + `?per_page=1000`
    );
    return data.data;
  },
  getTags: async (): Promise<any> => {
    const { data } = await axiosInstance.get(
      apiEndpoints.getTags + `?per_page=1000`
    );
    return data.data;
  },

  createCourse: async (payload: CreateCourseRequest): Promise<Course> => {
    const { data } = await axiosInstance.post(apiEndpoints.courses, payload);
    return data.data;
  },

  deleteCourse: async (id: number): Promise<unknown> => {
    const { data } = await axiosInstance.delete(
      apiEndpoints.courses + '/' + id
    );
    return data;
  },

  updateCourse: async (payload: Course): Promise<any> => {
    const { id, categories, tags, authors, ...rest } = payload;

    const searchParams = new URLSearchParams();

    categories?.forEach((catId) =>
      searchParams.append('categories[]', String(catId))
    );

    tags?.forEach((tagId) => searchParams.append('tags[]', String(tagId)));

    authors?.forEach((authorId) =>
      searchParams.append('authors[]', String(authorId))
    );

    const queryString = searchParams.toString();

    const { data } = await axiosInstance.post(
      `${apiEndpoints.courses}/${id}?${queryString}`,
      rest
    );

    return data.data;
  },

  uploadFile: async (payload: FormData): Promise<any> => {
    const { data } = await axiosInstance.post(
      apiEndpoints.uploadFile,
      payload,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    return data.data;
  },

  getTutors: async (): Promise<any> => {
    const { data } = await axiosInstance.get(apiEndpoints.getTutors);
    return data.data;
  },
};
