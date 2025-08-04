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

  title: {
    fontSize: token.fontSizeXL,
    fontWeight: 500,
  },

  stretch: {
    width: '100%',
    flex: 1,
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
}));
