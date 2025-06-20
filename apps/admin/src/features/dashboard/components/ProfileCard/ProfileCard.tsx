import { Avatar, Button, Flex, Progress } from "antd";
import { useStyles } from "./ProfileCardStyles";
import { useNavigate } from "react-router-dom";
import { routes } from "@const";
import { ArrowDown } from "@phosphor-icons/react";
import { UserOutlined } from '@ant-design/icons';



export const ProfileCard = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();

  return (
      <Flex align={"center"} justify={"space-between"} className={styles.wrapper}>

        <Flex gap={"large"} justify={"start"} align={"center"} className={styles.avatarWrapper}>
          <Avatar size={"large"} icon={<UserOutlined />}/>
          <Flex vertical={true} justify={"center"} align={"start"}>
            <div style={{fontSize: "20px"}}>Name</div>
            <div style={{fontSize: "14px", opacity: "60%"}}>email</div>
          </Flex>
        </Flex>

        <Flex gap={20} justify={"center"} align={"center"} className={styles.progressWrapper}>
          <p className={styles.progressText}>3/4 Steps</p>
          <Progress
            strokeLinecap="butt"
            percent={75}
            size={[500, 15]}
            strokeColor={"#23BD33"}
            trailColor={"#FFFFFF0D"}
            format={(percent) => (
              <span style={{ color: "white", fontWeight: "bold" }}>{percent}% Completed</span>
            )}
          />
        </Flex>

        <Flex gap={20} className={styles.buttonsWrapper}>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              navigate(routes.settings);
            }}
          >
            Edit Biography
          </Button>
          {/*todo: fix the border-bottom*/}
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
