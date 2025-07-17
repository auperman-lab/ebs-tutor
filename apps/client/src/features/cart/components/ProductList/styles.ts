import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
    padding: 24,
    [responsive.md]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 12,
      padding: 16,
    },
  },

  image: {
    objectFit: 'cover',
    borderRadius: 4,
    width: 160,
    height: 120,
    [responsive.md]: {
      width: '100%',
      height: 'auto',
    },
  },

  removeButton: {
    marginRight: -15,
    marginLeft: 10,

    [responsive.md]: {
      marginRight: 6,
      alignSelf: 'flex-end',
    },
  },

  content: {
    flex: 1,
    [responsive.md]: {
      width: '100%',
    },
  },

  rating: {
    fontSize: 12,
    color: token.colorTextTertiary,
    marginTop: 4,
    display: 'flex',
    alignItems: 'center',
    [responsive.md]: {
      display: 'none',
    },
  },

  rate: {
    fontSize: 12,
  },

  reviewCount: {
    marginLeft: 8,
  },

  title: {
    fontSize: token.fontSizeLG,
    maxWidth: 300,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    lineHeight: '1.4',
    textOverflow: 'ellipsis',
    [responsive.md]: {
      maxWidth: '100%',
      paddingLeft: '10px',
    },
  },

  authors: {
    fontSize: token.fontSize,
    marginTop: 4,
    maxWidth: 300,
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    lineHeight: '1.4',
    textOverflow: 'ellipsis',
    [responsive.md]: {
      maxWidth: '100%',
      paddingLeft: '10px',
    },
  },

  priceContainer: {
    textAlign: 'right',
    minWidth: 100,
    [responsive.md]: {
      textAlign: 'left',
      width: '100%',
      marginTop: 8,
      paddingLeft: '10px',
    },
  },

  price: {
    color: token.colorPrimary,
    fontSize: token.fontSizeXL,
  },

  oldPrice: {
    marginLeft: 8,
    color: token.colorInfo,
    fontSize: token.fontSizeXL,
  },

  columnTitle: {
    padding: '20px !important',
    textWrap: 'nowrap',
    [responsive.md]: {
      display: 'none',
    },
  },
  wrapper: {
    backgroundColor: token.colorWhite,
    border: `solid 1px ${token.info.info100}`,
  },
}));
