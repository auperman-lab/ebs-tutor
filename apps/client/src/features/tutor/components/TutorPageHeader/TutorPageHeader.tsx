import { Avatar, Button, Flex } from 'antd';
import { useStyles } from './styles';
import {
  Facebook,
  Instagram,
  NoImage,
  Star,
  Twitter,
  User,
  Whatsapp,
  YoutubeLogo,
} from '@client/assets';

type TutorPageHeaderProps = {
  image?: string;
  name?: string;
  email?: string;
  coursesAmount?: number;
};

export const TutorPageHeader = ({
  image,
  name,
  email,
  coursesAmount,
}: TutorPageHeaderProps) => {
  const { styles } = useStyles();

  const onRedirectFacebook = () => {
    window.open('https://www.facebook.com', '_blank');
  };

  const onRedirectTwitter = () => {
    window.open('https://www.twitter.com', '_blank');
  };

  const onRedirectInstagram = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  const onRedirectYoutube = () => {
    window.open('https://www.youtube.com', '_blank');
  };

  const onRedirectWhatsapp = () => {
    window.open('https://web.whatsapp.com', '_blank');
  };

  return (
    <Flex justify="space-between" align="center" className={styles.wrapper}>
      <Flex gap={24} align="center">
        {image ? (
          <Avatar src={image} shape="circle" className={styles.image} />
        ) : (
          <NoImage className={styles.image} />
        )}
        <Flex
          vertical
          gap={24}
          className={styles.infoWrapper}
          justify="space-evenly"
        >
          <Flex vertical align="star" gap={10}>
            <div className={styles.title}>{name}</div>
            <div className={styles.subtitle}>{email}</div>
          </Flex>
          <Flex justify="space-between" align="center">
            <Flex gap={6}>
              <Star />
              <div className={styles.text}>4.8</div>
              <div className={styles.secondaryText}>(112 reviews)</div>
            </Flex>
            <Flex gap={6}>
              <User />
              <div className={styles.text}>117</div>
              <div className={styles.secondaryText}>students</div>
            </Flex>
            <Flex gap={6}>
              {/*todo: change after course page merge*/}
              <User />
              <div className={styles.text}>{coursesAmount}</div>
              <div className={styles.text}>courses</div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex align="end" gap={16} vertical>
        <Button size="large" type="link">
          LinkToSomething
        </Button>
        <Flex gap={8}>
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Facebook />}
            onClick={onRedirectFacebook}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Twitter />}
            onClick={onRedirectTwitter}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Instagram />}
            onClick={onRedirectInstagram}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<YoutubeLogo />}
            onClick={onRedirectYoutube}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Whatsapp />}
            onClick={onRedirectWhatsapp}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
