import { Divider, Flex, Select } from "antd";
import { CardHeaderProps } from "./CardsHeaderTypes";

//this is used only for vertical direction of flex
export const CardsHeader = ({title, options, onChange}: CardHeaderProps) => {
  return (
    <Flex vertical={true} justify="space-between" >
      <Flex
        justify={"space-between"}
        align={"center"}
        style={{ padding: "16px 20px" }}
      >
        <div style={{ fontSize: "16px" }}>{title}</div>
        <Select
          defaultValue={options[0].value}
          variant={"borderless"}
          style={{ maxWidth: 120 }}
          options={options}
          onChange={onChange}
        />
      </Flex>
      <Divider style={{ margin: "0px" }} />
    </Flex>
)
};
