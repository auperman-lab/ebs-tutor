import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '@const';
import { useStyles } from './styles';

const items = [
  {
    title: <Link to={routes.main}>Dashboard</Link>,
  },
  {
    title: <Link to={routes.courses}>My Courses</Link>,
  },
  {
    title: 'Development',
  },
  {
    title: 'Web Development',
  },
  {
    title: '2021 Complete Python Bootcamp From Zero to Hero in Python',
  },
];

export const CoursePath = () => {
  const { styles } = useStyles();
  return <Breadcrumb className={styles.mainPart} items={items} />;
};
