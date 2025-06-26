import { Flex } from 'antd';
import {
  MyCoursesCards,
  MyCoursesFiltration,
} from '../../components/MyCourses';
import { useStyles } from './styles';

export const MyCoursesPage = () => {
  const { styles } = useStyles();
  return (
    <Flex
      vertical={true}
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
