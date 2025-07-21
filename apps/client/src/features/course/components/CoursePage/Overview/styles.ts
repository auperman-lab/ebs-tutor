import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  title: {
    fontSize: token.fontSizeHeading3,
    fontWeight: token.fontWeightStrong,
  },
  text: {
    fontSize: token.fontSize,
    color: token.colorInfo,
  },
  learnWrapper: {
    padding: '40px',
    backgroundColor: token.success.success100,
  },
  descriptionWrapper: {},
  checkIcon: {
    minWidth: '24px',
    minHeight: '24px',
  },
  requirementsListWrapper: {
    marginLeft: '20px',
  },
  requirementsList: {
    listStyleType: 'disc',
  },

  requirementItem: {
    marginBottom: 8,
    fontSize: token.fontSize,
    lineHeight: 1.6,
  },
}));
