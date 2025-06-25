import { useState } from "react";
import { Flex } from "antd";
import { useStyles } from "./styles";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { CardsHeader } from "@components";
import { useCustomToken } from "@hooks";
import { monthOverviewData, PeriodLabels, TimeRange, weekOverviewData, yearOverviewData } from "../../types";


export const ProfileViewsCard = () => {
  const { styles } = useStyles();
  const token = useCustomToken();

  const [selectedPeriod, setSelectedPeriod] = useState<TimeRange>(TimeRange.Month);
  const [totalViewers, setTotalViewers] = useState(0);


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
  const setViewers = ()=> {
    setTotalViewers(getFilteredData().reduce((sum, item) => sum + item.primaryData, 0));
  };
  const onPeriodChange = (value: string) => {
    setSelectedPeriod(value as TimeRange);
    setViewers()
  };


  return (
    <Flex vertical className={styles.wrapper}>
      <CardsHeader
        title={"Profile Views"}
        options={Object.entries(PeriodLabels).map(([value, label]) => ({
          value,
          label,
        }))}
        defaultOption={selectedPeriod}
        onChange={onPeriodChange}
      />
      <Flex vertical align="center" justify="space-between" className={styles.chartSection}>

        <ResponsiveContainer className={styles.barchartContainer}>
          <BarChart
            data={getFilteredData()}
            barSize={16}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Bar dataKey="primaryData" fill={token.colorSuccess} background={{ fill: token.success.success100 }} />
          </BarChart>
        </ResponsiveContainer>

        <Flex
          vertical
          gap="8px"
          justify="center"
          align="start"
          className={styles.textContainer}
        >
          <div className={styles.viewsTitle}>{totalViewers}</div>
          <div className={styles.viewsSubtitle}>People viewed you</div>
        </Flex>
      </Flex>
    </Flex>

  );
};
