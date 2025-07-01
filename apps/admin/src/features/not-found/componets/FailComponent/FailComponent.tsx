import { Alert } from "antd";

interface FailComponentProps {
  message?: string;
  description?: string;
}

export const FailComponent = ({ message = "Error", description = "Failed to load data.", }: FailComponentProps) => {
  return (
    <Alert
      type="error"
      message={message}
      description={description}
      showIcon
      style={{ margin: "16px 0" }}
    />
  );
};
