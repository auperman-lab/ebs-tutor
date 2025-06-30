import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  wrapper: {
    backgroundColor: token.colorWhite,
    minHeight: 420,
    height: "100%",
    width: "100%",
  }
  ,

  chartContainer: {
    padding: 24,
    height: "100%",
  }
  ,
}))
;
