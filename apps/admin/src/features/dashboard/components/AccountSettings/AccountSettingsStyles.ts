import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    width: '80%',
    padding: 40,
    backgroundColor: token.colorWhite,
    marginTop: token.marginLG,
  },

  heading: {
    fontSize: token.fontSizeHeading4,
    fontWeight: token.fontWeightStrong,
    color: token.colorTextHeading,
    lineHeight: token.lineHeightHeading1,
  },

  photoPart: {},

  accountSettings: {
    width: '100%',
  },

  fullName: {
    width: '100%',
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

  saveButton: {
    marginTop: 90,
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
