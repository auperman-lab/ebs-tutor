import { Layout, Menu } from "antd";
import React from "react";
import { ChartBar, PlusCircle, Stack, CreditCard, ChatCircleDots, Gear } from "@phosphor-icons/react";


const items = [ChartBar,PlusCircle, Stack, CreditCard, ChatCircleDots, Gear].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);
const {Sider} = Layout


export const DashboardSider = () => {
  return (
    <Sider
      width="20%"
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
  );
}
