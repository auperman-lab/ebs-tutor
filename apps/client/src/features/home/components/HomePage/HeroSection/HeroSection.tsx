import { Button, Flex } from 'antd';
import { HeroImg } from '@clientAssets';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { routes } from '@clientConst';

export const HeroSection = () => {
	const { styles } = useStyles();
	const navigate = useNavigate();

	const onButtonClick = () => {
		navigate(routes.register)
	}
	return (
		<Flex className={styles.wrapper} justify="space-between" align="center">
			<Flex gap={40} vertical className={styles.heroTextWrapper}>
				<div className={styles.title}>Learn with expert anytime anywhere</div>
				<div className={styles.text}>Our mision is to help people to find the best course online and learn with expert
					anytime, anywhere.
				</div>
				<Button size="large" type="primary" className={styles.button} onClick={onButtonClick}>Create Account</Button>
			</Flex>
			<img className={styles.heroImage} src={HeroImg} alt="HeroSection" />

		</Flex>
	);
};