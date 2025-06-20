import { Divider, Flex, Select } from "antd";
// @ts-ignore
import { useStyles } from "./ActivityCardStyles";
import { Cards, ChatText, Star } from "@phosphor-icons/react";
import { getRelativeTime } from "@utils";
import { JSX, useState } from "react";


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
      <Flex justify={"space-between"} align={"center"} className={styles.activityHeader}>
        <div style={{ fontSize: "16px" }}>Recent activity</div>
        <Select
          defaultValue="today"
          variant={"borderless"}
          style={{ maxWidth: 120 }}
          onChange={(value) => {
            setSelectedRange(value);
          }}
          options={[
            { value: "today", label: "Today" },
            { value: "yesterday", label: "Yesterday" },
            { value: "week", label: "This week" },
          ]}
        />
      </Flex>
      <Divider style={{ margin: "0px" }} />
      <Flex vertical={true} justify={"start"} align={"center"} style={{ overflow: "hidden" }}>
        {filterItems().map((item, index) => (
          <ActivityItem key={index} {...item} />
        ))}
      </Flex>
    </Flex>

  );
};


const ActivityItem = ({ name, type, content, date }: ActivityItemProps) => {

  const styles = useStyles().styles;
  const typeTextMap: Record<ActivityItemProps["type"], string> = {
    comment: "commented on your lecture",
    rating: "gave a 5 star rating on your course",
    purchase: "purchased your course",
  };

  const iconMap: Record<ActivityItemProps["type"], JSX.Element> = {
    comment: <ChatText size={20} weight="fill" color="white" />,
    rating: <Star size={20} weight="fill" color="white" />,
    purchase: <Cards size={20} weight="fill" color="white" />,
  };

  return (
    <Flex style={{ padding: "12px 20px" }} gap={"middle"}>
      <Flex vertical={true} justify={"start"} align={"center"}>
        <Flex align={"center"} justify={"center"} className={styles.iconCircle}>
          {iconMap[type]}
        </Flex>
      </Flex>
      <Flex vertical={true} justify={"space-between"} align={"start"} gap={"small"}>
        <p style={{ margin: 0 }}>
          <span style={{ fontWeight: "bold" }}>
            {name}
          </span>{" "}
          <span style={{ color: "#888" }}>
            {typeTextMap[type]}
          </span>{" "}
          “{content}”
        </p>
        <p style={{ margin: 0, color: "#888" }}>{getRelativeTime(date)}</p>
      </Flex>
    </Flex>
  );
};


