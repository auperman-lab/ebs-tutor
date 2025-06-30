import { Button, Checkbox, Flex, Form, Input } from "antd";
import { LoginFormProps } from "@features/auth/types";
import { useStyles } from "./LoginFormStyles";
// @ts-ignore
import { ArrowRight } from '@assets';
import { useStyles } from './LoginFormStyles';
import { api } from '@api';
import { useAuth } from '@hooks';

export const LoginForm = () => {
  const [form] = Form.useForm();
  const { styles } = useStyles();

  const { login } = useAuth();

  const onFinish = async () => {
    const values: LoginFormProps = await form.validateFields();
    mutate(values);
    console.log('Success:', values);
  };

  const { mutate } = useMutation({
    mutationFn: (data: LoginFormProps) => api.auth.login(data),
    onSuccess: (data) => login(data),
  });

  return (
    <div className={styles.login_form}>
      <Form
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Flex vertical gap={24}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                type: 'email',
              },
            ]}
          >
            <Input size="large" placeholder="Username or email address..." />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              // {
              //   pattern: regexPatterns.password,
              //   message:
              //     'Password must be at least 6 characters long and contain both letters and numbers.',
              // },
            ]}
          >
            <Input.Password size="large" placeholder="Password" />
          </Form.Item>
        </Flex>

        <Flex
          align="center"
          gap={16}
          justify="space-between"
          className={styles.form_submit}
        >
          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className={styles.auth_button}
            >
              <Flex align="center" gap={12}>
                Sign In
                <ArrowRight />
              </Flex>
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </div>
  );
};
