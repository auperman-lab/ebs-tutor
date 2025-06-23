import { Flex, Progress, Rate } from "antd";

export const RateItem = ({ rating, percent }: RateItemProps) => {
  return (
    <Flex
      gap={"12px"}
      vertical={false}
      align={"center"}
      justify={"space-between"}
      style={{ width: "100%", padding: "0 0 8px 0" }}>

      <Rate defaultValue={rating} style={{ textWrap: "nowrap" }} />
      <p style={{ textWrap: "nowrap" }}>{rating} Star</p>
      <Progress strokeLinecap="butt" strokeColor={"#FD8E1F"} percent={percent} />
    </Flex>
  );
};
