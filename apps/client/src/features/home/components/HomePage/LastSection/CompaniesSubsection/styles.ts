import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  wrapper: {
    width: '80%',
    gap: '24px',

    [responsive.lg]: {
      flexDirection: 'column',
      gap: '40px',
    },
  },
  title: {
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeHeading3,
    textWrap: 'nowrap',
  },
  text: {
    fontSize: token.fontSize,
    maxWidth: '300px',
    color: token.colorInfo,
  },
  companyCard: {
    backgroundColor: token.colorWhite,
    padding: '0 50px',
    width: '200px',
    height: '100px',
    boxShadow: token.boxShadow,
  },
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 200px)',
    gap: '24px',
    justifyContent: 'center',
    [responsive.md]: {
      gridTemplateColumns: 'repeat(3, 200px)',
    },
    [responsive.sm]: {
      gridTemplateColumns: 'repeat(3, 200px)',
    },
  },
  heightFull: {
    height: '100%',
  },
}));
