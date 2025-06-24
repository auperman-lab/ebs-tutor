import { Layout } from "antd";
import { DashboardFooter, DashboardHeader, DashboardSider } from "@components";
import { Outlet } from "react-router-dom";

export const DashboardLayout = () => {
  const {} = Layout;
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <DashboardSider />
      <Layout>
        <DashboardHeader />
        <Outlet />
        <DashboardFooter />
      </Layout>
    </Layout>
  );
};
