import { createStyles } from "antd-style";
import { hexToRgba } from "@utils"


export const useStyles = createStyles(({ token, css, responsive }, color: string) => ({
  wrapper: css`
    background-color: white;
    height: 108px;
    width: 100%;
    padding: 24px;

    ${responsive.lg} {
      padding: 18px;
    }
  `,

  iconWrapper: css`
    max-width: 60px;
    width: 100%;
    aspect-ratio: 1;
    background-color: ${hexToRgba(color, 0.1)};

  `,
  icon: css`
    width: 32px;
    height: 100%;
    color: ${color};
    //color: black;
  `,
  textWrapper: css`
    height: 100%;
    padding: 5px 0;
    padding-left: 20px;
    width: 100%;
  `,

}));
