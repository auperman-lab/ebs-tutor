import { Flex, Typography, Image } from 'antd';
import notFound from '@assets/NotFound/notFound.png';

export const NotFoundPage = () => {
  return (
    <Flex>
      <Flex vertical={true} align="center" justify="center">
        <Typography.Paragraph>lakakaksmk</Typography.Paragraph>
      </Flex>
      <Image src={notFound} />
    </Flex>
  );
};
