import { useState } from 'react';

import {
  Flex,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Avatar,
  message,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useStyles } from './styles';

export const AccountSettings = () => {
  const { styles } = useStyles();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const options = [{ value: '+880', label: '+880' }];

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith('image/');
    const isLt1M = file.size / 1024 / 1024 < 1;

    if (!isImage) {
      message.error('You can only upload image files!');
    }
    if (!isLt1M) {
      message.error('Image must be smaller than 1MB!');
    }

    return isImage && isLt1M;
  };

  const handleChange = (info: any) => {
    const file = info.file.originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Form className={styles.mainPart}>
      <Flex vertical gap={24}>
        <Flex className={styles.photoPart} justify="space-between" gap={24}>
          <Flex vertical className={styles.accountSettings} gap={24}>
            <h1 className={styles.heading}>Account Settings</h1>
            <Flex vertical gap={64}>
              <Flex className={styles.fullName} gap={64}>
                <Form.Item
                  layout="vertical"
                  label="First name"
                  style={{ flex: 1 }}
                >
                  <Input size="large" placeholder="First name" />
                </Form.Item>
                <Form.Item
                  layout="vertical"
                  label="Last name"
                  style={{ flex: 1 }}
                >
                  <Input size="large" placeholder="Last name" />
                </Form.Item>
              </Flex>

              <Form.Item layout="vertical" label="Username">
                <Input size="large" placeholder="Enter your username" />
              </Form.Item>
              <Form.Item layout="vertical" label="Phone Number">
                <Flex>
                  <Select
                    defaultValue="+880"
                    options={options}
                    style={{ width: 120 }}
                    size="large"
                  />
                  <Input
                    style={{ flex: 1 }}
                    placeholder="Your Phone number..."
                    size="large"
                  />
                </Flex>
              </Form.Item>
            </Flex>
          </Flex>

          <Flex
            vertical
            className={styles.instructorPhoto}
            align="center"
            justify="space-between"
          >
            {imageUrl ? (
              <Avatar src={imageUrl} shape="square" size={200} />
            ) : (
              <Avatar shape="square" size={200} className={styles.avatar}>
                Upload
              </Avatar>
            )}

            <Upload
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
              accept="image/*"
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>

            <p className={styles.imageNote}>
              Image size should be under 1MB and image ratio needs to be 1:1
            </p>
          </Flex>
        </Flex>

        <Flex vertical gap={64}>
          <Form.Item layout="vertical" label="Title">
            <Input
              placeholder="Your tittle, proffesion or small biography"
              count={{
                show: true,
                max: 50,
              }}
              size="large"
            />
          </Form.Item>
          <Form.Item layout="vertical" label="Biography">
            <Input.TextArea
              placeholder="Your tittle, proffesion or small biography"
              className={styles.textArea}
              autoSize={{ minRows: 5 }}
            />
          </Form.Item>
        </Flex>
        <Form.Item noStyle>
          <Button className={styles.saveButton} size="large" type="primary">
            Save Changes
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};
