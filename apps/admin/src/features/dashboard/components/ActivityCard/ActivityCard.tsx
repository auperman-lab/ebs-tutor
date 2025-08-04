import { Flex } from 'antd';
import { useStyles } from './styles';
import dayjs from 'dayjs';
import { useState } from 'react';
import { NotificationItem } from './NotificationItem';
import { CardsHeader } from '@components';
import { NotificationItemProps, ActivityPeriod, PeriodLabels } from './types';

const items: NotificationItemProps[] = [
  {
    name: 'Kevin',
    type: 'purchase',
    content: '2021 UI/UX Design with Figma',
    date: dayjs().toDate(),
  },
  {
    name: 'Alice',
    type: 'comment',
    content: 'Typography Basics in Web Design',
    date: dayjs().subtract(5, 'minute').toDate(),
  },
  {
    name: 'John',
    type: 'rating',
    content: 'Advanced CSS Animations Course',
    date: dayjs().subtract(2, 'hour').toDate(),
  },
  {
    name: 'Emily',
    type: 'purchase',
    content: 'React Hooks in Depth',
    date: dayjs().subtract(26, 'hour').toDate(),
  },
];

const options = Object.entries(PeriodLabels).map(([value, label]) => ({
  value,
  label,
}));

export const ActivityCard = () => {
  const { styles } = useStyles();

  const [selectedRange, setSelectedRange] = useState<ActivityPeriod>(
    ActivityPeriod.Today
  );

  const setFilterNotifications = () => {
    const now = dayjs();

    return items.filter(({ date }) => {
      const itemDate = dayjs(date);

      if (selectedRange === ActivityPeriod.Today)
        return itemDate.isAfter(now.startOf('day'));
      if (selectedRange === ActivityPeriod.Yesterday) {
        return (
          itemDate.isAfter(now.subtract(1, 'day').startOf('day')) &&
          itemDate.isBefore(now.startOf('day'))
        );
      }
      if (selectedRange === ActivityPeriod.Week)
        return itemDate.isAfter(now.subtract(7, 'day').startOf('day'));

      return true;
    });
  };

  const onRangeChange = (value: string) => {
    setSelectedRange(value as ActivityPeriod);
  };

  return (
    <Flex vertical className={styles.wrapper}>
      <CardsHeader
        title="Recent activity"
        options={options}
        onChange={onRangeChange}
      />

      <Flex
        vertical
        justify="start"
        align="center"
        className={styles.notificationContainer}
      >
        {setFilterNotifications().map((item, index) => (
          <NotificationItem key={index} {...item} />
        ))}
      </Flex>
    </Flex>
  );
};
