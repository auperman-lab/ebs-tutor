import { Button, Flex } from 'antd';
import { useStyles } from './styles';

type NavigationButtonsProps = {
  activeKey: string;
  onNext: () => void;
  onBack: () => void;
  onSave: () => void;
  onCreate: () => void;
};

export const NavigationButtons = ({
  activeKey,
  onNext,
  onBack,
  onSave,
  onCreate,
}: NavigationButtonsProps) => {
  const { styles } = useStyles();
  const isFirst = activeKey === '1';
  const isLast = activeKey === '4';

  return (
    <Flex justify="space-between" className={styles.container}>
      <Button size="large" onClick={isFirst ? () => {} : onBack}>
        {isFirst ? 'Cancel' : 'Back'}
      </Button>
      {isLast ? (
        <Button size="large" type="primary" onClick={onCreate}>
          Create Course
        </Button>
      ) : (
        <Flex gap={12} justify="space-between">
          <Button
            size="large"
            variant="filled"
            className={styles.save}
            onClick={onSave}
          >
            Save
          </Button>
          <Button size="large" type="primary" onClick={onNext}>
            Save & Next
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
