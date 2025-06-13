import { Button, Checkbox, Form, Input } from 'antd';
import { ILoginForm } from '../../types/ILoginForm';
import './LoginForm.scss';
// @ts-ignore
import { ArrowRight } from '@phosphor-icons/react';

export const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = async () => {
    const values: ILoginForm = await form.validateFields();
    console.log('Success:', values);
  };

  return (
    <div className="login_form">
      <Form
        form={form}
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item<ILoginForm>
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

        <Form.Item<ILoginForm>
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
          <Form.Item<ILoginForm>
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
