import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  sidebarWrapper: {
    padding: 24,
    backgroundColor: token.colorWhite,
    border: '1px solid #E9EAF0',
    marginTop: token.marginLG,
    marginBottom: token.marginLG,
  },
  price: {
    fontSize: token.fontSizeHeading4,
    textAlign: 'center',
  },
  priceOld: {
    fontSize: token.fontSizeLG,
    color: token.colorInfo,
    textDecoration: 'line-through',
  },
  discount: {
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
    padding: '12px 8px',
  },
  timer: {
    color: token.colorError,
  },
  dividerNoMargin: {
    margin: 0,
  },
  iconInfo: {
    color: token.colorInfo,
  },
  textSecondary: {
    fontSize: token.fontSize,
    color: token.colorInfo,
  },
  iconPrimary: {
    color: token.colorPrimary,
  },
  buyButton: {
    backgroundColor: token.primary.primary200,
    color: token.colorPrimary,
  },
  mediumButton: {
    width: '50%',
  },
  smallButton: {
    aspectRatio: 1,
    width: '100%',
  },
  title: {
    fontSize: token.fontSizeLG,
  },
}));
