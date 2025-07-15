import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token, responsive }) => ({
	wrapper: {
		backgroundColor: token.colorWhite,
		width: '100vw',
		height: '200vh',
		background: 'linear-gradient(to bottom, orange 0%, orange 50%, white 50%, white 100%)',

	},


}));
