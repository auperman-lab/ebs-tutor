import { ReactElement } from 'react';
import {
  Flex,
  Typography,
  Upload,
  UploadProps,
  message,
  Button,
  Form,
} from 'antd';
import { useStyles } from './styles';

const { Text } = Typography;

type UploadBlockProps = {
  title: string;
  description: string;
  acceptedTypes: string[];
  maxSizeMB: number;
  buttonText: string;
  preview?: boolean;
  previewImage: ReactElement;
};

export const UploadFiles = ({
  title,
  description,
  acceptedTypes,
  maxSizeMB,
  buttonText,
  preview,
  previewImage,
}: UploadBlockProps) => {
  const { styles } = useStyles();
  const form = Form.useFormInstance();

  const beforeUpload = (file: File) => {
    const isAccepted = acceptedTypes.includes(file.type);
    if (!isAccepted) {
      message.error(`Supported formats: ${acceptedTypes.join(', ')}`);
      return false;
    }

    const isWithinLimit = file.size / 1024 / 1024 < maxSizeMB;
    if (!isWithinLimit) {
      message.error(`File must be smaller than ${maxSizeMB}MB!`);
      return false;
    }

    return true;
  };

  const getBase64 = (file: File, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(file);
  };

  const handleChange: UploadProps['onChange'] = (info) => {
    const file = info.file.originFileObj;
    if (file && beforeUpload(file)) {
      getBase64(file, (url) => {
        form.setFieldsValue({
          [title.toLowerCase().includes('thumbnail') ? 'thumbnail' : 'trailer']:
            url,
        });
      });
    }
  };

  const fileUrl = form.getFieldValue(
    title.toLowerCase().includes('thumbnail') ? 'thumbnail' : 'trailer'
  );

  const renderPreview = () => {
    if (!fileUrl || !preview) return null;

    if (acceptedTypes.some((type) => type.startsWith('image/'))) {
      return (
        <img src={fileUrl} alt="preview" className={styles.mediaPreview} />
      );
    }

    if (acceptedTypes.some((type) => type.startsWith('video/'))) {
      return (
        <video controls className={styles.mediaPreview}>
          <source src={fileUrl} type={acceptedTypes[0]} />
          Your browser does not support the video tag.
        </video>
      );
    }

    return null;
  };

  return (
    <Flex vertical gap={16}>
      <Text className={styles.title}>{title}</Text>
      <Flex gap={24} className={styles.previewContainer}>
        <div className={styles.upload}>
          {fileUrl && preview ? renderPreview() : previewImage}
        </div>

        <Flex vertical gap={16} justify="space-between">
          <Text>{description}</Text>
          <Upload
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            accept={acceptedTypes.join(',')}
          >
            <Button
              variant="filled"
              size="large"
              className={styles.uploadButton}
            >
              <div className={styles.buttonText}>{buttonText}</div>
            </Button>
          </Upload>
        </Flex>
      </Flex>
    </Flex>
  );
};
