import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  cover: {
    objectFit: 'cover',
  },

  price: {
    width: '50%',
    color: token.colorPrimary,
    fontSize: token.fontSizeXL,
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
    height: '30px',
    minHeight: '30px',
  },

  title: {
    overflowY: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: token.fontSizeLG,
    lineHeight: '1.4',
    height: `calc(1.4em * 2)`,
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
}));
