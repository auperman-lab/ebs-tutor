import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    padding: token.paddingXL,
  },
  save: {
    border: 'none',
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
    width: 90,
  },

  optionsButtons: {
    marginTop: 76,
  },

  stretch: {
    width: '100%',
    flex: 1,
  },
}));
