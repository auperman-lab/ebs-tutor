import { useStyles } from "./styles";
import { LowerHeader } from "./LowerHeader";
import { UpperHeader } from "./UpperHeader";
import { Flex } from "antd";

export const MainHeader = () => {
  const {styles} = useStyles();

  return (
    <div className={styles.header}>
      <Flex vertical className={styles.headerWrapper}>
        <UpperHeader />
        <LowerHeader />
      </Flex>
    </div>

  )
}
