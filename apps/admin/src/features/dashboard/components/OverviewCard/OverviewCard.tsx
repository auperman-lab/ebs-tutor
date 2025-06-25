import { CardsHeader, LineChart } from "@components";
import { Flex } from "antd";
import { useStyles } from "./styles";
import { useCustomToken } from "@hooks";
import { useState } from "react";
import { monthOverviewData, PeriodLabels, TimeRange, weekOverviewData, yearOverviewData } from "../../types";

export enum MetricLabel {
  Comments = "Comments",
  Views = "Views",
}

const token = useCustomToken();

const options = Object.entries(PeriodLabels).map(([value, label]) => ({
  value,
  label,
}));

const legend = [
  { color: token.colorSecondary, name: MetricLabel.Comments },
  { color: token.colorPrimary, name: MetricLabel.Views },
];

export const OverviewCard = () => {
  const { styles } = useStyles();
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
          primaryColor={token.colorPrimary}
          primaryLabel={MetricLabel.Views}
          secondaryColor={token.colorSecondary}
          secondaryLabel={MetricLabel.Comments}
          showAxis={true}
        />
      </div>
    </Flex>
  );
};
