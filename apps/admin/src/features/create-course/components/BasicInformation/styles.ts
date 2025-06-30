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
    border: '1px solid #d9d9d9',
    borderLeft: 'none',
    width: 100,
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
}));
