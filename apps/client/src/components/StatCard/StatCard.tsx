import { useStyles } from './styles';
import { Flex } from 'antd';
import { ReactElement, isValidElement } from 'react';

type Prop = {
  subtitle: string;
  title: string;
  icon: string | ReactElement;
  color: string;
  onClick?: () => void;
};

export const StatCard = ({
  color,
  title,
  subtitle,
  icon,
  onClick,
}: Prop) => {
  const { styles } = useStyles(color);

  const renderIcon = () => {
    if (typeof icon === 'string') {
      return <img src={icon} alt={title} className={styles.icon} />;
    }

    if (isValidElement(icon)) {
      return <Flex align="center">{icon}</Flex>;
    }

    return null;
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      onClick={onClick}
      className={styles.wrapper}
    >
      <Flex align="center" justify="center" className={styles.iconWrapper}>
        {renderIcon()}
      </Flex>
      <Flex
        vertical
        justify="space-between"
        align="start"
        className={styles.textWrapper}
      >
        <div className={styles.header}>{subtitle}</div>
        <div className={styles.text}>{title}</div>
      </Flex>
    </Flex>
  );
};
