import { Flex } from "antd";
import { useStyles } from "./CoursePathStyles";
import { Typography } from "antd";

const { Text } = Typography;

export const CoursePath = () => {
  const { styles } = useStyles();
  return (
    <Flex vertical={true} className={styles.mainPart}>
      <Text type="secondary">
        Course / My Course / Development / Web Development /{" "}
        <Text>2021 Complete Python Bootcamp From Zero to Hero in Python</Text>
      </Text>
    </Flex>
  );
};
