import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }, color: string) => ({
  wrapper: {
    backgroundColor: color,
    height: 100,
    width: '100%',
    padding: 24,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },

    '&:active': {
      transform: 'scale(0.97)',
    },
  },

  iconWrapper: {
    maxWidth: 60,
    width: '100%',
    aspectRatio: 1,
    backgroundColor: token.colorWhite,
  },

  icon: {
    width: 32,
    height: 32,
  },

  textWrapper: {
    height: '100%',
    padding: '5px 0 5px 20px',
    width: '100%',
  },

  text: {
    fontSize: token.fontSize,
    color: token.info.info700,
  },
  header: {
    fontSize: token.fontSizeLG,
  },
}));
