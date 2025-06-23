export type LineChartProps = {
  data: any[];
  primaryY: string; // name of the y value row
  primaryLabel: string; // label of the y value row
  primaryColor: string; // color of the y value row
  secondaryY?: string;  // name of the second y value row (optional)
  secondaryLabel?: string;  // label of the second y value row (optional)
  secondaryColor?: string;  // color of the second y value row (optional)
  referenceX?: string; // a fixed tooltip
  ticksX?: string[]
  showAxis: boolean;
};
