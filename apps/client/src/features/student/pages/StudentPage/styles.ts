import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    marginTop: 60,
  },
  profileHeader: {
    padding: 40,
    border: `2px solid ${token.primary.primary100}`,
    backgroundColor: token.primary.primary100,
  },

  become: {
    border: 0,
    fontWeight: 600,
    paddingInline: token.paddingLG,
  },

  label: {
    display: 'block',
    width: 300,
    fontWeight: 500,
    textAlign: 'center',
  },
}));
