import { Flex, Layout } from "antd";
import {
  MyCoursesCards,
  MyCoursesFiltration,
} from "../../components/MyCourses";

export const MyCoursesPage = () => {
  const { Content } = Layout;

  return (
    <Content>
      <Flex vertical={true} justify="center" align="center" gap={40}>
        <MyCoursesFiltration />
        <MyCoursesCards />
      </Flex>
    </Content>
  );
};
