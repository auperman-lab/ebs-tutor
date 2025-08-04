import { createStyles } from 'antd-style';
import { hexToRgba } from '@utils';

export const useStyles = createStyles(({ token }, color: string) => ({
  wrapper: {
    backgroundColor: token.colorWhite,
    height: 108,
    width: '100%',
    padding: 24,
  },

  iconWrapper: {
    maxWidth: 60,
    width: '100%',
    aspectRatio: 1,
    backgroundColor: hexToRgba(color, 0.1),
  },

  icon: {
    width: 32,
    height: '100%',
    color: color,
  },

  textWrapper: {
    height: '100%',
    padding: '5px 0 5px 20px',
    width: '100%',
  },

  text: {
    fontSize: token.fontSize,
    color: token.info.info700,
  },
  header: {
    fontSize: token.fontSizeHeading4,
  },
}));
