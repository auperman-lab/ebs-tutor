import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({

	title: {
		fontSize: token.fontSizeHeading2,
		fontWeight: token.fontWeightStrong,

		[responsive.sm]: {
			fontSize: token.fontSizeHeading4,
		},
	},
	text: {
		fontSize: token.fontSize,
	},
	secondaryText: {
		fontSize: token.fontSize,
		color: token.colorInfo
	},
	tooltipTitle: {
		fontSize: token.fontSizeXL
	},
	priceText: {
		fontSize: token.fontSizeHeading4
	},
	checkTitle: {
		fontSize: token.fontSizeSM,
		fontWeight: token.fontWeightStrong
	},
	dividerNoMargin: {
		margin: 0,
	},
	tag: {
		width: 'fit-content',
		backgroundColor: token.secondary.secondary100,
		color: token.secondary.secondary700,
		fontSize: token.fontSizeSM,
		marginBottom: 8,
		border: 0,
	},
	emptyTag: {
		height: '30px',
		minHeight: '30px',
	},
	tagContainer: {
		overflowX: 'scroll',
		width: '350px',
		scrollbarWidth: 'none',
		msOverflowStyle: 'none',

		'&::-webkit-scrollbar': {
			display: 'none',
		},
	},
	button: {
		padding: '4px 24px ',
		backgroundColor: '#FFEEE8',
		color: '#FF6636',
		border: 0,

	},
	coursesWrapper: {
		width: '80%',
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: '50%',
		objectFit: 'cover',
		border: '2px solid white',
		marginLeft: -24,

	},
	statsWrapper: {
		padding: '0 24px'
	},
	priceWrapper: {
		padding: '0'
	},
	checkIcon: {
		minWidth: '24px',
		minHeight: '24px',
	},
	mediumButton: {
		width: '100%',

	},
	tooltip: {
		backgroundColor: token.colorWhite, width: 400, padding: 16
	},
	price: {
		fontSize: token.fontSizeHeading4,
		textAlign: 'center',
	},
	priceOld: {
		fontSize: token.fontSizeLG,
		color: token.colorInfo,
		textDecoration: 'line-through',
	},
	discount: {
		backgroundColor: token.primary.primary100,
		color: token.colorPrimary,
		padding: '8px 4px'
	},

}));
