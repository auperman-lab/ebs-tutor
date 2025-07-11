import {
  Flex,
  Typography,
  Divider,
  Form,
  Button,
  Input,
  Select,
  message,
} from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useStyles } from './styles';
import { UploadFiles } from './UploadFiles';
import { ImagePreview, VideoPreview } from '@assets';
import { api } from '@api';
import { useCourse } from '@context';
import type { TabsProps } from '@features/create-course/types';
import { DescriptionEditor } from './DescriptionEditor';
import { Author } from '@types';

const { Title } = Typography;

type UploadedFile = { name: string; mime: string; url: string };

export const AdvanceInformation = ({
  onHandleNext,
  onHandleBack,
  activeKey,
}: TabsProps) => {
  const { styles } = useStyles();
  const [form] = Form.useForm();
  const params = useParams();
  const { setCourse, course, files } = useCourse();

  const { data: rawTutors = [] } = useQuery({
    queryKey: ['tutors'],
    queryFn: api.courses.getTutors,
    staleTime: Infinity,
  });

  const tutors = rawTutors.map((tutor: Author) => ({
    label: `${tutor.first_name} ${tutor.last_name}`,
    value: tutor.id,
  }));

  useEffect(() => {
    if (course) {
      try {
        const authors = course.authors?.map((author) => author.id) || [];

        form.setFieldsValue({
          ...course,
          thumbnail: course.image_url,
          trailer: course.video_url,
          authors: authors,
          target: course.target_group,
          description: course.description,
        });
      } catch (error) {
        console.error('Error setting course data:', error);
      }
    } else {
      form.setFieldsValue({
        image_url: '',
        video_url: '',
        description: '',
        target_audience: 'Day(s)',
        authors: [],
      });
    }
  }, [form, course]);

  const uploadFilesMutation = useMutation({
    mutationFn: (formData: FormData) => api.courses.uploadFile(formData),
    onError: (err) => console.error('Upload error:', err),
  });

  const updateCourseMutation = useMutation({
    mutationFn: (data: any) => api.courses.updateCourse(data),
    onError: (err) => {
      console.error('Update course error:', err);
      message.error('Failed to update course.');
    },
  });

  const onSave = async () => {
    try {
      const values = await form.validateFields();

      if (!params.id || !course) {
        message.error('Course ID or course is misssing.');
        return;
      }

      let imageFile: UploadedFile | undefined;
      let videoFile: UploadedFile | undefined;

      if (files.thumbnail) {
        const imageFormData = new FormData();
        imageFormData.append('target', `/course/images/${course.id}`);
        imageFormData.append('file[]', files.thumbnail);

        const imageUploadResponse = await uploadFilesMutation.mutateAsync(
          imageFormData
        );

        const uploadedImages = imageUploadResponse as UploadedFile[];
        imageFile = uploadedImages.find((f) => f.mime.startsWith('image/'));
      }

      if (files.trailer) {
        const videoFormData = new FormData();
        videoFormData.append('target', `/course/videos/${course.id}`);
        videoFormData.append('file[]', files.trailer);

        const videoUploadResponse = await uploadFilesMutation.mutateAsync(
          videoFormData
        );
        const uploadedVideos = videoUploadResponse as UploadedFile[];
        videoFile = uploadedVideos.find((f) => f.mime.startsWith('video/'));
      }

      const updateData = {
        description: values.description,
        target_group: values.target,
        image_url: imageFile?.url ?? '',
        image_path: imageFile?.name ?? '',
        video_url: videoFile?.url ?? '',
        video_path: videoFile?.name ?? '',
      };

      const authors = values.authors || [];

      const updated = await updateCourseMutation.mutateAsync({
        id: Number(params.id),
        ...updateData,
        authors,
      });
      setCourse(updated);
    } catch (error) {
      console.error('Error saving advanced info:', error);
    }
  };

  const onNext = async () => {
    await onSave();
    onHandleNext();
  };

  return (
    <Form form={form}>
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
                description="Students who watch a well-made promo video are 5X more likely to enroll in your course."
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
          <Form.Item layout="vertical" label="Target audience" name="target">
            <Input
              size="large"
              showCount
              maxLength={120}
              placeholder="Your course target audience"
            />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Course Authors"
            className={styles.stretch}
            name="authors"
          >
            <Select
              size="large"
              placeholder="Select authors"
              options={tutors}
              mode="multiple"
            />
          </Form.Item>
        </Flex>

        <Flex className={styles.optionsButtons} justify="space-between">
          <Button
            size="large"
            variant="filled"
            className={styles.save}
            onClick={onHandleBack}
            style={activeKey === '1' ? { visibility: 'hidden' } : {}}
          >
            Back
          </Button>

          <Flex gap={32}>
            <Button
              size="large"
              variant="filled"
              className={styles.save}
              onClick={onSave}
            >
              {params.id ? 'Edit' : 'Save'}
            </Button>
            <Button size="large" type="primary" onClick={onNext}>
              {params.id ? 'Edit & Next' : 'Save & Next'}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Form>
  );
};
