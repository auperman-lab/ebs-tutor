import { useStyles } from "./ActivityCardStyles";
import { JSX } from "react";
import { Cards, ChatText, Star } from "@phosphor-icons/react";
import { Flex } from "antd";
import { getRelativeTime } from "@utils";

export const ActivityItem = ({ name, type, content, date }: ActivityItemProps) => {

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
