import { useStyles } from './styles';
import { Flex } from 'antd';

import React, { ReactElement, SVGProps } from 'react';

type StatCardProp = {
  quantity: number | string;
  title: string;
  icon: ReactElement<SVGProps<SVGSVGElement>>;
  color: string;
};

export const StatCard = ({ color, title, quantity, icon }: StatCardProp) => {
  const { styles } = useStyles(color);

  const styledIcon = React.isValidElement(icon)
    ? React.cloneElement(icon, { className: styles.icon })
    : icon;

  return (
    <Flex justify="space-between" align="center" className={styles.wrapper}>
      <Flex align="center" justify="center" className={styles.iconWrapper}>
        {styledIcon}
      </Flex>
      <Flex
        vertical
        justify="space-between"
        align="start"
        className={styles.textWrapper}
      >
        <div className={styles.header}>{quantity}</div>
        <div className={styles.text}>{title}</div>
      </Flex>
    </Flex>
  );
};
