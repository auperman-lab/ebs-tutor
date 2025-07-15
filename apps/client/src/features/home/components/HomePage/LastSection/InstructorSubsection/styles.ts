import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
	wrapper: {
		background: token.colorWhite,
		width: '80%',
		padding: '80px',
		border: `solid 1px ${token.info.info100}`
	},
	title: {
		fontSize: token.fontSizeHeading2,
		fontWeight: token.fontWeightStrong,
	},
	text: {
		fontSize: token.fontSize,
		color: token.colorInfo,

	},
	fullWidth: {
		width: '100%',
	},
	button:{
		color: token.colorPrimary
	}

}));
