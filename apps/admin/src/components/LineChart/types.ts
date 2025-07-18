type DataType = {
  name: string;
  primaryData: number;
  secondaryData?: number;
};

export type LineChartProps = {
  data: DataType[];
  primaryLabel: string;
  primaryColor: string;
  secondaryLabel?: string;
  secondaryColor?: string;
  referenceX?: string;
  showAxis: boolean;
};
