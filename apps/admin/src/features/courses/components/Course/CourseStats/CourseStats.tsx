import { Col, Flex, Row, Typography } from "antd";
import { StatCard } from "@features/dashboard/components";
import { ChartBar, ChatCircleDots, CreditCard, Gear } from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@api";
import { FailComponent } from "@features/not-found";
import { useParams } from "react-router-dom";
import { CourseStatsSkeleton } from "./CourseStatsSkeleton";



const { Text } = Typography;

// views
export const CourseStats = () => {
  const { id }  = useParams();

  const { data: course, isLoading, isError } = useQuery({
    queryKey: ["course", id],
    queryFn: () => api.courses.getCourse(id!),
  });

  if (isLoading) return <CourseStatsSkeleton />;
  if (isError) return <FailComponent message="Failed to load courses" />;
  if (!course) return <Text type="danger">No course data found.</Text>;


  const stats = [
    { title: "Course Level", quantity: course.level, icon: <ChartBar />, color: "#00FF00" },
    { title: "Course Language", quantity: course.language, icon: <Gear />, color: "#FF0000" },
    { title: "Students Enrolled", quantity: course.users_count, icon: <CreditCard />, color: "#0000FF" },
    { title: "Duration", quantity: course.duration || 0, icon: <ChatCircleDots />, color: "#00FF00" },
  ];

  return (
    <Row gutter={[24, 24]} style={{ width: "100%" }}>
      <Col span={12}>
        <Flex gap={24} vertical>
          {stats.map((item, index) => (
            <StatCard
              key={`left-${index}-${item.title}`}
              color={item.color}
              title={item.title}
              quantity={item.quantity}
              icon={item.icon}
            />
          ))}
        </Flex>
      </Col>

      <Col span={12}>
        <Flex gap={24} vertical>
          {stats.map((item, index) => (
            <StatCard
              key={`right-${index}-${item.title}`}
              color={item.color}
              title={item.title}
              quantity={item.quantity}
              icon={item.icon}
            />
          ))}
        </Flex>
      </Col>
    </Row>

)

};
