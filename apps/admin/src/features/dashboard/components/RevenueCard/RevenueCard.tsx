import { CardsHeader, LineChart } from "@components";
import { Flex } from "antd";
import { useStyles } from "./RevenueCardStyles";

const revenueData = [
  { name: "Aug 01", up: 102300 },
  { name: "Aug 02", up: 99500 },
  { name: "Aug 03", up: 100800 },
  { name: "Aug 04", up: 97900 },
  { name: "Aug 05", up: 101200 },
  { name: "Aug 06", up: 105000 },
  { name: "Aug 07", up: 97300 },
  { name: "Aug 08", up: 99200 },
  { name: "Aug 09", up: 100100 },
  { name: "Aug 10", up: 103500 },
  { name: "Aug 11", up: 101800 },
  { name: "Aug 12", up: 98600 },
  { name: "Aug 13", up: 102400 },
  { name: "Aug 14", up: 104600 },
  { name: "Aug 15", up: 106200 },
  { name: "Aug 16", up: 96400 },
  { name: "Aug 17", up: 98400 },
  { name: "Aug 18", up: 100500 },
  { name: "Aug 19", up: 99300 },
  { name: "Aug 20", up: 98000 },
  { name: "Aug 21", up: 100300 },
  { name: "Aug 22", up: 105800 },
  { name: "Aug 23", up: 108200 },
  { name: "Aug 24", up: 102000 },
  { name: "Aug 25", up: 92800 },
  { name: "Aug 26", up: 99100 },
  { name: "Aug 27", up: 98900 },
  { name: "Aug 28", up: 103100 },
  { name: "Aug 29", up: 107400 },
  { name: "Aug 30", up: 204200 },
  { name: "Aug 31", up: 99000 },
];

export const RevenueCard = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical={true} className={styles.wrapper}>

      <CardsHeader
        title={"Revenue"}
        options={[
          { value: "week", label: "This Week" },
          { value: "month", label: "This Month" },
          { value: "year", label: "This Year" },
        ]}
      />

      <div style={{padding: "24px", height: "100%"}}>
        <LineChart
          data={revenueData}
          primaryY={"up"}
          primaryColor={"#564FFD"}
          primaryLabel={"Revenue"}
          referenceX={"Aug 30"}
          ticksX={["Aug 01", "Aug 10", "Aug 20", "Aug 31"]}
          ticksY={["0", "10000", "50000", "100000", "200000"]}
          showAxis={true}
        />
      </div>
    </Flex>
  );
};
