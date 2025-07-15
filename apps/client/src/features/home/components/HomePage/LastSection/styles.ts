import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
	wrapper: {
		width: '100vw',
		height: '150vh',
		background: `linear-gradient(to bottom, ${token.common.gray} 0%, ${token.common.gray} 50%, ${token.common.white} 50%, ${token.common.white} 100%)`,

	},


}));
