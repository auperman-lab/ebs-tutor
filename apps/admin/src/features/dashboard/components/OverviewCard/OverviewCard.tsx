import { CardsHeader, LineChart } from "@components";
import { Flex } from "antd";
import { useStyles } from "./OverviewCardStyles";

const overviewData = [
  { name: "Aug 01", up: 102300, uv: 114000 },
  { name: "Aug 02", up: 99500, uv: 93000 },
  { name: "Aug 03", up: 100800, uv: 102000 },
  { name: "Aug 04", up: 97900, uv: 92780 },
  { name: "Aug 05", up: 101200, uv: 101890 },
  { name: "Aug 06", up: 105000, uv: 92390 },
  { name: "Aug 07", up: 97300, uv: 83490 },
  { name: "Aug 08", up: 99200, uv: 88200 },
  { name: "Aug 09", up: 100100, uv: 90000 },
  { name: "Aug 10", up: 103500, uv: 97000 },
  { name: "Aug 11", up: 101800, uv: 94000 },
  { name: "Aug 12", up: 98600, uv: 96000 },
  { name: "Aug 13", up: 102400, uv: 95500 },
  { name: "Aug 14", up: 104600, uv: 100000 },
  { name: "Aug 15", up: 106200, uv: 98500 },
  { name: "Aug 16", up: 96400, uv: 92000 },
  { name: "Aug 17", up: 98400, uv: 91000 },
  { name: "Aug 18", up: 100500, uv: 89900 },
  { name: "Aug 19", up: 99300, uv: 88000 },
  { name: "Aug 20", up: 98000, uv: 86500 },
  { name: "Aug 21", up: 100300, uv: 87000 },
  { name: "Aug 22", up: 105800, uv: 94000 },
  { name: "Aug 23", up: 108200, uv: 97000 },
  { name: "Aug 24", up: 102000, uv: 96000 },
  { name: "Aug 25", up: 92800, uv: 88000 },
  { name: "Aug 26", up: 99100, uv: 87000 },
  { name: "Aug 27", up: 98900, uv: 85000 },
  { name: "Aug 28", up: 103100, uv: 91000 },
  { name: "Aug 29", up: 107400, uv: 95000 },
  { name: "Aug 30", up: 104200, uv: 93500 },
  { name: "Aug 31", up: 99000, uv: 89000 },
];

export const OverviewCard = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical={true} className={styles.wrapper}>

      <CardsHeader
        title={"Course Overview"}
        options={[
          { value: "week", label: "This Week" },
          { value: "month", label: "This Month" },
          { value: "year", label: "This Year" },
        ]}
        legend={[
          {color: "#FF6636", name:"Comments"},
          {color: "#564FFD", name:"Views"}
        ]}
      />

      <div style={{padding: "24px", height: "100%"}}>
        <LineChart
          data={overviewData}
          primaryY={"up"}
          primaryColor={"#564FFD"}
          primaryLabel={"Views"}
          secondaryY={"uv"}
          secondaryColor={"#FF6636"}
          secondaryLabel={"Comments"}
          ticksX={["Aug 01", "Aug 10", "Aug 20", "Aug 31"]}
          ticksY={["0", "10000", "50000", "100000", "200000"]}
          showAxis={true}
        />
      </div>
    </Flex>
  );
};
