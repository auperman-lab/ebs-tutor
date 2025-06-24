import { useStyles } from './styles';
import type { CustomTooltipProps } from './LineChartTypes';

export const CustomTooltip = ({
  active,
  payload,
  label,
  primaryY,
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
            {item.dataKey === primaryY ? primaryLabel : secondaryLabel}:{' '}
            {(item.value as number).toLocaleString()}
          </div>
        ))}
        {showAxis && <div className={styles.label}>{label}</div>}
      </div>
    );
  }

  return null;
};
