import { createStyles } from 'antd-style';

export const useStyles = createStyles(({token}) => ({

	reviewTitle:{
		fontSize: token.fontSizeHeading3,
		fontWeight: token.fontWeightStrong,
	},
	content: {
		height: "fit-content",
		maxHeight: "200px"
	},
	select:{
		width: "170px",
		height: "40px",
		backgroundColor: token.colorWhite
	},
	ratingScore: {
		minWidth: "200px",
		aspectRatio: 1,
		padding: "31px",
		gap: 24,
		backgroundColor: token.warning.warning100,
	},

	ratingGraph: {
		width: "100%",
		aspectRatio: "2 / 1",
		textAlign: "center",
	},

	rateItemContainer: {
		width: "100%",
		padding: "0 0 8px 0",
		gap: 12,
	},

	nowrapText: {
		whiteSpace: "nowrap",
	},
	ratingList: {
		width: "100%",
		height: "200px",
	},
	avatar:{
		minWidth: "58px",
		minHeight: "58px",
		aspectRatio: 1,
	},

	name: {
		fontWeight: 600,
		fontSize: 16,
	},

	timeAgo: {
		color: token.colorTextSecondary,
		fontSize: 14,
	},

	stars: {
		color: token.colorWarning, // orange stars
		fontSize: 18,
	},

	text: {
		fontSize: 15,
		color: token.colorText,
		lineHeight: 1.6,
	}
}))