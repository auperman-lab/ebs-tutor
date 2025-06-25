import { Divider, Flex, Select } from "antd";
import { CardHeaderProps } from "./types";
import { useStyles } from "./styles";

//this is used only for vertical direction of flex
export const CardsHeader = ({ title, options, defaultOption, legend, onChange, width }: CardHeaderProps) => {

  const resolvedMaxWidth = width || 120;
  const { styles } = useStyles({ width: resolvedMaxWidth });

  return (
    <Flex vertical justify="space-between">
      <Flex
        justify="space-between"
        align="center"
        className={styles.wrapper}
      >
        <div className={styles.title}>{title}</div>
        <Flex gap="20px">
          {legend && (
            legend.map((item, index) => (
              <Flex key={index + item.name + item.color} gap="6px" justify="center" align="center">
                <div
                  className={styles.colorDot}
                  style={{ backgroundColor: item.color }}
                />
                <p className={styles.text}>{item.name}</p>
              </Flex>
            ))
          )}

          <Select
            defaultValue={defaultOption || options[0].value}
            variant="borderless"
            options={options}
            onChange={onChange}
            className={styles.selectWidth}
          />
        </Flex>
      </Flex>
      <Divider className={styles.noMarginDivider} />
    </Flex>
  );
};
