import { Flex, Typography, Divider, Form } from 'antd';
import { useStyles } from './styles';
import { UploadFiles } from './UploadFiles';
import { ImagePreview, VideoPreview } from '@assets';
import { DescriptionEditor } from './DescriptionEditor';
import { ListComponent } from './ListComponent';

const { Title } = Typography;

export const AdvanceInformation = () => {
  const { styles } = useStyles();
  const form = Form.useFormInstance();

  return (
    <Form form={form} component={false}>
      <Flex vertical className={styles.container}>
        <Title level={4}>Advance Information</Title>
        <Divider orientationMargin={32} />

        <Flex vertical gap={12}>
          <Flex className={styles.uploadContainer}>
            <Form.Item name="thumbnail">
              <UploadFiles
                title="Course Thumbnail"
                description="Upload your course Thumbnail here. Important guidelines: 1200x800 pixels or 12:8 Ratio. Supported format: .jpg, .jpeg, or .png"
                acceptedTypes={['image/jpeg', 'image/png']}
                maxSizeMB={2}
                buttonText="Upload Image"
                preview={true}
                previewImage={<ImagePreview />}
              />
            </Form.Item>
            <Form.Item name="trailer">
              <UploadFiles
                title="Course Trailer"
                description="Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen that statistic go up to 10X for exceptionally awesome videos."
                acceptedTypes={['video/mp4', 'video/webm', 'video/ogg']}
                maxSizeMB={50}
                buttonText="Upload Video"
                preview={true}
                previewImage={<VideoPreview />}
              />
            </Form.Item>
          </Flex>
          <Divider orientationMargin={32} />
          <Form.Item name="description">
            <DescriptionEditor />
          </Form.Item>
          <Divider orientationMargin={32} />
          <Form.Item
            name="promises"
            rules={[
              { required: true, message: 'At least one promise is required' },
            ]}
          >
            <ListComponent
              name="promises"
              title="What you will teach in this course"
              keyItem="promise"
              placeholder="What you will teach in this course..."
            />
          </Form.Item>
          <Divider orientationMargin={32} />
          <Form.Item name="target">
            <ListComponent
              name="target"
              title="Target Audience"
              keyItem="target"
              placeholder="Who this course is for..."
            />
          </Form.Item>
          <Divider orientationMargin={32} />
          <Form.Item name="requirements">
            <ListComponent
              name="requirements"
              title="Course requirements"
              keyItem="require"
              placeholder="What is your course requirements..."
            />
          </Form.Item>
        </Flex>
      </Flex>
    </Form>
  );
};
