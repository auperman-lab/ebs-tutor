import { Breadcrumb, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import { routes } from "@const";
import { useQuery } from "@tanstack/react-query";
import { api } from "@api";

const { Text } = Typography;

export const CourseBreadCrumbs = () => {

  const { id }  = useParams();

  const { data: course, isLoading} = useQuery({
    queryKey: ["course", id],
    queryFn: () => api.courses.getCourse(id!),
  });

  if (isLoading) return <Text>Loading course...</Text>;

  const items = [
    {
      title: <Link to={routes.main}>Dashboard</Link>,
    },
    {
      title: <Link to={routes.courses}>My Courses</Link>,
    },
    {
      title: course!.title,
    },
  ];

  return (
    <div>
      <Breadcrumb items={items} />
    </div>
  );
}
