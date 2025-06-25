import { Divider, Flex, Rate } from "antd";
import { useStyles } from "./styles";
import { useState } from "react";
import { RateItem } from "./RateItem";
import { CardsHeader, LineChart } from "@components";
import { weekRatingData, PeriodLabels, TimeRange, monthRatingData, yearRatingData } from "@features/dashboard/types";
import { useTheme } from "antd-style";

type RateItemProps = {
  percent: number;
  rating: number;
}

const options = Object.entries(PeriodLabels).map(([value, label]) => ({
  value,
  label,
}));

export const RatingCard = () => {
  const { styles } = useStyles();
  const palette = useTheme();

  const [rating, setRating] = useState(4.6);
  const [selectedPeriod, setSelectedPeriod] = useState<TimeRange>(TimeRange.Month);

  const getFilteredData = () => {
    switch (selectedPeriod) {
      case TimeRange.Week:
        return weekRatingData;
      case TimeRange.Month:
        return monthRatingData;
      case TimeRange.Year:
        return yearRatingData;
      default:
        return weekRatingData;
    }
  };
  const getAverageRating = (): number => {
    const data = getFilteredData();
    const total = data.length;
    const totalScore = data.reduce((sum, { primaryData }) => sum + primaryData, 0);
    return total > 0 ? +(totalScore / total).toFixed(1) : 0;
  };
  const generateRateItems = (): RateItemProps[] => {
    const data = getFilteredData();
    const ratingCounts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const total = data.length;

    data.forEach(({ primaryData }) => {
      const rating = Math.round(primaryData);
      if (rating >= 1 && rating <= 5) {
        ratingCounts[rating]++;
      }
    });

    return Object.entries(ratingCounts)
      .map(([rating, count]) => ({
        rating: Number(rating),
        percent: Math.round((count / total) * 100),
      }))
      .sort((a, b) => b.rating - a.rating);
  };
  const onPeriodChange = (value: string) => {
    setSelectedPeriod(value as TimeRange);
    setRating(getAverageRating());
  };

  return (
    <Flex vertical className={styles.wrapper}>

      <CardsHeader
        title="Overall Course Ratings"
        options={options}
        defaultOption={selectedPeriod}
        onChange={onPeriodChange}
      />

      <Flex
        justify="center"
        align="center"
        gap="24px"
        className={styles.content}
      >
        <Flex
          vertical
          align="center"
          justify="center"
          className={styles.ratingScore}
        >
          <h1>{rating}</h1>
          <Rate allowHalf value={rating} disabled />
          <p>Overall Rating</p>

        </Flex>
        <div className={styles.ratingGraph}>
          <LineChart
            data={getFilteredData()}
            primaryColor={palette.warning.warning500}
            primaryLabel="Rating"
            showAxis={false}
          />
        </div>

      </Flex>

      <Divider className={styles.divider} />

      <Flex
        vertical
        justify="space-between"
        align="center"
        className={styles.ratingList}
      >
        {generateRateItems().map((item, index) => (
          <RateItem key={index} {...item} />
        ))}
      </Flex>

    </Flex>
  );
};

