import { Flex, Typography, Divider, Form } from 'antd';
import { useStyles } from './styles';
import { UploadFiles } from './UploadFiles';
import { ImagePreview, VideoPreview } from '@assets';

const { Title } = Typography;

export const AdvanceInformation = () => {
  const { styles } = useStyles();

  return (
    <Flex vertical className={styles.container}>
      <Title level={4}>Advance Information</Title>
      <Divider orientationMargin={32} />
      <Form>
        <Flex vertical gap={18}>
          <Flex className={styles.uploadContainer}>
            <UploadFiles
              title="Course Thumbnail"
              description="Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png"
              acceptedTypes={['image/jpeg', 'image/png']}
              maxSizeMB={2}
              buttonText="Upload Image"
              preview={true}
              previewImage={<ImagePreview />}
            />
            <UploadFiles
              title="Course Trailer"
              description="Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen that statistic go up to 10X for exceptionally awesome videos."
              acceptedTypes={['video/mp4', 'video/webm', 'video/ogg']}
              maxSizeMB={50}
              buttonText="Upload Video"
              preview={true}
              previewImage={<VideoPreview />}
            />
          </Flex>
          <Divider orientationMargin={32} />
        </Flex>
      </Form>
    </Flex>
  );
};
