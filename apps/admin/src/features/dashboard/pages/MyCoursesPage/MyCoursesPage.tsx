import { Flex } from 'antd';
import {
  MyCoursesCards,
  MyCoursesFiltration,
}  from "@features/dashboard/components";

export const MyCoursesPage = () => {

  return (
    <Flex vertical justify="center" align="center" gap={24}>
      <MyCoursesFiltration />
      <MyCoursesCards />
    </Flex>
  );
};
