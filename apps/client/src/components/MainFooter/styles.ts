import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  footer: {
    backgroundColor: '#1D2026',
  },
  container: {
    width: '80%',
    marginInline: 'auto',
    color: token.colorWhite,
    marginBlock: 80,
  },
}));
