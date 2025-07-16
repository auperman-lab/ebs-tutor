import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
	cover: {
		objectFit: "cover",
	},

	title: {
		fontSize: token.fontSizeLG,
	},
	text: {
		fontSize: token.fontSize,
	},
	secondary:{
		fontSize: token.fontSize,
		color: token.colorInfo
	},
	hobbies:{
		fontSize: token.fontSize,
		color: token.colorInfo,
		minHeight: '14px',
	},
	divider: {
		margin: 0,
	},
	button: {
		backgroundColor: token.primary.primary100,
		color: token.colorPrimary,
		fontWeight: token.fontWeightStrong
	}


}));
