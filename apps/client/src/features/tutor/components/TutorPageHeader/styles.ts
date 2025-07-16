import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  wrapper: {
    padding: '40px',
    width: '100%',
    backgroundColor: token.primary.primary100,
    border: `solid 1px ${token.info.info100}`,
  },
  image: {
    width: '200px',
    height: '200px',
    aspectRatio: '1',
  },
  infoWrapper: {
    padding: '24px 0',
    minWidth: '400px',
    width: '50%',
  },
  title: {
    fontSize: token.fontSizeHeading3,
    fontWeight: token.fontWeightStrong,
  },
  subtitle: {
    fontSize: token.fontSizeLG,
    color: token.colorInfo,
  },
  text: {
    fontSize: token.fontSize,
    textWrap: 'nowrap',
  },
  secondaryText: {
    fontSize: token.fontSize,
    color: token.colorInfo,
    textWrap: 'nowrap',
  },
  smallButton: {
    aspectRatio: 1,
    width: '100%',
    backgroundColor: token.info.info100,
    color: token.info.info500,
  },
}));
