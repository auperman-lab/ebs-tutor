import { Flex, Layout } from 'antd';
import {
  MyCoursesCards,
  MyCoursesFiltration,
} from '../../components/MyCourses';
import { useStyles } from './styles';

export const MyCoursesPage = () => {
  const { styles } = useStyles();
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
