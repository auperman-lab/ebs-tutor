import { Flex } from "antd";
import { useStyles } from "./styles";
import dayjs from "dayjs";

import { useState } from "react";
import { NotificationItem } from "./NotificationItem";
import { CardsHeader } from "@components";
import { NotificationItemProps, ActivityPeriod, PeriodLabels } from "./types";


const items: NotificationItemProps[] = [
  {
    name: "Kevin",
    type: "purchase",
    content: "2021 UI/UX Design with Figma",
    date: new Date(),
  },
  {
    name: "Alice",
    type: "comment",
    content: "Typography Basics in Web Design",
    date: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
  },
  {
    name: "John",
    type: "rating",
    content: "Advanced CSS Animations Course",
    date: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    name: "Emily",
    type: "purchase",
    content: "React Hooks in Depth",
    date: new Date(Date.now() - 26 * 60 * 60 * 1000), // 26 hours ago
  },
];

export const ActivityCard = () => {
  const { styles } = useStyles();

  const [selectedRange, setSelectedRange] = useState<ActivityPeriod>(ActivityPeriod.Today);

  const setFilterNotifications = () => {
    const now = dayjs();

    return items.filter(({ date }) => {
      const itemDate = dayjs(date);

      if (selectedRange === ActivityPeriod.Today) return itemDate.isAfter(now.startOf("day"));
      if (selectedRange === ActivityPeriod.Yesterday) {
        return (
          itemDate.isAfter(now.subtract(1, "day").startOf("day")) &&
          itemDate.isBefore(now.startOf("day"))
        );
      }
      if (selectedRange === ActivityPeriod.Week) return itemDate.isAfter(now.subtract(7, "day").startOf("day"));

      return true;
    });
  };
  const handleRangeChange = (value: string) => {
    setSelectedRange(value as ActivityPeriod);
  };

  return (
    <Flex vertical className={styles.wrapper}>

      <CardsHeader
        title="Recent activity"
        options={Object.entries(PeriodLabels).map(([value, label]) => ({
          value,
          label,
        }))}
        onChange={handleRangeChange}
      />

      <Flex vertical justify="start" align="center" className={styles.notificationContainer}>
        {setFilterNotifications().map((item, index) => (
          <NotificationItem key={index} {...item} />
        ))}
      </Flex>
    </Flex>

  );
};


