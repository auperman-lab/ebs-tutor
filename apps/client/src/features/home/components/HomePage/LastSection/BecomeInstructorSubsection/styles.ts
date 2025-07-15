import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
	wrapperLeft: {
		backgroundColor: token.colorWhite,
		height: '300px',
		width: '600px',
		background: 'linear-gradient(90deg, #CC522B 0%, #FF6636 100%)',
		color: token.colorWhite,
		padding: '40px',
		overflow: 'hidden'
	},
	title: {
		fontWeight: token.fontWeightStrong,
		fontSize: token.fontSizeHeading3,
		textWrap: 'nowrap'
	},
	text: {
		fontSize: token.fontSize,
		maxWidth: '250px'
	},
	image:{
		height:'350px',
		width: '350px',
		marginLeft: '-100px',
		marginTop: '50px'

	},
	infoWrapper:{
		height: '100%'
	},
	button: {
		color: token.colorPrimary,
		fontWeight: token.fontWeightStrong
	}



}));
