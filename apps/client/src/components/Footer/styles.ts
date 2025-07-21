import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  footer: {
    backgroundColor: token.info.info900,
    color: token.colorInfo,
  },
  customButton: {
    backgroundColor: '#FFFFFF0D',
    border: 0,
    color: token.colorWhite,
  },
  container: {
    width: '80%',
    marginInline: 'auto',
    marginBlock: 80,
  },

  borderBottom: {
    borderBottom: `1px solid ${token.info.info800}`,
  },

  buttonsSegment: {
    maxWidth: 300,
  },

  column: {
    minWidth: 200,
  },

  logo: {
    fontSize: 36,
    color: token.colorWhite,
  },

  headings: {
    color: token.colorWhite,
    fontWeight: token.fontWeightStrong,
  },

  row: {
    width: '100%',
  },

  author: {
    color: token.colorWhite,
  },

  policy: {
    width: '80%',
    marginInline: 'auto',
    paddingBlock: 24,
  },

  now: {
    fontSize: 10,
    color: token.info.info300,
  },

  link: {
    width: 120,
    paddingBottom: 3,
    borderBottom: `2px solid transparent`,
    '&:hover': {
      color: token.common.black,
      borderBottom: `2px solid ${token.primary.primary500}`,
      boxSizing: 'content-box',
    },
  },

  startLearning: {
    fontSize: 40,
    fontWeight: token.fontWeightStrong,
    width: 530,
    color: token.colorWhite,
  },
}));
