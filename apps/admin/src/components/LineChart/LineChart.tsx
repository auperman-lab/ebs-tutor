import { Area, AreaChart, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useId, useMemo } from "react";
import type { LineChartProps } from "./types";
import { CustomTooltip } from "./CustomToolTip";

export const LineChart = ({
                            data,
                            primaryLabel,
                            primaryColor,
                            secondaryLabel,
                            secondaryColor,
                            referenceX,
                            showAxis,
                          }: LineChartProps) => {
  const id = useId();

  const gradientPrimaryId = `colorPrimary-${id}`;
  const gradientSecondaryId = `colorSecondary-${id}`;

  const ticksY = useMemo(() => {
    const tickCount = 5;
    const allValues = data.flatMap(d => [
      d.primaryData,
      ...(d.secondaryData !== undefined ? [d.secondaryData] : []),
    ]);
    const max = Math.max(...allValues);
    const step = Math.ceil(max / (tickCount - 1));
    return Array.from({ length: tickCount }, (_, i) => i * step);
  }, [data]);

  const ticksX = useMemo(() => {
    const count = 4;
    if (data.length <= count) return data.map(d => d.name);

    const step = Math.floor((data.length - 1) / (count - 1));
    const ticks: string[] = [];
    for (let i = 0; i < count - 1; i++) {
      ticks.push(data[i * step].name);
    }
    ticks.push(data[data.length - 1].name);
    return ticks;
  }, [data]);

  const formatTickNumber = (value: number): string => {
    if (value >= 1_000_000) {
      return `${Math.round(value / 1_000_000)}m`;
    }
    if (value >= 1_000) {
      return `${Math.round(value / 1_000)}k`;
    }
    return Math.round(value).toString();
  };

  return (
    <ResponsiveContainer width="100%" minHeight={100} height="100%">
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id={gradientPrimaryId} x1="0" y1="0" x2="0" y2="2">
            <stop offset="25%" stopColor={primaryColor} stopOpacity={0.2} />
            <stop offset="75%" stopColor={primaryColor} stopOpacity={0} />
          </linearGradient>
          {secondaryColor && (
            <linearGradient
              id={gradientSecondaryId}
              x1="0"
              y1="0"
              x2="0"
              y2="2"
            >
              <stop offset="5%" stopColor={secondaryColor} stopOpacity={0.2} />
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
            tickFormatter={formatTickNumber}
          />
        )}

        <Tooltip
          content={
            <CustomTooltip
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
          dataKey="primaryData"
          stroke={primaryColor}
          fillOpacity={1}
          fill={`url(#${gradientPrimaryId})`}
          strokeWidth={3}
        />

        {secondaryLabel && secondaryColor && (
          <Area
            type="monotone"
            dataKey="secondaryData"
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
