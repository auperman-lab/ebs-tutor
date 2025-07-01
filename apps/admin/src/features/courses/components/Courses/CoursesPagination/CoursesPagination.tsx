import { Pagination } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ParamsType } from "@features/courses/types";

export const CoursesPagination = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const per_page = 12;
  const [page, setPage] = useState<number>(1);


  const getQueryParams = (): ParamsType => {
    const searchParams = new URLSearchParams(location.search);
    return {
      search: searchParams.get("search") || undefined,
      sort: (searchParams.get("sort") as ParamsType["sort"]) || undefined,
      category: searchParams.get("category") || undefined,
      tag: searchParams.get("tag") || undefined,
      page: searchParams.get("page") ? Number(searchParams.get("page")) : 1,
    };
  };

  const onPageChange = (newPage: number) => {
    const currentParams = getQueryParams();
    const updatedParams: ParamsType = {
      ...currentParams,
      page: newPage,
    };

    const searchParams = new URLSearchParams();
    Object.entries(updatedParams).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        searchParams.set(key, String(value));
      }
    });

    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  useEffect(() => {
    const params = getQueryParams();
    setPage(params.page || 1);
  }, [location.search]);


  return (
    <div>
      <Pagination
        current={page}
        total={50}
        pageSize={per_page}
        onChange={onPageChange}
      />
    </div>
  );
};
