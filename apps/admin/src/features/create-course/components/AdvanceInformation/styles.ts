import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  container: {
    padding: token.paddingXL,
  },

  title: {
    fontSize: token.fontSizeXL,
    fontWeight: 500,
  },

  upload: {
    width: 228,
    height: 160,
    margin: 'auto',
    borderRadius: token.borderRadius,
  },

  buttonContainer: {
    padding: 0,
    border: '0px',
  },

  innerButton: {
    minWidth: 228,
    minHeight: 160,
    maxWidth: 228,
    maxHeight: 160,
    gap: 8,
    fontSize: token.fontSizeLG,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadButton: {
    width: 180,
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
  },
}));
