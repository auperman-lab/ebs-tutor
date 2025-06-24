import type {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import type { TooltipProps } from 'recharts';

export type LineChartProps<T> = {
  data: T[];
  primaryY: string;
  primaryLabel: string;
  primaryColor: string;
  secondaryY?: string;
  secondaryLabel?: string;
  secondaryColor?: string;
  referenceX?: string;
  showAxis: boolean;
};

export interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  primaryY: string;
  primaryLabel: string;
  secondaryLabel?: string;
  showAxis?: boolean;
}
