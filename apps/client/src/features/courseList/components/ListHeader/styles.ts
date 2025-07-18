import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  search: {
    minWidth: 500,
  },

  select: {
    width: '100%',
    minWidth: 150,
  },

  sortText: {
    color: token.colorInfo,
    textWrap: 'nowrap',
    textAlign: 'center',
  },
  filterButton: {
    minWidth: '150px',
  },
  filterQuantity: {
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
    padding: '4px 6px',
  },
  dividerNoMargin: {
    margin: 0,
  },
  suggestion: {
    color: token.colorPrimary,
  },
  bold: {
    fontWeight: token.fontWeightStrong,
  },
}));
