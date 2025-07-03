import { Flex } from 'antd';
import {
  MyCoursesCards,
  MyCoursesFiltration,
}  from "@features/courses/components";
import { useStyles } from './styles';

export const MyCoursesPage = () => {
  const { styles } = useStyles();
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      gap={24}
      className={styles.container}
    >
      <MyCoursesFiltration />
      <MyCoursesCards />
    </Flex>
  );
};
