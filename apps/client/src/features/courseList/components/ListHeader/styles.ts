import { createStyles } from "antd-style";

export const useStyles = createStyles(({ token }) => ({
	search: {
		minWidth: 500,
	},

	select: {
		width: '100%',
		minWidth: 150,

	},

	sortText: {
		color: token.colorInfo,
		textWrap: "nowrap",
		textAlign: "center"
	},
	filterButton:{
		minWidth: "150px",
	},
	filterInsides: {
		width: "100%"
	}


}));
