import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  title: {
    fontSize: token.fontSizeXL,
    fontWeight: 500,
  },

  previewContainer: {
    [responsive.md]: {
      flexDirection: 'column',
    },
  },
  upload: {
    width: 228,
    height: 160,
    borderRadius: token.borderRadius,
    backgroundColor: token.colorBgContainer,
    border: `1px dashed ${token.colorBorder}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mediaPreview: {
    width: 228,
    height: 160,
    objectFit: 'cover',
    borderRadius: token.borderRadius,
  },

  uploadButton: {
    backgroundColor: token.primary.primary100,
    color: token.colorPrimary,
  },

  buttonText: {
    width: 180,
    fontWeight: token.fontWeightStrong,
  },
}));
