import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  container: {
    padding: token.paddingXL,
  },

  uploadContainer: {
    gap: 48,
    [responsive.xl]: {
      flexDirection: 'column',
    },
  },
}));
