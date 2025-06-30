import { useRef, useState } from 'react';
import { Flex, Typography, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useStyles } from './styles';

const { Text } = Typography;

type UploadBlockProps = {
  title: string;
  description: string;
  acceptedTypes: string[];
  maxSizeMB: number;
  buttonText: string;
  preview?: boolean;
};

export const UploadFiles = ({
  title,
  description,
  acceptedTypes,
  maxSizeMB,
  buttonText,
  preview = true,
}: UploadBlockProps) => {
  const { styles } = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string>();

  const handleClickUpload = () => {
    inputRef.current?.click();
  };

  const getBase64 = (file: File, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(file);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isAccepted = acceptedTypes.includes(file.type);
    if (!isAccepted) {
      message.error(`Supported formats: ${acceptedTypes.join(', ')}`);
      return;
    }

    const isWithinLimit = file.size / 1024 / 1024 < maxSizeMB;
    if (!isWithinLimit) {
      message.error(`File must be smaller than ${maxSizeMB}MB!`);
      return;
    }

    setLoading(true);
    getBase64(file, (url) => {
      setFileUrl(url);
      setLoading(false);
    });
  };

  const renderPreview = () => {
    if (!fileUrl || !preview) return null;

    if (acceptedTypes.some((type) => type.startsWith('image/'))) {
      return <img src={fileUrl} alt="preview" className={styles.innerButton} />;
    }

    if (acceptedTypes.some((type) => type.startsWith('video/'))) {
      return (
        <video controls className={styles.innerButton}>
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
      <Flex gap={24}>
        <div className={styles.upload} onClick={handleClickUpload}>
          {fileUrl && preview ? (
            renderPreview()
          ) : (
            <div className={styles.buttonContainer}>
              <div className={styles.innerButton}>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                {buttonText}
              </div>
            </div>
          )}
        </div>

        <input
          type="file"
          ref={inputRef}
          accept={acceptedTypes.join(',')}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />

        <Flex vertical gap={24}>
          <Text>{description}</Text>
          <Button
            type="primary"
            variant="filled"
            size="large"
            className={styles.uploadButton}
            onClick={handleClickUpload}
          >
            {buttonText}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
