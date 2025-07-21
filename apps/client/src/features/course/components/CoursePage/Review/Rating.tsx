import { useStyles } from './styles';
import { Flex, Rate } from 'antd';
import { RateItem } from './RateItem';

const rateItems = [
  {
    percent: 75,
    rating: 5,
  },
  {
    percent: 21,
    rating: 4,
  },
  {
    percent: 3,
    rating: 3,
  },
  {
    percent: 1,
    rating: 2,
  },
  {
    percent: 1,
    rating: 1,
  },
];

export const Rating = () => {
  const { styles } = useStyles();

  return (
    <Flex justify="start" align="start" gap={24} className={styles.content}>
      <Flex
        vertical
        align="center"
        justify="center"
        className={styles.ratingScore}
      >
        <h1>4.6</h1>
        <Flex gap={12} vertical align="center" justify="center">
          <Rate allowHalf value={4.6} disabled />
          <p>Course Rating</p>
        </Flex>
      </Flex>
      <div className={styles.ratingGraph}>
        <Flex
          vertical
          justify="space-between"
          align="center"
          className={styles.ratingList}
        >
          {rateItems.map((item, index) => (
            <RateItem key={index} {...item} />
          ))}
        </Flex>
      </div>
    </Flex>
  );
};
