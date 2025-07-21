import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    width: '100%',
    background: token.colorWhite,
    padding: token.paddingLG,
  },
  image: {
    width: '100%',
    height: 400,
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%)',
    flexShrink: 0,
  },
  description: {
    flex: 1,
  },
}));
