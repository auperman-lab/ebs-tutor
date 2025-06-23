export type LineChartProps = {
  data: any[];
  primaryY: string;
  primaryLabel: string;
  primaryColor: string;
  secondaryY?: string;
  secondaryLabel?: string;
  secondaryColor?: string;
  referenceX?: string;
  showAxis: boolean;
};
