import { Button, Flex } from 'antd';
import { NotFound } from '@client/assets';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { routes } from '@client/const';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { styles } = useStyles();
  return (
    <Flex justify="right" align="center" className={styles.notFoundPage}>
      <Flex vertical justify="center" className={styles.textBlock}>
        <p className={styles.error}>Error 404</p>
        <p className={styles.errorSubText}>Oops! Page not found</p>
        <p>
          Something went wrong. It looks like your request could not be found.
          The link might be broken or the page removed.
        </p>
        <Button
          type="primary"
          onClick={() => {
            navigate(routes.main);
          }}
          className={styles.button}
          size="large"
        >
          Go Back
        </Button>
      </Flex>

      <NotFound className={styles.img} />
    </Flex>
  );
};
