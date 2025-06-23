import { Area, AreaChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useStyles } from "./LineChartStyles";
import { useId } from "react";
import type { LineChartProps } from "./LineChartTypes";

export const LineChart = ({
                            data,
                            primaryY,
                            primaryLabel,
                            primaryColor,
                            secondaryY,
                            secondaryLabel,
                            secondaryColor,
                            referenceX,
                            ticksX,
                            ticksY,
                            showAxis,
                          }: LineChartProps) => {
  const { styles } = useStyles();
  const id = useId();
  const gradientPrimaryId = `colorPrimary-${id}`;
  const gradientSecondaryId = `colorSecondary-${id}`;


  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.tooltip}>
          {payload.map((item: any) => (
            <div
              key={item.dataKey}
              style={{ color: item.stroke, fontWeight: 500 }}
            >
              {item.dataKey === primaryY ? primaryLabel : secondaryLabel}:{" "}
              {item.value.toLocaleString()}
            </div>
          ))}
          {showAxis && <div className={styles.label}>{label}</div>}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer
      width="100%"
      minHeight={100}
      height="100%"
    >
      <AreaChart
        data={data}
        margin={{
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
      >
        <defs>
          <linearGradient id={gradientPrimaryId} x1="0" y1="0" x2="0" y2="2">
            <stop offset="25%" stopColor={primaryColor} stopOpacity={0.2} />
            <stop offset="75%" stopColor={primaryColor} stopOpacity={0} />
          </linearGradient>
          {secondaryY && secondaryColor && (
            <linearGradient
              id={gradientSecondaryId}
              x1="0"
              y1="0"
              x2="0"
              y2="2"
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
            padding={{ left: 5 }}
            ticks={ticksX}
          />
        )}

        {showAxis && (
          <YAxis
            width={45}
            axisLine={false}
            tickLine={false}
            ticks={ticksY}
            tickFormatter={(value) =>
              value >= 1000000
                ? `${value / 1000000}m`
                : value >= 1000
                  ? `${value / 1000}k`
                  : value
            }

          />
        )}

        <Tooltip content={<CustomTooltip />} />

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
  );
};
