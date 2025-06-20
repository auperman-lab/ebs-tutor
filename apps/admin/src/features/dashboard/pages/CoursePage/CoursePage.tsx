import { Layout } from "antd";
import { Flex } from "antd";
import { CoursePath } from "../../components/Course";

export const CoursePage = () => {
  const { Content } = Layout;
  return (
    <Content>
      <Flex
        vertical={true}
        className="main"
        justify="center"
        align="center"
        gap={24}
      >
        <CoursePath />
        aasassssssssssssssssssssssssssssssssss
      </Flex>
    </Content>
  );
};
