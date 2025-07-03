import { Flex } from 'antd';
import {
  CoursesPagination,
  CoursesCards,
  CoursesFiltration,
} from "@features/courses/components";
import { useStyles } from './styles';

export const CoursesPage = () => {
  const { styles } = useStyles();
  return (
    <Flex
      vertical
      justify="center"
      align="center"
      gap={24}
      className={styles.container}
    >
      <CoursesFiltration />
      <CoursesCards />
      <CoursesPagination/>

    </Flex>
  );
};
