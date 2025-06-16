import { Button, Checkbox, Flex, Form, Input } from 'antd';
import { LoginFormProps } from '../../types';
import { useStyles } from './LoginFormStyles';
// @ts-ignore
import { ArrowRight } from '@phosphor-icons/react';
import { useMutation } from '@tanstack/react-query';
import { api } from '@api';
import { regexPatterns } from '@const';

export const LoginForm = () => {
  const [form] = Form.useForm();
  const { styles } = useStyles();

  const onFinish = async () => {
    const values: LoginFormProps = await form.validateFields();
    mutate(values);
    console.log('Success:', values);
  };

  const { mutate } = useMutation({
    mutationFn: (data: LoginFormProps) => api.auth.login(data),
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
        <Form.Item<LoginFormProps>
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
          <Input />
        </Form.Item>

        <Form.Item<LoginFormProps>
          label="Password"
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            {
              pattern: regexPatterns.password,
              message:
                'Password must be at least 6 characters long and contain both letters and numbers.',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Flex
          align="center"
          gap={16}
          justify="space-between"
          className={styles.form_submit}
        >
          <Form.Item<LoginFormProps>
            name="remember"
            valuePropName="checked"
            label={null}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className={styles.auth_button}
            >
              Sign In
              <ArrowRight />
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </div>
  );
};
