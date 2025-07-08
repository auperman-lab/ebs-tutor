import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  container: {
    padding: token.paddingXL,
    [responsive.sm]: {
      flexDirection: 'column-reverse',
      gap: 24,
    },
  },

  save: {
    border: 'none',
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
    width: 90,
  },
}));
