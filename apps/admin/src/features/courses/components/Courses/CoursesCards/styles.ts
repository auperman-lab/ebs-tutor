import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  cover: {
    objectFit: 'cover',
  },

  price: {
    color: token.colorPrimary,
    fontSize: token.fontSizeXL,
    fontWeight: token.fontWeightStrong,
    textAlign: 'center',
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
    height: '28px',
    minHeight: '28px',
  },

  title: {
    height: '24px',
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: token.fontSizeLG,
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  divider: {
    width: 'calc(100% + 32px)',
    marginInline: '-16px',
  },

  text: {
    fontWeight: 500,
  },
  tagContainer: {
    overflowX: 'scroll',
    width: '100%',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },

  width: {
    width: '100%',
  },
}));
