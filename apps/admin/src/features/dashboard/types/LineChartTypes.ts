export enum TimeRange {
  Week = "week",
  Month = "month",
  Year = "year",
}

export const PeriodLabels: Record<TimeRange, string> = {
  [TimeRange.Month]: "This Month",
  [TimeRange.Year]: "This Year",
  [TimeRange.Week]: "This Week",
};


export type DataType = {
  name: string;
  primaryData: number;
  secondaryData?: number;
}


