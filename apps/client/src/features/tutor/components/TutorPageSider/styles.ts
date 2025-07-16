import { createStyles } from 'antd-style';

export const useStyles = createStyles(({token}) => ({
	wrapper: {
		padding: '24px',
		width: '100%',
		minHeight: '400px',
		backgroundColor: token.colorWhite,
		border: `solid 1px ${token.info.info100}`
	},
	title:{
		fontSize: token.fontSizeLG,
		fontWeight: token.fontWeightStrong
	},
	text: {
		fontSize: token.fontSize,
	},

}));
