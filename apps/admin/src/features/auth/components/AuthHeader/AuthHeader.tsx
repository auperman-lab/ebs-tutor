import { Button, Flex, Image } from "antd";
import "./AuthHeader.scss";
import { logo } from "@assets";

export const AuthHeader = () => {
  return (
    <header className="authHeader">
      <Flex align="center" justify="space-around" className="flexContainer">
        <div>
          <Flex align="center" gap={8} className="logoText">
            <Image width={40} height={40} preview={false} src={logo} />
            E-tutor
          </Flex>
        </div>
        <Flex gap={18} align="center">
          <div className="optionTitle">Don't have account?</div>
          <Button variant="filled" type="primary">
            Create Account
          </Button>
        </Flex>
      </Flex>
    </header>
  );
};
