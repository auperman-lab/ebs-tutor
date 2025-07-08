import { Col, Row, Spin } from "antd";
import { CourseCard, Filter, ListHeader } from '@clientFeatures/courseList';
import { api } from "@clientApi";
import { useQuery } from "@tanstack/react-query";
import { LoadingOutlined } from "@ant-design/icons";


export const CourseListPage = () => {

  const { data: courses, isLoading, isError } = useQuery({
    queryKey: ["myCourses", {}],
    queryFn: () => api.courses.getAllCourses({}),
  });

  if (isLoading) return (<Spin indicator={<LoadingOutlined spin />} size="large" />);
  if (isError) return <div>error of course</div>;

  return (
    <div>
      <Row gutter={[24, 24]} style={{ width: "100%" }}>

        <Col span={24}>
          <ListHeader/>
        </Col>

        <Col span={6}>
            <Filter />
        </Col>

        <Col span={18}>
          <Row gutter={[24, 24]} style={{ width: "100%" }}>
            {courses!.data.map((item) => (
              <CourseCard
                key={item.id}
                image_url={item.image_url}
                title={item.title}
                id={item.id}
                categories={item.categories}
                users_count={item.users_count}
                price={item.product?.price}
              />
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};
