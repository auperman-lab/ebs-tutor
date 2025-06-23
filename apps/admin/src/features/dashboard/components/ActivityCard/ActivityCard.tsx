import { Flex } from "antd";
// @ts-ignore
import { useStyles } from "./ActivityCardStyles";

import { useState } from "react";
import { ActivityItem } from "./ActivityItem";
import { CardsHeader } from "@components";


const items: ActivityItemProps[] = [
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

  const [selectedRange, setSelectedRange] = useState("today");


  const filterItems = () => {
    const now = new Date();
    return items.filter(({ date }) => {
      const diffMs = now.getTime() - date.getTime();
      const diffMins = diffMs / (1000 * 60);

      if (selectedRange === "today") return diffMins < 24 * 60;
      if (selectedRange === "yesterday") return diffMins >= 24 * 60 && diffMins < 7 * 24 * 60;
      if (selectedRange === "week") return diffMins < 7 * 24 * 60;

      return true;
    });
  };

  const { styles } = useStyles();
  return (
    <Flex vertical={true} className={styles.wrapper}>

      <CardsHeader
        title={"Recent activity"}
        options={[
          {value: "today", label: "Today"},
          {value: "yesterday", label: "Yesterday"},
          {value: "week", label: "This Week"}
        ]}
        onChange={(value: string) => {
          setSelectedRange(value);
        }}
      />

      <Flex vertical={true} justify={"start"} align={"center"} style={{ overflow: "hidden" }}>
        {filterItems().map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </Flex>
    </Flex>

  );
};


