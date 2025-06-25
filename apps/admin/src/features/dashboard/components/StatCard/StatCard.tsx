import { useStyles } from "./styles";
import { Col, Flex } from "antd";
import React, { ReactElement } from "react";

type StatCardProp = {
  quantity: number;
  title: string;
  icon: ReactElement;
  color: string;
}

export const StatCard = ({color, title, quantity, icon}: StatCardProp) =>{
  const { styles } = useStyles(color);

  const styledIcon = React.isValidElement(icon)
    ? React.cloneElement(icon, { className: styles.icon })
    : icon;

  return (
    <Col span={6} >
      <Flex justify="space-between"  align="center" className={styles.wrapper}>
        <Flex align="center" justify="center" className={styles.iconWrapper} >
          {styledIcon}
        </Flex>
        <Flex vertical justify="space-between" align="start" className={styles.textWrapper}>
          <div className={styles.header}>{quantity}</div>
          <div className={styles.text}>{title}</div>
        </Flex>
      </Flex>
    </Col>
  )
}
