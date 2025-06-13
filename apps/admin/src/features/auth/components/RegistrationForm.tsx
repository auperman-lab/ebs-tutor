import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import React from 'react';
import type { RegistrationForm } from '../types/RegistrationForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../../api/api';

const RegistrationForm: React.FC = () => {
  const client = useQueryClient();
  const [form] = Form.useForm();

  const { mutate } = useMutation({
    mutationFn: (data: RegistrationForm) => api.auth.register(data),
  });

  const onFinish: FormProps<RegistrationForm>['onFinish'] = (values) => {
    console.log('Success:', values);
    mutate(values);
  };

  const onFinishFailed: FormProps<RegistrationForm>['onFinishFailed'] = (
    errorInfo
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<RegistrationForm>
          label="First name"
          name="firstName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<RegistrationForm>
          label="Last name"
          name="lastName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<RegistrationForm>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<RegistrationForm>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<RegistrationForm>
          label="Confirm password"
          name="confirmPassword"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item<RegistrationForm>
        name="remember"
        valuePropName="checked"
        label={null}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegistrationForm;
