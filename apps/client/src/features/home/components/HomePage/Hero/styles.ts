import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
	wrapper: {
		backgroundColor: 'orange',
		width: '100vw',
		height: '50vh',
	},

	heroImage: {
		aspectRatio: 2,
		height: '100%',
		maxWidth: '50%',

		[responsive.md]: {
			display: "none",

		},

	},

	heroTextWrapper: {
		marginTop: '60px',
		marginLeft: '150px',

		[responsive.xxl]: {
			marginLeft: '100px',
			marginTop: '40px',
		},

		[responsive.lg]: {
			marginLeft: 0,
			marginTop: '20px',
			textAlign: 'center',
		},
	},

	title: {
		fontSize: '72px',
		fontWeight: token.fontWeightStrong,

		[responsive.xl]: {
			fontSize: '48px',
		},

		[responsive.lg]: {
			fontSize: '36px',
		},
	},

	text: {
		fontSize: token.fontSizeHeading3,

		[responsive.xl]: {
			fontSize: token.fontSizeHeading4,
		},
		[responsive.lg]: {
			fontSize:token.fontSizeHeading4,
		},
	},

	button: {
		maxWidth: '40%',

		[responsive.lg]: {
			maxWidth: '100%',
			margin: "10px",

		},
	},
}));
