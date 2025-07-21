import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { useNavigate, useParams } from 'react-router-dom';
import { Flex, List, Spin } from 'antd';
import { ArrowRight, CircleCheck } from '@client/assets';
import { useStyles } from './styles';
import { LoadingOutlined } from '@ant-design/icons';
import { routes } from '@client/const';

const learnData = [
  {
    title:
      'You will learn how to design beautiful websites using Figma, an interface design tool used by designers at Uber, Airbnb and Microsoft.',
  },
  {
    title:
      'You will learn secret tips of Freelance Web Designers and how they make great money freelancing online.',
  },
  {
    title:
      'Understand how to use both the Jupyter Notebook and create .py files',
  },
  {
    title:
      'You will learn how to take your designs and build them into powerful websites using Webflow, a state of the art site builder used by teams at Dell, NASA and more.',
  },
  {
    title:
      'Learn to use Python professionally, learning both Python 2 and Python 3!',
  },
  {
    title:
      'Get an understanding of how to create GUIs in the Jupyter Notebook system!',
  },
];

const forData = [
  {
    title:
      'This course is for those who want to launch a Freelance Web Design career.',
  },
  {
    title: 'Praesent eget consequat elit. Duis a pretium purus.',
  },
  {
    title:
      'Sed sagittis suscipit condimentum pellentesque vulputate feugiat libero nec accumsan.',
  },
  {
    title:
      'Sed nec dapibus orci integer nisl turpis, eleifend sit amet aliquam vel, lacinia quis ex.',
  },
  {
    title:
      'Those who are looking to reboot their work life and try a new profession that is fun, rewarding and highly in-demand.',
  },
  {
    title: 'Nunc auctor consequat lorem, in posuere enim hendrerit sed.',
  },
  {
    title:
      'Duis ornare enim ullamcorper congue consectetur suspendisse interdum tristique est sed molestie.',
  },
];

export const Overview = () => {
  const { id } = useParams();
  const { styles } = useStyles();
  const navigate = useNavigate();

  if (!id) {
    navigate(routes.main);
    return;
  }

  const { data: course, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id),
  });

  if (isLoading)
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;
  return (
    <Flex vertical gap={40}>
      <Flex gap={20} vertical className={styles.descriptionWrapper}>
        <div className={styles.title}>Description</div>
        <div className={styles.text}>{course?.description}</div>
      </Flex>

      <Flex vertical gap={20} className={styles.learnWrapper}>
        <div className={styles.title}>What will you learn in this course</div>
        <List
          grid={{
            gutter: 24,
            md: 1,
            lg: 2,
            xl: 2,
            xxl: 2,
          }}
          dataSource={learnData}
          renderItem={(item) => (
            <List.Item>
              <Flex gap={8}>
                <CircleCheck className={styles.checkIcon} />
                <div className={styles.text}>{item.title}</div>
              </Flex>
            </List.Item>
          )}
        />
      </Flex>

      <Flex gap={20} vertical>
        <div className={styles.title}>Who is this course for</div>
        <List
          grid={{
            gutter: 12,
            column: 1,
          }}
          dataSource={forData}
          renderItem={(item) => (
            <List.Item>
              <Flex gap={8}>
                <ArrowRight className={styles.checkIcon} />
                <div className={styles.text}>{item.title}</div>
              </Flex>
            </List.Item>
          )}
        />
      </Flex>

      <Flex gap={20} vertical>
        <div className={styles.title}>Course Requirements</div>
        <div className={styles.requirementsListWrapper}>
          <ul className={styles.requirementsList}>
            {forData.map((item) => (
              <li key={item.title} className={styles.requirementItem}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </Flex>
    </Flex>
  );
};
