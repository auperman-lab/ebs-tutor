export type ParamsType = {
  search?: string;
  sort?: ParamsSortOption;
  category?: number[];
  tag?: string[];
  page?: number;
  perPage?: number;
  tutor?: number[];
};

export enum ParamsSortOption {
  asc = 'ASC',
  desc = 'DESC',
}
