import { useStyles } from "./styles";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { routes } from "@client/const";

const items = [
  { key: routes.main, label: 'Home' },
  { key: routes.courses, label: 'Courses' },
  { key: routes.contact, label: 'Contact' },
  { key: routes.about, label: 'About' },
  { key: routes.becomeInstructor, label: 'Become an instructor' },
];

export const UpperHeader = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();

  const onClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Menu
      mode="horizontal"
      items={items}
      className={styles.menu}
      onClick={onClick}
    />
  );
};
