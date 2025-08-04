import { Alert } from 'antd';
import { useStyles } from './styles';

interface FailComponentProps {
  message?: string;
  description?: string;
}

export const FailComponent = ({
  message = 'Error',
  description = 'Failed to load data.',
}: FailComponentProps) => {
  const { styles } = useStyles();
  return (
    <Alert
      type="error"
      message={message}
      description={description}
      showIcon
      className={styles.margin}
    />
  );
};
