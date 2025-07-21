import { Button, Divider, Flex, Skeleton } from 'antd';
import { useStyles } from './styles';
import {
  BarChart,
  Clock,
  Dollar,
  Envelope,
  Facebook,
  Linkedin,
  Monitor,
  Notebook,
  Notepad,
  Stack,
  Trophy,
  Twitter,
  Users,
} from '@client/assets';

export const CourseSidebarSkeleton = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical gap={24} className={styles.sidebarWrapper}>
      <Flex vertical gap={12}>
        <Flex justify="space-between" align="center">
          <Skeleton.Input active />
          <Skeleton.Input active />
        </Flex>
        <Skeleton.Input active size="small" />
      </Flex>

      <Divider className={styles.dividerNoMargin} />
      <Flex vertical gap={16}>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" justify="start">
            <Clock className={styles.iconInfo} />
            Course Duration
          </Flex>
          <Skeleton.Input active size="small" />
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" justify="start">
            <BarChart className={styles.iconInfo} />
            Course Level
          </Flex>
          <Skeleton.Input active size="small" />
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" justify="start">
            <Users className={styles.iconInfo} />
            Students Enrolled
          </Flex>
          <Skeleton.Input active size="small" />
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" justify="start">
            <Notebook className={styles.iconInfo} />
            Language
          </Flex>
          <Skeleton.Input active size="small" />
        </Flex>
      </Flex>
      <Divider className={styles.dividerNoMargin} />
      {/* Action buttons */}
      <Flex vertical gap={12}>
        <Skeleton.Button size="large" active block />
        <Skeleton.Button size="large" active block />
        <Flex gap={12}>
          <Skeleton.Button size="large" active />
          <Skeleton.Button size="large" active />
        </Flex>

        <Flex align="center" justify="center" className={styles.textSecondary}>
          Note: all course have 30-days money-back guarantee
        </Flex>
      </Flex>
      <Divider className={styles.dividerNoMargin} />

      {/* Course includes */}
      <Flex vertical gap={16}>
        <div className={styles.title}>This course includes:</div>
        <Flex gap={8} align="center" justify="start">
          <Clock className={styles.iconPrimary} />
          Lifetime access
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Dollar className={styles.iconPrimary} />
          30-days money-back guarantee
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Notebook className={styles.iconPrimary} />
          Free exercise file & downloadable resources
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Trophy className={styles.iconPrimary} />
          Shareable certificate of completion
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Monitor className={styles.iconPrimary} />
          Access on mobile , tablet and TV
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Notepad className={styles.iconPrimary} />
          English subtitles
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Stack className={styles.iconPrimary} />
          100% online course
        </Flex>
      </Flex>

      <Divider className={styles.dividerNoMargin} />

      {/* Share section */}
      <Flex gap={18} vertical>
        <div className={styles.title}>Share this course:</div>
        <Flex gap={8}>
          <Button size="large" className={styles.smallButton}>
            Copy link
          </Button>
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Envelope />}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Twitter />}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Facebook />}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Linkedin />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
