import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ responsive }) => ({
  imageContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ebebff',

    img: {
      width: '100%',
      height: 'auto',
    },

    [responsive.md]: {
      display: 'none',
    },
  },
}));
