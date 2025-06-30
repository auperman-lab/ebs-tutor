import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    padding: token.paddingXL,
  },
  selectDuration: {
    backgroundColor: token.colorBgBase,
    border: '1px solid #d9d9d9',
    borderLeft: 'none',
    width: 100,
  },

  inputNumber: {
    borderRight: 'none',
  },

  stretch: {
    width: '100%',
    flex: 1,
  },
}));
