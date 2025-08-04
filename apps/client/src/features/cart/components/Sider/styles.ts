import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  wrapper: {
    background: token.colorWhite,
    padding: 24,
  },

  total: {
    fontSize: token.fontSizeHeading4,
    margin: 0,
  },

  couponInput: {
    borderColor: token.info.info900,
    marginTop: 4,
    '& .ant-btn': {
      backgroundColor: token.info.info900,
      color: token.colorWhite,
      borderColor: token.info.info900,
      transition: 'all 0.3s ease',

      '&:hover, &:focus': {
        backgroundColor: `${token.colorWhite} !important`,
        color: `${token.info.info900} !important`,
        borderColor: `${token.info.info900} !important`,
      },
    },

    '& .ant-input': {
      '&:hover, &:focus': {
        borderColor: `${token.info.info900} !important`,
      },
    },
  },
}));
