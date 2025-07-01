import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  container: {
    padding: token.paddingXL,
  },

  title: {
    fontSize: token.fontSizeXL,
    fontWeight: 500,
  },

  editor: {
    height: 200,
    border: 'none',
  },
}));
