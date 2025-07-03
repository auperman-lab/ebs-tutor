import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ responsive }) => ({
  salyPhoto: {
    width: '100%',
    backgroundColor: '#ebebff',
    img: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },

    [responsive.md]: {
      display: 'none',
    },
  },
}));
