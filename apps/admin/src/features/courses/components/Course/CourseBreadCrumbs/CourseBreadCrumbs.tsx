import { Breadcrumb } from 'antd';
import { Link, useParams } from 'react-router-dom';
import { routes } from '@const';
import { useQuery } from '@tanstack/react-query';
import { api } from '@api';
import { CourseBreadCrumbsSkeleton } from './CourseBreadCrumbsSkeleton';
import { FailComponent } from '@features/not-found';

export const CourseBreadCrumbs = () => {
  const { id } = useParams();

  if (!id) return <FailComponent message="Invalid course ID" />;

  const { data: course, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id),
  });

  if (!course) return <FailComponent message="Invalid course data" />;
  if (isLoading) return <CourseBreadCrumbsSkeleton />;

  const items = [
    {
      title: <Link to={routes.main}>Dashboard</Link>,
    },
    {
      title: <Link to={routes.courses}>My Courses</Link>,
    },
    {
      title: course.title,
    },
  ];

  return <Breadcrumb items={items} />;
};
