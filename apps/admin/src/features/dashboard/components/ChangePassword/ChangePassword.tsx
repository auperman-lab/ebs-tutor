import { Button, Flex, Form, Input } from 'antd';
import { useStyles } from './styles';
import { ChangePasswordProps } from '../../types';
import { useMutation } from '@tanstack/react-query';
import { api } from '@api';

export const ChangePassword = () => {
  const { styles } = useStyles();
  const [form] = Form.useForm();

  const { mutate } = useMutation({
    mutationFn: (data: ChangePasswordProps) =>
      api.changePassword.changePassword(data),
  });

  const onFinish = async () => {
    const values: ChangePasswordProps = await form.validateFields();
    mutate(values);
    console.log('Success:', values);
  };

  return (
    <Flex vertical className={styles.mainBlock} gap={24}>
      <h1 className={styles.heading}>Change password</h1>
      <Form onFinish={onFinish} form={form}>
        <Flex vertical gap={64}>
          <Form.Item<ChangePasswordProps>
            name="currentPassword"
            layout="vertical"
            label="Current Password"
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item<ChangePasswordProps>
            name="newPassword"
            layout="vertical"
            label="New Password"
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            layout="vertical"
            label="Confirm Password"
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
          <Form.Item<ChangePasswordProps>>
            <Button type="primary" htmlType="submit" size="large">
              Save Changes
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Flex>
  );
};
