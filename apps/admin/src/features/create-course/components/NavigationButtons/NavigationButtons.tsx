import { Button, Flex } from 'antd';
import { useStyles } from './styles';

type NavigationButtonsProps = {
  activeKey: string;
  onNext: () => void;
  onBack: () => void;
};

export const NavigationButtons = ({
  activeKey,
  onNext,
  onBack,
}: NavigationButtonsProps) => {
  const { styles } = useStyles();
  const isFirst = activeKey === '1';
  const isLast = activeKey === '4';

  return (
    <Flex justify="space-between" className={styles.container}>
      <Button size="large" onClick={isFirst ? () => {} : onBack}>
        {isFirst ? 'Cancel' : 'Back'}
      </Button>
      <Flex gap={12} justify="space-between">
        <Button size="large" variant="filled" className={styles.save}>
          Save
        </Button>
        {!isLast && (
          <Button size="large" type="primary" onClick={onNext}>
            Save & next
          </Button>
        )}
      </Flex>
    </Flex>
  );
};
