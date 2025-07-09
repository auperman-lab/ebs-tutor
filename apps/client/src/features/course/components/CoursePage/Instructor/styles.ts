import { createStyles } from 'antd-style';

export const useStyles = createStyles(({token}) => ({

	instructorTitle:{
		fontSize: token.fontSizeHeading3,
		fontWeight: token.fontWeightStrong,
	},

	instructorWrapper: {
		padding: '32px',
		backgroundColor: token.colorWhite,
		border: `1px solid #E9EAF0`,
	},
	avatar:{
		minHeight: "150px",
		minWidth: "150px",
		aspectRatio: 1,
	},
	tutorName:{
		fontSize: token.fontSizeXL,
		fontWeight: token.fontWeightStrong,

	},
	tutorInterests:{
		fontSize: token.fontSize,
		color: token.colorInfo,
		minHeight: "20px",
	},
	textImportant:{
		fontSize: token.fontSize,
		fontWeight: token.fontWeightStrong,
	},
	textSecondary:{
		fontSize: token.fontSize,
		color: token.colorInfo,
	},
	textBio:{
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		maxWidth: '100%',
		color: token.colorTextSecondary,
		fontSize: token.fontSize,
	}
}))