import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    marginTop: token.marginLG,
    marginBottom: token.marginLG,
  },
  courseInfo: {
    width: '100%',
  },
  anchorWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    // AntD-specific anchor styles
    '.ant-anchor-wrapper': {
      width: '100%',
    },

    '.ant-anchor': {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },

    '.ant-anchor-link': {
      flex: 1,
      textAlign: 'center',
      fontSize: token.fontSizeLG,
      fontWeight: 600,
      padding: `${token.paddingXS}px 0`,
    },

    '.ant-anchor-link-title': {
      width: '100%',
      display: 'inline-block',
    },
  },
}));
