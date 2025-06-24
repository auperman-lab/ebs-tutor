import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input, Flex, Typography } from 'antd';
import type { RegistrationFormProps } from '../../types';
import { useMutation } from '@tanstack/react-query';
import { api } from '@api';
import { LoginOptions } from '../LoginOptions/LoginOptions';
import { useStyles } from './styles';
import { regexPatterns } from '@const';

export const RegistrationForm = () => {
  const { styles } = useStyles();

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
    <Flex
      vertical={true}
      justify="center"
      align="center"
      className={styles.registerForm}
      gap={40}
    >
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
      >
        <Flex vertical={true} gap={24}>
          <Flex className={styles.fullname} gap={18}>
            <Form.Item<RegistrationFormProps>
              label="First name"
              name="firstName"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder="First name" size="large" />
            </Form.Item>

            <Form.Item<RegistrationFormProps>
              label="Last name"
              name="lastName"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input placeholder="Last name" size="large" />
            </Form.Item>
          </Flex>

          <Form.Item<RegistrationFormProps>
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Email adress" size="large" />
          </Form.Item>

          <Form.Item<RegistrationFormProps>
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              {
                pattern: regexPatterns.password,
                message:
                  'Password must be 6+ characters with latin letters and numbers.',
              },
            ]}
          >
            <Input.Password
              variant="outlined"
              placeholder="Create password"
              size="large"
            />
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
            ]}
          >
            <Input.Password placeholder="Confirm password" size="large" />
          </Form.Item>

          <Flex justify="space-between">
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(
                            'You must agree to the terms and conditions'
                          )
                        ),
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
                <Typography.Link
                  href="https://ant.design/components/typography#typography-demo-text"
                  target="_blank"
                >
                  Terms & Conditions
                </Typography.Link>
              </Checkbox>
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Flex>
        </Flex>
        <LoginOptions dividerText="SIGN UP" />
      </Form>
    </Flex>
  );
};
