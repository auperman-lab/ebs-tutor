import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    padding: 40,
    backgroundColor: token.colorWhite,
  },
  heading: {
    fontSize: token.fontSizeHeading3,
    fontWeight: token.fontWeightStrong,
    color: token.colorTextHeading,
    lineHeight: token.lineHeightHeading1,
  },
}));
