import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { GetCoursesRequest, ParamsType } from '@client/types';
import { perPage } from '@client/const';

export const useURLQuery = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const defaultParams: ParamsType = {
    sort: 'ASC',
    page: 1,
    perPage: perPage,
  };

  const getParams = (): ParamsType => {
    return {
      search: searchParams.get('search') || undefined,
      sort:
        (searchParams.get('sort') as ParamsType['sort']) || defaultParams.sort,
      category:
        searchParams.get('category')?.split(',').map(Number) || undefined,
      tag: searchParams.get('tag')?.split(',') || undefined,
      page: parseInt(searchParams.get('page') || '') || defaultParams.page,
      perPage:
        parseInt(searchParams.get('perPage') || '') || defaultParams.perPage,
      tutor: searchParams.get('tutor')?.split(',').map(Number) || undefined,
    };
  };

  const getRequestParams = (): GetCoursesRequest => {
    const params = getParams();
    return {
      order: params.sort || 'ASC',
      order_by: 'title',
      page: params.page || 1,
      per_page: params.perPage || perPage,
      title: params.search || undefined,
      'categories[]': params.category || undefined,
      'tag[]': params.tag || undefined,
      'authors[]': params.tutor || undefined,
    };
  };

  const setParams = (params: ParamsType) => {
    Object.entries(params).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        if (value.length > 0) {
          searchParams.set(key, value.join(','));
        } else {
          searchParams.delete(key);
        }
      } else if (
        !value ||
        value === 'all' ||
        value === defaultParams.sort ||
        value === defaultParams.page
      ) {
        searchParams.delete(key);
      } else {
        searchParams.set(key, String(value));
      }
    });

    navigate(`${location.pathname}?${searchParams.toString()}`, {
      replace: true,
    });
  };

  const clearParams = () => {
    navigate(location.pathname, { replace: true });
  };

  return {
    getParams,
    setParams,
    clearParams,
    getRequestParams,
  };
};
