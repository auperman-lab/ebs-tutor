import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  wrapper: {
    paddingTop: 40,
  },
  courseTitle: {
    fontSize: token.fontSizeHeading4,
    fontWeight: token.fontWeightStrong,
  },
}));
