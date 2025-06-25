import { CardsHeader, LineChart } from "@components";
import { Flex } from "antd";
import { useStyles } from "./styles";
import { useState } from "react";
import { monthOverviewData, PeriodLabels, TimeRange, weekOverviewData, yearOverviewData } from "../../types";
import { useTheme } from "antd-style";

const options = Object.entries(PeriodLabels).map(([value, label]) => ({
  value,
  label,
}));

export const RevenueCard = () => {
  const { styles } = useStyles();
  const palette = useTheme();

  const [selectedPeriod, setSelectedPeriod] = useState<TimeRange>(TimeRange.Month);

  const getFilteredData = () => {
    switch (selectedPeriod) {
      case TimeRange.Week:
        return weekOverviewData;
      case TimeRange.Month:
        return monthOverviewData;
      case TimeRange.Year:
        return yearOverviewData;
      default:
        return monthOverviewData;
    }
  };
  const onPeriodChange = (value: string) => {
    setSelectedPeriod(value as TimeRange);
  };

  return (
    <Flex vertical className={styles.wrapper}>

      <CardsHeader
        title="Revenue"
        options={options}
        defaultOption={selectedPeriod}
        onChange={onPeriodChange}
      />

      <div className={styles.chartContainer}>
        <LineChart
          data={getFilteredData()}
          primaryColor={palette.colorSecondary}
          primaryLabel="Revenue"
          referenceX="Aug 30"
          showAxis={true}
        />
      </div>
    </Flex>
  );
};
