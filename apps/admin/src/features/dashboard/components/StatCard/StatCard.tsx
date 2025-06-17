import { useStyles } from "./StatCardStyles";
import { Col, Flex } from "antd";
import { PlusCircle} from "@phosphor-icons/react";



export const StatCard = () =>{
  const { styles } = useStyles();

  //todo: props
  return (
    <Col span={6} >
      <Flex justify={"space-between"}  align={"center"} className={styles.wrapper}>
        <Flex align={"center"} justify={"center"} className={styles.iconWrapper} >
          <PlusCircle className={styles.icon}/>
        </Flex>
        <Flex vertical={true} justify={"space-between"} align={"start"} className={styles.textWrapper}>
          <h2>957</h2>
          <h4>Enrolled Courses</h4>
        </Flex>
      </Flex>
    </Col>
  )
}
