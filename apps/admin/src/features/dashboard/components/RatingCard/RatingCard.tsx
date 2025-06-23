import { Divider, Flex, Rate } from "antd";
import { useStyles } from "./RatingCardStyles";
import { useState } from "react";
import { RateItem } from "./RateItem";
import { CardsHeader, LineChart } from "@components";

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


const ratingData = [
  { name: "Aug 01", "rate": 5 },
  { name: "Aug 02", "rate": 4 },
  { name: "Aug 03", "rate": 4 },
  { name: "Aug 04", "rate": 5 },
  { name: "Aug 05", "rate": 4 },
  { name: "Aug 06", "rate": 1 },
  { name: "Aug 07", "rate": 3 },
  { name: "Aug 08", "rate": 2 },
  { name: "Aug 09", "rate": 2 },
  { name: "Aug 10", "rate": 4 },
  { name: "Aug 11", "rate": 1 },
  { name: "Aug 12", "rate": 3 },
  { name: "Aug 13", "rate": 4 },
  { name: "Aug 14", "rate": 5 },
  { name: "Aug 15", "rate": 5 },
  { name: "Aug 16", "rate": 5 },
  { name: "Aug 17", "rate": 5 },
  { name: "Aug 18", "rate": 5 },
  { name: "Aug 19", "rate": 5 },
  { name: "Aug 20", "rate": 5 },
  { name: "Aug 21", "rate": 5 },
  { name: "Aug 22", "rate": 5 },
  { name: "Aug 23", "rate": 5 },
  { name: "Aug 24", "rate": 4 },
  { name: "Aug 25", "rate": 3 },
  { name: "Aug 26", "rate": 4 },
  { name: "Aug 27", "rate": 5 },
  { name: "Aug 28", "rate": 3 },
  { name: "Aug 29", "rate": 3 },
  { name: "Aug 30", "rate": 4 },
  { name: "Aug 31", "rate": 5 },
];


export const RatingCard = () => {
  const { styles } = useStyles();

  const [rating] = useState(4.6);

  return (
    <Flex vertical={true} className={styles.wrapper}>

      <CardsHeader
        title={"Overall Course Ratings"}
        options={[
          { value: "week", label: "This Week" },
          { value: "month", label: "This Month", },
          { value: "year", label: "This Year" }
        ]}
      />

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
        <div className={styles.ratingGraph}>
          <LineChart data={ratingData} primaryY={"rate"} primaryColor={"#FD8E1F"} primaryLabel={"Rating"}
                     showAxis={false} />
        </div>

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

