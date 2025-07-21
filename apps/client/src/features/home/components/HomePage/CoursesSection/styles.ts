import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  wrapper: {
    background: `linear-gradient(to bottom, ${token.common.gray} 0%, ${token.common.gray} 50%, ${token.common.white} 50%, ${token.common.white} 100%)`,
    width: '100vw',
    height: '200vh',
  },
  title: {
    fontSize: token.fontSizeHeading2,
    fontWeight: token.fontWeightStrong,

    [responsive.sm]: {
      fontSize: token.fontSizeHeading4,
    },
  },

  text: {
    fontSize: token.fontSize,

    [responsive.sm]: {
      fontSize: token.fontSizeSM,
    },
  },

  coursesWrapper: {
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
