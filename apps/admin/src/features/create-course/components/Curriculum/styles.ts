import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    padding: token.paddingXL,
  },

  stretch: {
    flex: 1,
  },

  save: {
    border: 'none',
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
    width: 90,
  },

  optionsButtons: {
    marginTop: 8,
  },
}));
