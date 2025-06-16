import { Button, Checkbox, Form, Input } from 'antd';
import { LoginFormProps } from '../../types/LoginFormProps';
import './LoginForm.scss';
// @ts-ignore
import { ArrowRight } from '@phosphor-icons/react';
import { useMutation } from '@tanstack/react-query';
import { api } from '../../../../api/api';

export const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = async () => {
    const values: LoginFormProps = await form.validateFields();
    mutate(values);
    console.log('Success:', values);
  };

  const { mutate } = useMutation({
    mutationFn: (data: LoginFormProps) => api.auth.login(data),
  });

  return (
    <div className="login_form">
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
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message:
                'Password must be at least 6 characters long and contain both letters and numbers.',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <div className="form-submit">
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
              className="auth_button"
            >
              Sign In
              <ArrowRight />
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};
