import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
  subsectionWrapper: {
    width: '70%',

    [responsive.xl]: {
      flexDirection: 'column',
      gap: '40px',
    },
  },
  wrapperLeft: {
    height: '300px',
    width: '600px',
    background: 'linear-gradient(90deg, #CC522B 0%, #FF6636 100%)',
    color: token.colorWhite,
    padding: '40px',
    overflow: 'hidden',
  },
  wrapperRight: {
    backgroundColor: token.colorWhite,
    height: '300px',
    width: '600px',
    color: token.common.black,
    padding: '40px',
  },
  title: {
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeHeading3,
    textWrap: 'nowrap',
  },
  text: {
    fontSize: token.fontSize,
    maxWidth: '250px',
  },
  image: {
    height: '350px',
    width: '350px',
    marginLeft: '-100px',
    marginTop: '50px',
  },
  infoWrapper: {
    height: '100%',
  },
  button: {
    color: token.colorPrimary,
    fontWeight: token.fontWeightStrong,
  },
  indexCircle: {
    backgroundColor: token.colorPrimary,
    color: token.colorWhite,
    borderRadius: '50%',
    width: '50px',
    aspectRatio: '1',
    textAlign: 'center',
    fontSize: token.fontSizeHeading3,
  },
}));
