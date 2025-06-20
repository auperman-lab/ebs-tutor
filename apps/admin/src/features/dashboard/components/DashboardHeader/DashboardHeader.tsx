import { Layout } from "antd";
import { useStyles } from "./DashboardHeaderStyles";

export const DashboardHeader = () => {
  const { Header } = Layout;
  const { styles } = useStyles();

  return (
    <Header className={styles.header}>
      <p>header</p>
    </Header>
  );
};
