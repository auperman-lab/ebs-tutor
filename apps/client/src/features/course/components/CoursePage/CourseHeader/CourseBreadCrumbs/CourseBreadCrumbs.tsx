import { Breadcrumb } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { CourseBreadCrumbsSkeleton } from './CourseBreadCrumbsSkeleton';
import { api } from '@clientApi';
import { routes } from '@clientConst';

export const CourseBreadCrumbs = () => {
  const { id } = useParams();

  if (!id) return;

  const { data: course, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id),
  });

  if (isLoading) return <CourseBreadCrumbsSkeleton />;

  const items = [
    {
      title: <Link to={routes.main}>Dashboard</Link>,
    },
    {
      title: <Link to={routes.courses}>My Courses</Link>,
    },
    {
      title: course?.title,
    },
  ];

  return <Breadcrumb items={items} />;
};
