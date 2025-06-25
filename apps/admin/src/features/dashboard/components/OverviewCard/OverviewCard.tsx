import { CardsHeader, LineChart } from "@components";
import { Flex } from "antd";
import { useStyles } from "./styles";
import { useState } from "react";
import { monthOverviewData, PeriodLabels, TimeRange, weekOverviewData, yearOverviewData } from "@features/dashboard/types";
import { useTheme } from "antd-style";

export enum MetricLabel {
  Comments = "Comments",
  Views = "Views",
}


const options = Object.entries(PeriodLabels).map(([value, label]) => ({
  value,
  label,
}));


export const OverviewCard = () => {
  const { styles } = useStyles();
  const palette = useTheme();
  const legend = [
    { color: palette.colorSecondary, name: MetricLabel.Comments },
    { color: palette.colorPrimary, name: MetricLabel.Views },
  ];

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
        title={"Course Overview"}
        options={options}
        defaultOption={selectedPeriod}
        legend={legend}
        onChange={onPeriodChange}
      />

      <div className={styles.chartContainer}>
        <LineChart
          data={getFilteredData()}
          primaryColor={palette.colorPrimary}
          primaryLabel={MetricLabel.Views}
          secondaryColor={palette.colorSecondary}
          secondaryLabel={MetricLabel.Comments}
          showAxis={true}
        />
      </div>
    </Flex>
  );
};
