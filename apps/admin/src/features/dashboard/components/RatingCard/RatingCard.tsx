import { Divider, Flex, Rate, Select } from "antd";
import { useStyles } from "./RatingCardStyles";
import { useState } from "react";
import { RateItem } from "./RateItem";

const items: RateItemProps[] = [
  {
    percent: 56,
    rating: 5,
  },
  {
    percent: 37,
    rating: 4,
  },
  {
    percent: 8,
    rating: 3,
  },
  {
    percent: 1,
    rating: 2,
  },
  {
    percent: 1,
    rating: 1,
  },

];

export const RatingCard = () => {
  const { styles } = useStyles();

  const [rating] = useState(4.6);

  return (
    <Flex vertical={true} className={styles.wrapper}>

      <Flex
        justify={"space-between"}
        align={"center"}
        style={{ padding: "20px 16px 20px 16px" }}
      >
        <div style={{ fontSize: "16px" }}>Overall Course Rating</div>
        <Select
          defaultValue="week"
          variant={"borderless"}
          style={{ maxWidth: 120 }}
          options={[
            { value: "week", label: "Week" },
            { value: "month", label: "Month" },
            { value: "year", label: "Year" },
          ]}
        />
      </Flex>

      <Divider style={{ margin: "0px" }} />

      <Flex
        justify={"center"}
        align={"center"}
        gap={"24px"}
        style={{ height: "100%", padding: "20px" }}
      >
        <Flex
          vertical={true}
          align={"center"}
          justify={"center"}
          className={styles.ratingScore}
        >
          <h1>{rating}</h1>
          <Rate allowHalf defaultValue={rating} />
          <p>Overall Rating</p>
        </Flex>
        {/*todo: add graph*/}
        <div className={styles.ratingGraph}> qw qw</div>
      </Flex>

      <Divider style={{ margin: "0px" }} />

      <Flex
        vertical={true}
        justify={"space-between"}
        align={"center"}
        style={{ height: "fit-content", padding: "20px" }}
      >
        {items.map((item, index) => (
          <RateItem key={index} {...item} />
        ))}
      </Flex>

    </Flex>
  );
};

