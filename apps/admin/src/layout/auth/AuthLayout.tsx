import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { AuthHeader } from "../../features/auth/components";
import { useStyles } from "./AuthLayoutStyles";

export const AuthLayout = () => {
  const { Content } = Layout;
  const { styles } = useStyles();

  return (
    <Layout className={styles.authLayout}>
      <AuthHeader />
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};
