import { Flex } from 'antd';
import {
  MyCoursesCards,
  MyCoursesFiltration,
}  from '../../components/MyCourses';

export const MyCoursesPage = () => {

  return (
    <Flex vertical justify="center" align="center" gap={24}>
      <MyCoursesFiltration />
      <MyCoursesCards />
    </Flex>
  );
};
