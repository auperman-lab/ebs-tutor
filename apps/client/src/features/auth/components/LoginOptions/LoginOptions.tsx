import { Button, Divider, Flex } from "antd";
import { Google, Facebook, Apple } from "@clientAssets";
import { LoginOptionsProps } from "./types";
import { useStyles } from "./styles";

export const LoginOptions = ({ dividerText }: LoginOptionsProps) => {
  const { styles } = useStyles();
  return (
    <div>
      <Divider>{dividerText}</Divider>
      <Flex justify="space-between" gap={24} className={styles.login_options}>
        <Button type="default" size="large" className={styles.auth_button}>
          <Flex
            justify="center"
            align="center"
            className={styles.logo_container}
          >
            <Google />
          </Flex>
          <Flex justify="center" align="center" className={styles.company}>
            Google
          </Flex>
        </Button>

        <Button type="default" size="large" className={styles.auth_button}>
          <Flex
            justify="center"
            align="center"
            className={styles.logo_container}
          >
            <Facebook color="#4267B2" />
          </Flex>
          <Flex justify="center" align="center" className={styles.company}>
            Facebook
          </Flex>
        </Button>

        <Button type="default" size="large" className={styles.auth_button}>
          <Flex
            justify="center"
            align="center"
            className={styles.logo_container}
          >
            <Apple />
          </Flex>
          <Flex justify="center" align="center" className={styles.company}>
            Apple
          </Flex>
        </Button>
      </Flex>
    </div>
  );
};
