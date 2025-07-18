import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    width: '100%',
    padding: token.paddingLG,
  },

  description: {
    width: '100%',
  },

  authors: {
    fontWeight: 500,
    fontSize: token.fontSizeLG,
  },

  ratingScore: {
    fontWeight: 500,
    fontSize: token.fontSizeLG,
  },

  avatarGroup: {
    display: 'flex',
    alignItems: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid white',
    marginLeft: -24,
    ':first-child': {
      marginLeft: 0,
    },
  },

  divider: {
    height: '100%',
  },

  price: {
    fontWeight: 500,
    fontSize: token.fontSizeLG,
  },

  video: {
    borderRadius: 8,
    maxHeight: 400,
    objectFit: 'cover',
  },
}));
