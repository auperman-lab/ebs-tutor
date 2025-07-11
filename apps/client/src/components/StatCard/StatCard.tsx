import { useStyles } from './styles';
import { Flex } from 'antd';

type StatCardProp = {
	subtitle: string;
	title: string;
	icon: string;
	color: string;
	onClick?: () => void;
};

export const StatCard = ({ color, title, subtitle, icon, onClick }: StatCardProp) => {
	const { styles } = useStyles(color);

	return (
		<Flex
			justify="space-between"
			align="center"
			onClick={onClick}
			className={styles.wrapper}>
			<Flex align="center" justify="center" className={styles.iconWrapper}>
				<img src={icon} alt={title} className={styles.icon} />
			</Flex>
			<Flex
				vertical
				justify="space-between"
				align="start"
				className={styles.textWrapper}
			>
				<div className={styles.header}>{subtitle}</div>
				<div className={styles.text}>{title}</div>
			</Flex>
		</Flex>
	);
};
