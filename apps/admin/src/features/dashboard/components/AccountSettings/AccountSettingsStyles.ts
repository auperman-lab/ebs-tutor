import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
  mainPart: {
    width: '80%',
    padding: 40,
    backgroundColor: 'white',
    marginTop: 24,
  },

  heading: {
    lineHeight: 1,
  },

  photoPart: {},

  accountSettings: {
    width: '100%',
  },

  fullName: {
    width: '100%',
  },

  instructorPhoto: {
    backgroundColor: '#F5F7FA',
    minWidth: 264,
    height: 320,
    padding: 16,
  },

  imageNote: {
    fontSize: 12,
    textAlign: 'center',
    color: '#6E7485',
  },

  saveButton: {
    marginTop: 90,
  },

  textArea: {
    minHeight: 120,
  },
}));
