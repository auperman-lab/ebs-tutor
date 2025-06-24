import { theme } from "antd";
import { FullTokenCustom } from "../styles/token";

type AntTokenWithCustom = ReturnType<typeof theme.useToken>["token"] & FullTokenCustom;


export const useCustomToken = () => {
  const { token } = theme.useToken();
  return token as AntTokenWithCustom;
};
