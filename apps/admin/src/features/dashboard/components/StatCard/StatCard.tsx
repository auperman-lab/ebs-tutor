import { useStyles } from "./StatCardStyles";
import { Col, Flex } from "antd";
import { StatCardProp } from "./StatCardTypes";
import React from "react";



export const StatCard = ({color, title, quantity, icon}: StatCardProp) =>{
  const { styles } = useStyles(color);

  const styledIcon = React.isValidElement(icon)
    // @ts-ignore
    ? React.cloneElement(icon, { className: styles.icon })
    : icon;

  return (
    <Col span={6} >
      <Flex justify={"space-between"}  align={"center"} className={styles.wrapper}>
        <Flex align={"center"} justify={"center"} className={styles.iconWrapper} >
          {styledIcon}
        </Flex>
        <Flex vertical={true} justify={"space-between"} align={"start"} className={styles.textWrapper}>
          <h2>{quantity}</h2>
          <h4>{title}</h4>
        </Flex>
      </Flex>
    </Col>
  )
}
