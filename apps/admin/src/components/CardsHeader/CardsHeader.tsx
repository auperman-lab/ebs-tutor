import { Divider, Flex, Select } from "antd";
import { CardHeaderProps } from "./CardsHeaderTypes";

//this is used only for vertical direction of flex
export const CardsHeader = ({title, options, legend, onChange}: CardHeaderProps) => {


  console.log(legend);
  return (
    <Flex vertical={true} justify="space-between" >
      <Flex
        justify={"space-between"}
        align={"center"}
        style={{ padding: "16px 20px" }}
      >
        <div style={{ fontSize: "16px" }}>{title}</div>
        <Flex gap={"20px"} >

          {legend && (
            legend.map((item, index) => (
              <Flex key={index} gap={"6px"} justify={"center"} align={"center"}>
                <div style={{backgroundColor: item.color, borderRadius: "50%", width: 10, height: 10}}/>
                <p style={{ fontSize: 12 }}>{item.name}</p>
              </Flex>
            ))
          )}

          <Select
            defaultValue={options[0].value}
            variant={"borderless"}
            style={{ maxWidth: 120 }}
            options={options}
            onChange={onChange}
          />
        </Flex>
      </Flex>
      <Divider style={{ margin: "0px" }} />
    </Flex>
)
};
