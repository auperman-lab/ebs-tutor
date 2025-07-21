import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  cover: {
    objectFit: 'cover',
  },

  title: {
    fontSize: token.fontSizeLG,
  },
  text: {
    fontSize: token.fontSize,
  },
  secondary: {
    fontSize: token.fontSize,
    color: token.colorInfo,
  },
  hobbies: {
    color: token.colorInfo,
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: token.fontSize,
    lineHeight: '1.4',
    height: `calc(1.4em * 2)`,
  },
  divider: {
    margin: 0,
  },
  button: {
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
    fontWeight: token.fontWeightStrong,
  },
}));
