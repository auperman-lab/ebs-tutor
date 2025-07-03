import { Button, Checkbox, Flex, Form, Input } from "antd";
import { LoginFormProps } from "@clientFeatures/auth/types";
import { useStyles } from "./styles";
import { ArrowRight } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { api } from "@clientApi";
import { useAuth } from "@clientHooks";

export const LoginForm = () => {
  const [form] = Form.useForm();
  const { styles } = useStyles();

  const { login } = useAuth();

  const onFinish = async () => {
    const values: LoginFormProps = await form.validateFields();
    mutate(values);
    console.log("Success:", values);
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
          <Form.Item<LoginFormProps>
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
                type: "email",
              },
            ]}
          >
            <Input size="large" placeholder="Username or email address..." />
          </Form.Item>

          <Form.Item<LoginFormProps>
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
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
