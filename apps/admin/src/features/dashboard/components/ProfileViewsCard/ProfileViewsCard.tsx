import { Flex } from "antd";
import { useStyles } from "./ProfileViewsCardStyles";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { CardsHeader } from "@components";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export const ProfileViewsCard = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical={true} className={styles.wrapper}>
      <CardsHeader
        title={"Profile Views"}
        options={[
          { value: "week", label: "This Week" },
          { value: "month", label: "This Month", },
          { value: "year", label: "This Year" }
        ]}
      />
      <Flex vertical={true} align={"center"} justify={"space-between"} style={{ padding: "8px", height: "100%" }}>

        <ResponsiveContainer className={styles.barchartContainer}>
          <BarChart
            data={data}
            barSize={16}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            <Bar dataKey="uv" fill="#23BD33" background={{ fill: "#eee" }} />
          </BarChart>
        </ResponsiveContainer>

        <Flex
          vertical={true}
          gap={"8px"}
          justify={"center"}
          align={"start"}
          className={styles.textContainer}
        >
          <h1 style={{ fontSize: "20px" }}>
            1,200
          </h1>
          <p style={{ fontSize: "14px", color: "#888" }}>
            People viewed you
          </p>
        </Flex>
      </Flex>
    </Flex>

  );
};
