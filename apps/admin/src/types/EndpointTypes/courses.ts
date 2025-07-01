import { Course } from "@types";

export type GetCoursesRequest = {
  order?: "ASC" | "DESC";
  order_by?: string;
  page?: number;
  per_page?: number;
  title?: string;
  category_id?: number;
  tag?: string;
}

export type GetCoursesResponse = {
  data: Course[];
  total: number
}

