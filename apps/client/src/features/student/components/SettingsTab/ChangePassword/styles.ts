import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  mainBlock: {
    backgroundColor: token.colorWhite,
    width: '100%',
    marginBottom: token.marginLG,
  },
  heading: {
    fontSize: token.fontSizeHeading3,
    fontWeight: token.fontWeightStrong,
    color: token.colorTextHeading,
    lineHeight: token.lineHeightHeading1,
  },

  button: {
    marginTop: token.marginXL,
  },
}));
