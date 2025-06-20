import { Flex } from "antd";
import { LoginForm } from "../LoginForm/LoginForm";
import { useStyles } from "./LoginFormContainerStyles";
import { LoginOptions } from "../LoginOptions/LoginOptions";

export const LoginFormContainer = () => {
  const { styles } = useStyles();
  return (
    <Flex align="center" justify="center" className={styles.loginFormContainer}>
      <Flex vertical gap={40} className={styles.loginFormWrapper}>
        <h1 className={styles.heading}>Sign in to your account</h1>
        <LoginForm />
        <LoginOptions dividerText="SIGN IN WITH" />
      </Flex>
    </Flex>
  );
};
