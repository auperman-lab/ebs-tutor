import { useStyles } from './styles';
import type {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import type { TooltipProps } from 'recharts';

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  primaryLabel: string;
  secondaryLabel?: string;
  showAxis?: boolean;
};

export const CustomTooltip = ({
  active,
  payload,
  label,
  primaryLabel,
  secondaryLabel,
  showAxis,
}: CustomTooltipProps) => {
  const { styles } = useStyles();

  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        {payload.map((item) => (
          <div
            key={item.dataKey?.toString()}
            style={{ color: item.stroke, fontWeight: 500 }}
          >
            {item.dataKey === 'primaryData' ? primaryLabel : secondaryLabel}
            {(item.value as number).toLocaleString()}
          </div>
        ))}
        {showAxis && <div className={styles.label}>{label}</div>}
      </div>
    );
  }

  return null;
};
