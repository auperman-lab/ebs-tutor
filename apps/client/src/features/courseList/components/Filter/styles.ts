import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
	wrapper: {
		display: 'inline-block',
	},

	dropdown: {
		background: token.colorBgElevated,
		border: `1px solid ${token.colorBorder}`,
		borderTop: '0px',
		borderRadius: token.borderRadius,
		padding: token.paddingSM,
	},
	dropdownButton: {
		width: '100%',
	},
	collapse: {
		background: '#fff',
		width: '100%',
	},

	optionIcon: {
		width: '20px',
		height: '20px',
	},
	optionLabel: {
		color: token.colorInfo,
	}
}));


