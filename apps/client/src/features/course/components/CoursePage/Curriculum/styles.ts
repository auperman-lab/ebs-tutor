import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  curriculumTitle: {
    fontSize: token.fontSizeHeading3,
    fontWeight: token.fontWeightStrong,
  },

  curriculumStats: {
    fontSize: token.fontSize,
    color: token.colorInfo,
  },

  topicItem: {
    padding: '8px 0',
    fontSize: token.fontSize,
  },
}));
