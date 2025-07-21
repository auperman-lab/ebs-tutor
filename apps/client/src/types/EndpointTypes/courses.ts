import { Course, ParamsSortOption } from '@client/types';

export type GetCoursesRequest = {
  order?: ParamsSortOption;
  order_by?: string;
  page?: number;
  per_page?: number;
  title?: string;
  'categories[]'?: number[];
  'tag[]'?: string[];
  'authors[]'?: number[];
};

export type GetCoursesResponse = {
  data: Course[];
  total: number;
};

export type GetTagsResponse = {
  title: string;
};
