import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    padding: token.paddingXL,
  },

  save: {
    border: 'none',
    backgroundColor: '#FFEEE8',
    color: token.colorPrimary,
    width: 90,
  },
}));
