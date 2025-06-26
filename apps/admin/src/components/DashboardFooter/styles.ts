import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  footer: {
    padding: `${token.paddingMD}px 10%`,
  },
}));
