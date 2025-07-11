import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import { MainHeader, MainFooter } from "@clientComponents";
import { useStyles } from "./styles";

const { Content } = Layout;

export const MainLayout = () => {
  const {styles} = useStyles();

  return (
    <Layout className={styles.layout}>
      <MainHeader />
      <Content >
        <Outlet />
      </Content>
      <MainFooter />
    </Layout>
  );
};
