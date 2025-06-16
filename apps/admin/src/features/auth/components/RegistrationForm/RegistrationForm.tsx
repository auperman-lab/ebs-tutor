import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Divider, Flex } from 'antd';
import type { RegistrationFormProps } from '../../types';
import { useMutation } from '@tanstack/react-query';
import { api } from '@api';
import './RegistrationForm.scss';
import { regexPatterns } from "@const";

export const RegistrationForm= () => {
  const [form] = Form.useForm();

  const { mutate } = useMutation({
    mutationFn: (data: RegistrationFormProps) => api.auth.register(data),
  });

  const onFinish: FormProps<RegistrationFormProps>['onFinish'] = (values) => {
    console.log('Success:', values);
    mutate(values);
  };

  const onFinishFailed: FormProps<RegistrationFormProps>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="registerForm">
      <h1>Create your account</h1>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Flex className="fullname" gap={18}>
          <Form.Item<RegistrationFormProps>
            label="First name"
            name="firstName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input variant="outlined" placeholder="First name" />
          </Form.Item>

          <Form.Item<RegistrationFormProps>
            label="Last name"
            name="lastName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Last name" />
          </Form.Item>
        </Flex>

        <Form.Item<RegistrationFormProps>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Email adress" />
        </Form.Item>

        <Form.Item<RegistrationFormProps>
          label="Password"
          name="password"
          rules={
            [{ required: true, message: 'Please input your password!' },
              {
                pattern: regexPatterns.password,
                message:
                  'Password must be at least 6 characters long and contain both letters and numbers.',
              },
            ]
          }
        >
          <Input.Password variant="outlined" placeholder="Create password" />
        </Form.Item>

        <Form.Item<RegistrationFormProps>
          label="Confirm password"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match!'));
              },
            }),
          ]}        >
          <Input.Password placeholder="Confirm password" />
        </Form.Item>

        <Flex justify="space-between">
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve() : Promise.reject(new Error('You must agree to the terms and conditions')),
              },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Checkbox
              style={{
                alignItems: 'center',
                height: '32px',
                letterSpacing: '-1px',
              }}
            >
              I Agree with all of your{' '}
              <a
                href="https://www.figma.com/design/vTqXwyiUThC5O3BYnkwLKo/E-Tutor---Learning-Management-System--Community---Community-?node-id=2616-75102&t=eUyJeZJGjNDy2qtG-0"
                target="blank"
              >
                Terms & Conditions
              </a>
            </Checkbox>
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Flex>
        <Divider plain style={{ color: '#8C94A3' }}>
          SIGN UP
        </Divider>
      </Form>
    </div>
  );
};
