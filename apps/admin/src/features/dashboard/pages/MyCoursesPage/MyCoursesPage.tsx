import { Flex } from 'antd';
import {
  MyCoursesCards,
  MyCoursesFiltration,
}  from '../../components/MyCourses';

export const MyCoursesPage = () => {
  const { Content } = Layout;

  return (
    <Flex vertical={true} justify="center" align="center" gap={24}>
      <MyCoursesFiltration />
      <MyCoursesCards />
    </Flex>
  );
};
