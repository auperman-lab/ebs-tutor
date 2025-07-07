import { Avatar, Button, Flex, Input } from "antd";
import { useStyles } from "./styles";
import { Bell, Cart, GraduationCap, Heart, MagnifyingGlass } from "@clientAssets";
import { useNavigate } from "react-router-dom";


export const LowerHeader = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();

  const onLogoClick = () => {
    navigate("/");
  };

  return (

    <div >
      <Flex
        justify="space-between"
        align="center"
        className={styles.mainHeader}
      >
        <Flex
          justify="space-between"
          align="center"
          gap={50}
        >
          <Button
            size="large"
            className={styles.headerLogo}
            onClick={onLogoClick}
          >
            <Flex gap={8}>
              <GraduationCap />
              <Flex justify="center" align="center" className={styles.headerTitle}>E-tutor</Flex>
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

          <Button size="large" type="text" className={styles.button} icon={<Bell />} />
          <Button size="large" type="text" className={styles.button} icon={<Heart />} />
          <Button size="large" type="text" className={styles.button} icon={<Cart />} />

          <Avatar
            className={styles.avatar}
            src="https://pbs.twimg.com/media/F9xhN65WQAATLoU.jpg"
            size={48}
          />
        </Flex>
      </Flex>
    </div>
  );
};
