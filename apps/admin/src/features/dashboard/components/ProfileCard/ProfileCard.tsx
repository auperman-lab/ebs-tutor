import { Avatar, Button, Flex, Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "@phosphor-icons/react";
import { UserOutlined } from '@ant-design/icons';
import { routes } from "@const";
import { useCustomToken } from "@hooks";
import { useStyles } from "./styles";
import { useState } from "react";


const opacityColor = "#FFFFFF0D"

export const ProfileCard = () => {
  const { styles } = useStyles(opacityColor);
  const token = useCustomToken()
  const navigate = useNavigate();

  const [email] = useState("email@email.com");
  const [userName] = useState("John Doe");


  const onProfileNavigation = () => {
    navigate(routes.settings);
  }

  return (
      <Flex align="center" justify="space-between" className={styles.wrapper}>

        <Flex gap="large" justify="start" align="center" className={styles.avatarWrapper}>
          <Avatar size="large" icon={<UserOutlined />}/>
          <Flex vertical justify="center" align="start">
            <div className={styles.headerText}>{userName}</div>
            <div className={styles.secondaryText}>{email}</div>
          </Flex>
        </Flex>

        <Flex gap={20} justify="center" align="center" className={styles.progressWrapper}>
          <p className={styles.secondaryText}>3/4 Steps</p>
          <Progress
            strokeLinecap="butt"
            percent={75}
            size={[500, 15]}
            strokeColor={token.colorSuccess}
            trailColor={opacityColor}
            format={(percent) => (
              <span className={styles.percentText}>{percent}% Completed</span>
            )}
          />
        </Flex>

        <Flex gap={20} >
          <Button
            type="primary"
            size="large"
            onClick={onProfileNavigation}
          >
            Edit Biography
          </Button>
          <Button
            size="large"
            type="primary"
            className={styles.downButton}
          >
            <ArrowDown  size={24}/>
          </Button>
        </Flex>

      </Flex>
  );
};
