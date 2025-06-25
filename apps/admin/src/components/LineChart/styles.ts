import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    backgroundColor: token.colorWhite,
  },
  tooltip: {
    backgroundColor: token.colorBgBase,
    padding: `${token.paddingSM}px ${token.paddingLG}px`,
    borderRadius: token.borderRadius,
    color: token.colorText,
    textAlign: "center",
    fontSize: token.fontSize,
    boxShadow: token.boxShadowSecondary,
    lineHeight: 1.4,
  },
  value: {
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeLG,
  },
  label: {
    fontSize: token.fontSizeSM,
    color: token.colorTextSecondary,
    marginTop: 4,
  },
}));
