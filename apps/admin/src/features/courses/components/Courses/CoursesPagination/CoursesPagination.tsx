import { Pagination } from 'antd';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ParamsType } from '@features/courses/types';
import { useQuery } from '@tanstack/react-query';
import { api } from '@api';
import { GetCoursesRequest } from '@types';

export const CoursesPagination = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const per_page = 12;
	const [searchParams] = useSearchParams();
	const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
	const [params, setParams] = useState<GetCoursesRequest>({ page: 1 });

	const { data: data } = useQuery({
		queryKey: ['myCourses', params],
		queryFn: () => api.courses.getAllCourses(params),
	});

	const getQueryParams = (): GetCoursesRequest => {
		return {
			title: searchParams.get('search') || undefined,
			order: (searchParams.get('sort') as ParamsType['sort']) || 'ASC',
			order_by: 'title',
			category_id: searchParams.get('category') ? Number(searchParams.get('category')) : undefined,
			tag: searchParams.get('tag') || undefined,
			page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
			per_page: per_page,
		};
	};

	const onPageChange = (newPage: number) => {
		const updatedParams: ParamsType = {
			...params,
			page: newPage,
		};

		Object.entries(updatedParams).forEach(([key, value]) => {
			if (value !== undefined && value !== '') {
				searchParams.set(key, String(value));
			}
		});

		navigate(`${location.pathname}?${searchParams.toString()}`);
	};

	useEffect(() => {
		setParams(getQueryParams());
		setPage(Number(searchParams.get('page')) || 1);
	}, [location.search]);


	return (
		<Pagination
			current={page}
			total={data ? data.total : 12}
			pageSize={per_page}
			onChange={onPageChange}
		/>
	);
};
