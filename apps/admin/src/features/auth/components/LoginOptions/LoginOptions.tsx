import { Button, Divider, Flex } from 'antd';
import { google_logo, facebook_logo, apple_logo } from '@assets';
import { LoginOptionsProps } from './LoginOptionsTypes';
import { useStyles } from './LoginOptionStyles';

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
            <img src={google_logo} alt="Google logo" className={styles.logo} />
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
            <img
              src={facebook_logo}
              alt="Facebook logo"
              className={styles.logo}
            />
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
            <img src={apple_logo} alt="Apple logo" className={styles.logo} />
          </Flex>
          <Flex justify="center" align="center" className={styles.company}>
            Apple
          </Flex>
        </Button>
      </Flex>
    </div>
  );
};
