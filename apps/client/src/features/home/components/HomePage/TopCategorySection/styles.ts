import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  wrapper: {
    backgroundColor: token.colorWhite,
    width: '100vw',
    height: '50vh',
    gap: '40px',

    [responsive.xl]: {
      gap: '20px',
    },
    [responsive.xxl]: {
      gap: '20px',
    },
  },
  categoryWrapper: {
    maxWidth: '60%',
    [responsive.lg]: {
      maxWidth: '80%',
    },
  },
  title: {
    fontSize: token.fontSizeHeading3,
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

  button: {
    color: token.colorPrimary,
    padding: '4px 0 ',

    [responsive.lg]: {
      maxWidth: '100%',
      margin: '10px',
    },
  },
}));
