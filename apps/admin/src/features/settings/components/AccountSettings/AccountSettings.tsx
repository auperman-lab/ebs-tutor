import { useEffect, useState } from 'react';

import {
  Avatar,
  Button,
  Flex,
  Form,
  Input,
  message,
  Select,
  Upload,
} from 'antd';
import { UploadSimple } from '@assets';
import { useStyles } from './styles';
import { useAuth } from '@hooks';
import { useMutation, useQuery } from '@tanstack/react-query';
import { api } from '@api';
import { UserChangeSettingsRequest } from '@types';

export const AccountSettings = () => {
  const { styles } = useStyles();

  const authContext = useAuth();
  const [imageUrl, setImageUrl] = useState<string | null>(
    authContext.user?.avatar!
  );
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [form] = Form.useForm();

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

  const onChange = (info: any) => {
    const file = info.file.originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImageFile(file);
    }
  };

  const onFinish = async () => {
    const values = await form.validateFields();
    const data: UserChangeSettingsRequest = {
      first_name: values.firstName,
      last_name: values.lastName,
      phone: values.phone,
      bio: values.bio,
      address: values.address,
    };
    mutateInfo(data);

    if (imageFile) {
      const formData = new FormData();
      formData.append('avatar', imageFile);
      mutateAvatar(formData);
    }
  };

  const { mutate: mutateAvatar } = useMutation({
    mutationFn: (data: FormData) => api.user.changeAvatar(data),
  });

  const { mutate: mutateInfo } = useMutation({
    mutationFn: (data: UserChangeSettingsRequest) =>
      api.user.changeSettings(data),
  });

  const { data: profileData } = useQuery({
    queryKey: ['accountSettings'],
    queryFn: () => api.user.retrieveMyself(),
  });

  useEffect(() => {
    if (profileData) {
      form.setFieldsValue({
        firstName: profileData.first_name,
        lastName: profileData.last_name,
        username: profileData.first_name + ' ' + profileData.last_name,
        phone: profileData.phone,
        address: profileData.address,
        bio: profileData.bio,
      });
      setImageUrl(profileData.avatar);
    }
  }, [profileData]);

  return (
    <Form className={styles.mainPart} form={form}>
      <Flex vertical gap={24}>
        <Flex className={styles.photoPart} justify="space-between" gap={24}>
          <Flex vertical className={styles.accountSettings} gap={24}>
            <h1 className={styles.heading}>Account Settings</h1>
            <Flex vertical gap={64}>
              <Flex className={styles.fullName} gap={64}>
                <Form.Item
                  name="firstName"
                  layout="vertical"
                  label="First name"
                  className={styles.stretch}
                >
                  <Input size="large" placeholder="First name" />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  layout="vertical"
                  label="Last name"
                  className={styles.stretch}
                >
                  <Input size="large" placeholder="Last name" />
                </Form.Item>
              </Flex>
              <Form.Item layout="vertical" name="username" label="Username">
                <Input size="large" placeholder="Enter your username" />
              </Form.Item>
              <Form.Item layout="vertical" label="Phone Number">
                <Flex>
                  <Form.Item name="phonePrefix" noStyle initialValue="+880">
                    <Select
                      options={options}
                      size="large"
                      className={styles.select}
                    />
                  </Form.Item>
                  <Form.Item name="phone" noStyle>
                    <Input
                      className={styles.stretch}
                      placeholder="Your phone number..."
                      size="large"
                    />
                  </Form.Item>
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
              onChange={onChange}
              accept="image/*"
            >
              <Button icon={<UploadSimple />}>Upload Image</Button>
            </Upload>

            <p className={styles.imageNote}>
              Image size should be under 1MB and image ratio needs to be 1:1
            </p>
          </Flex>
        </Flex>

        <Flex vertical gap={64}>
          <Form.Item layout="vertical" name="address" label="Address">
            <Input
              placeholder="Your address"
              count={{
                show: true,
                max: 50,
              }}
              size="large"
            />
          </Form.Item>
          <Form.Item layout="vertical" name="bio" label="Biography">
            <Input.TextArea
              placeholder="Your tittle, proffesion or small biography"
              className={styles.textArea}
              autoSize={{ minRows: 5 }}
            />
          </Form.Item>
        </Flex>
        <Form.Item noStyle>
          <Button
            className={styles.saveButton}
            size="large"
            type="primary"
            onClick={onFinish}
          >
            Save Changes
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};
