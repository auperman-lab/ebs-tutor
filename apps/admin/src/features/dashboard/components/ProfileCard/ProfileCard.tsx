import { Avatar, Button, Flex, Progress } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "@phosphor-icons/react";
import { routes } from "@const";
import { useStyles } from "./styles";
import { useTheme } from "antd-style";
import { useAuth } from "@hooks";



export const ProfileCard = () => {
  const { styles } = useStyles();
  const palette = useTheme();
  const navigate = useNavigate();
  const authContext = useAuth();


  const email = authContext.user?.email;
  const userName = authContext.user?.fullName;
  const avatar = authContext.user?.avatar;


  const onProfileNavigation = () => {
    navigate(routes.settings);
  }

  return (
      <Flex align="center" justify="space-between" className={styles.wrapper}>

        <Flex gap="large" justify="start" align="center" className={styles.avatarWrapper}>
          <Avatar size="large" src={avatar}/>
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
            strokeColor={palette.colorSuccess}
            trailColor={"#FFFFFF1F"}
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
