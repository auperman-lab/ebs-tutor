import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  wrapper: {
    background: token.colorWhite,
    width: '80%',
    padding: '80px',
    border: `solid 1px ${token.info.info100}`,
  },
  titleWrapper: {
    width: '100%',
    [responsive.md]: {
      flexDirection: 'column',
      gap: '20px',
    },
  },
  title: {
    fontSize: token.fontSizeHeading2,
    fontWeight: token.fontWeightStrong,
  },
  secondaryText: {
    fontSize: token.fontSize,
    color: token.colorInfo,
    maxWidth: '400px',
  },
  text: {
    fontSize: token.fontSize,
  },
  fullWidth: {
    width: '100%',
  },

  cardWrapper: {
    height: 'fit-content',
    width: '100%',
    background: token.colorWhite,
    border: `solid 1px ${token.info.info100}`,
  },
  cardImage: {
    width: '200px',
    aspectRatio: 1,
  },
  cardEmptyImage: {
    height: '200px',
    width: '200px',
    minWidth: '200px',
    border: `solid 1px ${token.info.info100}`,
  },
  infoWrapper: {
    width: '100%',
    padding: '16px',
  },
  cardTitle: {
    fontSize: token.fontSizeLG,
  },
  tagContainer: {
    overflowX: 'scroll',
    maxWidth: '200px',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
    [responsive.xl]: {
      maxWidth: '100px',
    },
    [responsive.lg]: {
      maxWidth: '200px',
    },
    [responsive.sm]: {
      maxWidth: '100px',
    },
  },
  tag: {
    width: 'fit-content',
    backgroundColor: token.secondary.secondary100,
    color: token.secondary.secondary700,
    fontSize: token.fontSizeSM,
    marginBottom: 8,
    border: 0,
  },
  emptyTag: {
    height: '30px',
    minHeight: '30px',
  },
  price: {
    fontSize: token.fontSizeXL,
    textAlign: 'center',
  },
  priceOld: {
    fontSize: token.fontSize,
    color: token.colorInfo,
    textDecoration: 'line-through',
  },
  avatar: {
    width: 35,
    height: 35,
  },
  dividerNoMargin: {
    margin: 0,
  },
  statsWrapper: {
    padding: '0 24px',
  },
  pricetagWrapper: {
    width: '100%',
    [responsive.xl]: {
      flexDirection: 'column',
    },
    [responsive.lg]: {
      flexDirection: 'row',
    },
    [responsive.sm]: {
      flexDirection: 'column',
    },
  },
}));
