import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  container: {
    padding: token.paddingXL,
  },

  formContainer: {
    gap: 64,
    [responsive.xl]: {
      flexDirection: 'column',
    },
    [responsive.xs]: {
      gap: 24,
    },
  },

  selectDuration: {
    backgroundColor: token.colorBgBase,
    borderLeft: 'none',
    width: 100,
    marginTop: 30,
  },

  inputNumber: {
    borderRight: 'none',
    width: '100%',
  },

  category: {
    gap: 64,
    [responsive.xl]: {
      flexDirection: 'column',
    },
    [responsive.xs]: {
      gap: 24,
    },
  },

  options: {
    gap: 64,
    [responsive.xl]: {
      flexDirection: 'column',
    },
    [responsive.xs]: {
      gap: 24,
    },
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
    marginTop: 32,
  },
}));
