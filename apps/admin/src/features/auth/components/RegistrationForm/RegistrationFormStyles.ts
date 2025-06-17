import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  registerForm: {
    width: '100%',
    minWidth: 400,
    height: '100%',
  },
  fullname: {
    [responsive.md]: {
      flexDirection: 'column',
      gap: '0px !important',
    },
  },
}));
