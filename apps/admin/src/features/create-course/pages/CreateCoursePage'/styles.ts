import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  tabs: {
    backgroundColor: token.colorBgBase,
    marginTop: 40,
  },

  container: {
    padding: token.paddingXL,
  },

  label: {
    width: 300,
    height: 64,
    paddingLeft: token.paddingLG,
    fontWeight: 500,
  },
}));