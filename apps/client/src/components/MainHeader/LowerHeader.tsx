import { Avatar, Button, Flex, Input } from 'antd';
import { useStyles } from './styles';
import {
  Bell,
  Cart,
  GraduationCap,
  Heart,
  MagnifyingGlass,
} from '@clientAssets';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@clientHooks';
import { routes } from '@clientConst';

export const LowerHeader = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const { user } = useAuth();

  const onLogoClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Flex
        justify="space-between"
        align="center"
        className={styles.mainHeader}
      >
        <Flex justify="space-between" align="center" gap={50}>
          <Button
            size="large"
            className={styles.headerLogo}
            onClick={onLogoClick}
          >
            <Flex gap={8}>
              <GraduationCap />
              <Flex
                justify="center"
                align="center"
                className={styles.headerTitle}
              >
                E-tutor
              </Flex>
            </Flex>
          </Button>
          <Input
            addonBefore={<MagnifyingGlass />}
            size="large"
            placeholder="Search"
            className={styles.search}
          />
        </Flex>
        <Flex gap={8} align="center">
          <Button
            size="large"
            type="text"
            className={styles.button}
            icon={<Bell />}
          />
          <Button
            size="large"
            type="text"
            className={styles.button}
            icon={<Heart />}
          />
          <Button
            size="large"
            type="text"
            className={styles.button}
            icon={<Cart />}
          />

          {user ? (
            <Avatar
              onClick={() => navigate(routes.profile)}
              className={styles.avatar}
              src={user?.avatar}
              size={48}
            />
          ) : (
            <Flex gap={12}>
              <Button
                type="default"
                size="large"
                className={styles.createAccount}
              >
                <Link to={routes.register}>Create Account</Link>
              </Button>
              <Button type="primary" size="large" className={styles.signIn}>
                <Link to={routes.login}> Sign In</Link>
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    </div>
  );
};
