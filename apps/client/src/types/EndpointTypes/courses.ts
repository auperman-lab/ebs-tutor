import { Course } from '@clientTypes';

export type GetCoursesRequest = {
  order?: 'ASC' | 'DESC';
  order_by?: string;
  page?: number;
  per_page?: number;
  title?: string;
  'categories[]'?: number[];
  'tag[]'?: string[];
  'authors[]'?: number[];
  'ids[]'?: number[];
};

export type GetCoursesResponse = {
  data: Course[];
  total: number;
};
