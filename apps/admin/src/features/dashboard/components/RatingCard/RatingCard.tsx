import { Flex } from "antd";
import { useStyles } from "./RatingCardStyles";

export const RatingCard = () => {

  const { styles } = useStyles();
  return (
    <Flex className={styles.wrapper}>
      <div></div>
    </Flex>
  )
};

