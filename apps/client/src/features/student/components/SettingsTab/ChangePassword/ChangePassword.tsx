import { Button, Flex, Form, Input, Typography } from 'antd';
import { useStyles } from './styles';
import { useMutation } from '@tanstack/react-query';
import { api } from '@clientApi';
import { ChangePasswordRequest } from '@clientTypes';

const { Title } = Typography;

export const ChangePassword = () => {
  const { styles } = useStyles();
  const [form] = Form.useForm();

  const { mutate } = useMutation({
    mutationFn: (data: ChangePasswordRequest) => api.auth.changePassword(data),
  });

  const onFinish = async () => {
    const values = await form.validateFields();

    const passwordData = {
      current_password: values.currentPassword,
      new_password: values.newPassword,
      new_confirm_password: values.confirmPassword,
    };
    mutate(passwordData);
  };

  return (
    <Flex vertical className={styles.mainBlock} gap={24}>
      <Title level={4}>Change password</Title>
      <Form onFinish={onFinish} form={form}>
        <Flex vertical gap={64}>
          <Form.Item
            name="currentPassword"
            layout="vertical"
            label="Current Password"
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item name="newPassword" layout="vertical" label="New Password">
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            layout="vertical"
            label="Confirm Password"
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Save Changes
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Flex>
  );
};
