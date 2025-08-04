import { useStyles } from './styles';
import { Flex } from 'antd';
import { getRelativeTime } from '@utils';
import { NotificationItemProps, typeTextMap } from './types';
import { Star, ChatCircle, Cards } from '@assets';

const iconMap: Record<NotificationItemProps['type'], React.ReactElement> = {
  comment: <ChatCircle color="white" />,
  rating: <Star color="white" />,
  purchase: <Cards color="white" />,
};

export const NotificationItem = ({
  name,
  type,
  content,
  date,
}: NotificationItemProps) => {
  const { styles } = useStyles();

  return (
    <Flex className={styles.notificationItemWrapper} gap="16px">
      <Flex vertical justify="start" align="center">
        <Flex align="center" justify="center" className={styles.iconCircle}>
          {iconMap[type]}
        </Flex>
      </Flex>
      <Flex vertical justify="space-between" align="start" gap="8px">
        <p className={styles.textParagraph}>
          <span className={styles.nameText}>{name}</span>{' '}
          <span className={styles.secondaryText}>{typeTextMap[type]}</span>{' '}
          &quot;{content}&quot;
        </p>
        <p className={styles.secondaryText}>{getRelativeTime(date)}</p>
      </Flex>
    </Flex>
  );
};
