import { Button, Divider, Flex, Spin } from 'antd';
import { useStyles } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { api } from '@client/api/api';
import { LoadingOutlined } from '@ant-design/icons';
import {
  Alarm,
  BarChart,
  Clock,
  Dollar,
  Envelope,
  Facebook,
  Linkedin,
  Monitor,
  Notebook,
  Notepad,
  Stack,
  Trophy,
  Twitter,
  Users,
} from '@client/assets';
import { routes } from '@client/const';
import { useAuth } from '@client/hooks';

export const Sidebar = () => {
  const { id } = useParams();
  const { styles } = useStyles();
  const navigate = useNavigate();
  const { user } = useAuth();

  const { data: course, isLoading } = useQuery({
    queryKey: ['course', id],
    queryFn: () => api.courses.getCourse(id!),
  });

  const getPrice = (price: number | undefined | null): string => {
    if (price === 0) return 'Free';
    if (price != null) return `$${price.toFixed(2)}`;
    return 'N/A';
  };

  const getOldPrice = (): string => {
    if (
      course?.product.price_old != null &&
      course?.product.price_old !== course?.product.price
    ) {
      return `$${course?.product.price_old.toFixed(2)}`;
    }
    return '';
  };
  const getDiscount = (): string => {
    if (
      course?.product.price_old != null &&
      course?.product.price_old !== course?.product.price
    ) {
      return `${
        ((course?.product.price_old - course?.product.price) * 100) /
        course?.product.price_old
      }%`;
    }
    return '';
  };

  const onCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const onEmailShare = () => {
    const subject = encodeURIComponent('Check out this course!');
    const body = encodeURIComponent(
      `I thought you might find this course interesting: ${window.location.href}`
    );
    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
  };

  const onTwitterShare = () => {
    const text = encodeURIComponent('Check out this course!');
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      '_blank'
    );
  };

  const onFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      '_blank'
    );
  };

  const onLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      '_blank'
    );
  };

  const onBuy = () => {
    if (!user) {
      return navigate(routes.login);
    }
    return navigate(routes.cart);
  };

  if (isLoading)
    return <Spin indicator={<LoadingOutlined spin />} size="large" />;

  return (
    <Flex vertical gap={24} className={styles.sidebarWrapper}>
      <Flex vertical gap={12}>
        <Flex justify="space-between" align="center">
          <Flex gap={18} align="center" justify="center">
            <div className={styles.price}>
              {getPrice(course?.product?.price)}
            </div>
            <div className={styles.priceOld}>{getOldPrice()}</div>
          </Flex>
          {getDiscount() && (
            <Flex gap={10} className={styles.discount}>
              {getDiscount()} OFF
            </Flex>
          )}
        </Flex>
        {getDiscount() && (
          <Flex gap={8} className={styles.timer} align="center" justify="start">
            <Alarm />
            <div>2 days left at this price!</div>
          </Flex>
        )}
      </Flex>
      <Divider className={styles.dividerNoMargin} />
      <Flex vertical gap={16}>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" justify="start">
            <Clock className={styles.iconInfo} />
            Course Duration
          </Flex>
          <div className={styles.textSecondary}>
            {course?.duration ?? 'Forever'}
          </div>
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" justify="start">
            <BarChart className={styles.iconInfo} />
            Course Level
          </Flex>
          <div className={styles.textSecondary}>{course?.level ?? '99'}</div>
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" justify="start">
            <Users className={styles.iconInfo} />
            Students Enrolled
          </Flex>
          <div className={styles.textSecondary}>
            {course?.users_count ?? 'over 9000'}
          </div>
        </Flex>
        <Flex justify="space-between" align="center">
          <Flex gap={8} align="center" justify="start">
            <Notebook className={styles.iconInfo} />
            Language
          </Flex>
          <div className={styles.textSecondary}>
            {course?.language ?? 'Latin'}
          </div>
        </Flex>
      </Flex>
      <Divider className={styles.dividerNoMargin} />
      <Flex vertical gap={12}>
        <Button size="large" type="primary">
          Add To Cart
        </Button>
        <Button
          size="large"
          className={styles.buyButton}
          type="primary"
          onClick={onBuy}
        >
          Buy Now
        </Button>
        <Flex gap={12}>
          <Button size="large" className={styles.mediumButton} type="default">
            Add To Wishlist
          </Button>
          <Button size="large" className={styles.mediumButton} type="default">
            Gift Course
          </Button>
        </Flex>
        <Flex align="center" justify="center" className={styles.textSecondary}>
          Note: all course have 30-days money-back guarantee
        </Flex>
      </Flex>
      <Divider className={styles.dividerNoMargin} />
      <Flex vertical gap={16}>
        <div className={styles.title}>This course includes:</div>
        <Flex gap={8} align="center" justify="start">
          <Clock className={styles.iconPrimary} />
          Lifetime access
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Dollar className={styles.iconPrimary} />
          30-days money-back guarantee
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Notebook className={styles.iconPrimary} />
          Free exercise file & downloadable resources
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Trophy className={styles.iconPrimary} />
          Shareable certificate of completion
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Monitor className={styles.iconPrimary} />
          Access on mobile , tablet and TV
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Notepad className={styles.iconPrimary} />
          English subtitles
        </Flex>
        <Flex gap={8} align="center" justify="start">
          <Stack className={styles.iconPrimary} />
          100% online course
        </Flex>
      </Flex>
      <Divider className={styles.dividerNoMargin} />
      <Flex gap={18} vertical>
        <div className={styles.title}>Share this course:</div>
        <Flex gap={8}>
          <Button
            size="large"
            className={styles.smallButton}
            onClick={onCopyLink}
          >
            Copy link
          </Button>
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Envelope />}
            onClick={onEmailShare}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Twitter />}
            onClick={onTwitterShare}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Facebook />}
            onClick={onFacebookShare}
          />
          <Button
            size="large"
            className={styles.smallButton}
            icon={<Linkedin />}
            onClick={onLinkedInShare}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
