import { SallyRegistration } from "@assets";
import { Flex } from "antd";
import { useStyles } from "./RegistrationImageContainerStyles";

export const RegistrationImageContainer = () => {
  const { styles } = useStyles();

  return (
    <Flex justify="center" align="center" className={styles.salyPhoto}>
      <SallyRegistration />
    </Flex>
  );
};
