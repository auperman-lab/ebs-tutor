type DataType = {
  name: string;
  primaryData: number;
  secondaryData? : number
}

export type LineChartProps = {
  data: DataType[]; // array of data points
  primaryLabel: string; // label of the y value row
  primaryColor: string; // color of the y value row
  secondaryLabel?: string;  // label of the second y value row (optional)
  secondaryColor?: string;  // color of the second y value row (optional)
  referenceX?: string; // a fixed tooltip
  showAxis: boolean;
};
