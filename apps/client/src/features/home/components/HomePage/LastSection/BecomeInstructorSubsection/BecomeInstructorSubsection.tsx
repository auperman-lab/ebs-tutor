import { Button, Flex, List } from 'antd';
import { ArrowRight, BecomeInstructorImg } from '@client/assets';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { routes } from '@client/const';
import { useTheme } from 'antd-style';

export const BecomeInstructorSubsection = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const palette = useTheme();

  const learnData = [
    {
      title: 'Apply to become instructor',
      backgroundColor: palette.secondary.secondary100,
      color: palette.secondary.secondary500,
    },
    {
      title: 'Build & edit your profile',
      backgroundColor: palette.danger.danger100,
      color: palette.danger.danger500,
    },
    {
      title: 'Create your new course',
      backgroundColor: palette.warning.warning100,
      color: palette.warning.warning500,
    },
    {
      title: 'Start teaching & earning',
      backgroundColor: palette.success.success100,
      color: palette.success.success500,
    },
  ];

  const onClick = () => {
    navigate(routes.becomeInstructor);
  };

  return (
    <Flex
      gap={20}
      justify="space-between"
      align="center"
      className={styles.subsectionWrapper}
    >
      <Flex align="center" className={styles.wrapperLeft}>
        <Flex gap={24} vertical align="start" justify="center">
          <Flex
            gap={12}
            vertical
            align="start"
            justify="center"
            className={styles.infoWrapper}
          >
            <div className={styles.title}>Become an Instructor</div>
            <div className={styles.text}>
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </div>
          </Flex>
          <Button size="large" className={styles.button} onClick={onClick}>
            <Flex gap={8} align="center">
              Start Teaching
              <ArrowRight />
            </Flex>
          </Button>
        </Flex>

        <img
          alt="becomeInstructorImage"
          className={styles.image}
          src={BecomeInstructorImg}
        />
      </Flex>

      <Flex gap={27} vertical className={styles.wrapperRight} align="start">
        <div className={styles.title}>Your teaching & earning steps</div>
        <List
          grid={{
            column: 2,
            gutter: 20,
          }}
          dataSource={learnData}
          renderItem={(item, index) => (
            <List.Item key={item.title}>
              <Flex gap={16} align="center">
                <Flex
                  align="center"
                  justify="center"
                  className={styles.indexCircle}
                  style={{
                    backgroundColor: item.backgroundColor,
                    color: item.color,
                  }}
                >
                  {index}
                </Flex>
                <div className={styles.text}>{item.title}</div>
              </Flex>
            </List.Item>
          )}
        />
      </Flex>
    </Flex>
  );
};
