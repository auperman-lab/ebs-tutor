import { useId } from 'react';
import { Flex } from 'antd';
import {
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';
import { CustomTooltip } from './CustomTooltip';
import { useStyles } from './LineChartStyles';
import type { LineChartProps } from './LineChartTypes';

export const LineChart = ({
  data,
  primaryY,
  primaryLabel,
  primaryColor,
  secondaryY,
  secondaryLabel,
  secondaryColor,
  referenceX,
  showAxis,
}: LineChartProps<null>) => {
  const { styles } = useStyles();
  const id = useId();
  const gradientPrimaryId = `colorPrimary-${id}`;
  const gradientSecondaryId = `colorSecondary-${id}`;

  const formatYAxisTick = (value: number): string => {
    if (value >= 1000000) return `${value / 1000000}m`;
    if (value >= 1000) return `${value / 1000}k`;
    return `${value}`;
  };

  return (
    <Flex
      vertical
      className={styles.mainPart}
      justify="center"
      align="center"
      gap={24}
    >
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id={gradientPrimaryId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="25%" stopColor={primaryColor} stopOpacity={0.2} />
              <stop offset="75%" stopColor={primaryColor} stopOpacity={0} />
            </linearGradient>
            {secondaryY && secondaryColor && (
              <linearGradient
                id={gradientSecondaryId}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor={secondaryColor}
                  stopOpacity={0.2}
                />
                <stop offset="95%" stopColor={secondaryColor} stopOpacity={0} />
              </linearGradient>
            )}
          </defs>

          {showAxis && (
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              padding={{ left: 10 }}
              ticks={['Aug 01', 'Aug 11', 'Aug 21', 'Aug 31']}
            />
          )}

          {showAxis && (
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[1000, 10000, 50000, 150000]}
              tickFormatter={formatYAxisTick}
            />
          )}

          <Tooltip
            content={
              <CustomTooltip
                primaryY={primaryY}
                primaryLabel={primaryLabel}
                secondaryLabel={secondaryLabel}
                showAxis={showAxis}
              />
            }
          />

          {referenceX && (
            <ReferenceLine
              x={referenceX}
              stroke={primaryColor}
              strokeDasharray="6 4"
            />
          )}

          <Area
            type="basis"
            dataKey={primaryY}
            stroke={primaryColor}
            fillOpacity={1}
            fill={`url(#${gradientPrimaryId})`}
            strokeWidth={3}
          />

          {secondaryY && secondaryColor && (
            <Area
              type="monotone"
              dataKey={secondaryY}
              stroke={secondaryColor}
              fillOpacity={1}
              fill={`url(#${gradientSecondaryId})`}
              strokeWidth={3}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </Flex>
  );
};
