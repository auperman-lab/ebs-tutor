import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  mainPart: {
    width: '100%',
    padding: 40,
    backgroundColor: token.colorWhite,
    marginTop: token.marginLG,
  },

  heading: {
    fontSize: token.fontSizeHeading3,
    fontWeight: token.fontWeightStrong,
    color: token.colorTextHeading,
    lineHeight: token.lineHeightHeading1,
  },

  photoPart: {
    [responsive.lg]: {
      flexDirection: 'column',
    },
  },

  accountSettings: {
    width: '100%',
  },

  fullName: {
    width: '100%',
    [responsive.lg]: {
      flexDirection: 'column',
    },
  },

  instructorPhoto: {
    backgroundColor: token.colorBgBase,
    minWidth: 264,
    height: 320,
    padding: token.padding,
    borderRadius: token.borderRadiusLG,
  },

  imageNote: {
    fontSize: token.fontSizeSM,
    textAlign: 'center',
    color: token.colorTextDescription,
    marginTop: token.marginXS,
  },

  avatar: {
    backgroundColor: '#F5F7FA',
    color: token.colorInfo,
  },

  saveButton: {
    marginTop: 114,
    width: 130,
    backgroundColor: token.colorPrimary,
    borderColor: token.colorPrimary,
    color: token.colorWhite,
  },

  textArea: {
    minHeight: 120,
    borderColor: token.colorBorder,
    borderRadius: token.borderRadiusLG,
  },
}));
