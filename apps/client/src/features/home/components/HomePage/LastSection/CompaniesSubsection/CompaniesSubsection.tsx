import { Flex } from 'antd';
import { useStyles } from './styles';
import {
  Google,
  Lenovo,
  Lexmark,
  Microsoft,
  Netflix,
  Slack,
  Verizon,
  Youtube,
} from '@client/assets';

const data = [
  <Youtube />,
  <Netflix />,
  <Google />,
  <Lenovo />,
  <Slack />,
  <Verizon />,
  <Lexmark />,
  <Microsoft />,
];

export const CompaniesSubsection = () => {
  const { styles } = useStyles();
  return (
    <Flex
      gap={24}
      align="center"
      justify="space-between"
      className={styles.wrapper}
    >
      <Flex gap={24} vertical>
        <div className={styles.title}>6.3k trusted companies</div>
        <div className={styles.text}>
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </div>
      </Flex>

      <div className={styles.gridWrapper}>
        {data.map((item, index) => (
          <div key={index} className={styles.companyCard}>
            <Flex align="center" justify="center" className={styles.heightFull}>
              {item}
            </Flex>
          </div>
        ))}
      </div>
    </Flex>
  );
};
