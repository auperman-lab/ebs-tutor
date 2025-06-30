import { Flex, Progress, Rate } from "antd";
import { useStyles } from "./styles";

type RateItemProps = {
  percent: number;
  rating: number;
}

export const RateItem = ({ rating, percent }: RateItemProps) => {

  const {styles} = useStyles();
  return (
    <Flex
      gap="12px"
      align="center"
      justify="space-between"
      className={styles.rateItemContainer}
    >
      <Rate
        defaultValue={rating} disabled className={styles.nowrapText} />
      <p className={styles.nowrapText}>{rating} Star</p>
      <Progress strokeLinecap="butt" strokeColor="#FD8E1F" percent={percent} />
    </Flex>
  );
};
