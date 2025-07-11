import { axiosInstance } from './axios/instance';
import {
  CategoryResponse,
  Course,
  GetCoursesRequest,
  GetCoursesResponse,
  CreateCourseRequest,
  Lesson,
  Topic,
  Product,
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

  updateCourse: async (payload: Course): Promise<Course> => {
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

  createLesson: async (payload: Lesson): Promise<Lesson> => {
    const { data } = await axiosInstance.post(apiEndpoints.lessons, payload);
    return data.data;
  },

  deleteLesson: async (id: number): Promise<unknown> => {
    const { data } = await axiosInstance.delete(
      apiEndpoints.lessons + '/' + id
    );
    return data;
  },

  updateLesson: async (payload: Lesson): Promise<unknown> => {
    const { id, ...rest } = payload;
    const { data } = await axiosInstance.put(
      apiEndpoints.lessons + '/' + id,
      rest
    );
    return data;
  },

  createTopic: async (payload: Topic): Promise<Topic> => {
    const { data } = await axiosInstance.post(apiEndpoints.topics, payload);
    return data.data;
  },

  deleteTopic: async (id: number): Promise<unknown> => {
    const { data } = await axiosInstance.delete(apiEndpoints.topics + '/' + id);
    return data;
  },

  updateTopic: async (payload: Topic): Promise<unknown> => {
    const { id, ...rest } = payload;
    const { data } = await axiosInstance.put(
      apiEndpoints.topics + '/' + id,
      rest
    );
    return data;
  },

  createProduct: async (payload: Product): Promise<Product> => {
    const { data } = await axiosInstance.post(apiEndpoints.products, payload);
    return data.data;
  },

  updateProduct: async (payload: Product): Promise<Product> => {
    const { id, ...rest } = payload;
    const { data } = await axiosInstance.put(
      apiEndpoints.products + '/' + id,
      rest
    );
    return data;
  },
};
