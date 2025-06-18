import { useState } from "react";
import {
  Flex,
  Form,
  Input,
  Select,
  Upload,
  Button,
  Avatar,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useStyles } from "./AccountSettingsStyles";

export const AccountSettings = () => {
  const { styles } = useStyles();
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const options = [{ value: "+880", label: "+880" }];

  const beforeUpload = (file: File) => {
    const isImage = file.type.startsWith("image/");
    const isLt1M = file.size / 1024 / 1024 < 1;

    if (!isImage) {
      message.error("You can only upload image files!");
    }
    if (!isLt1M) {
      message.error("Image must be smaller than 1MB!");
    }

    return isImage && isLt1M;
  };

  const handleChange = (info: any) => {
    const file = info.file.originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Flex vertical className={styles.mainPart}>
      <Form>
        <Flex vertical gap={24}>
          <Flex className={styles.photoPart} justify="space-between" gap={24}>
            <Flex
              vertical
              justify="space-between"
              className={styles.accountSettings}
            >
              <h1 className={styles.heading}>Account Settings</h1>
              <Flex className={styles.fullName}>
                <Form.Item
                  layout="vertical"
                  label="First name"
                  style={{ flex: 1 }}
                >
                  <Input size="large" placeholder="First name" />
                </Form.Item>
                <Form.Item
                  layout="vertical"
                  label="Last name"
                  style={{ flex: 1 }}
                >
                  <Input size="large" placeholder="Last name" />
                </Form.Item>
              </Flex>

              <Form.Item layout="vertical" label="Username">
                <Input size="large" placeholder="Enter your username" />
              </Form.Item>
              <Form.Item layout="vertical" label="Phone Number">
                <Flex>
                  <Select
                    defaultValue="+880"
                    options={options}
                    style={{ width: 120 }}
                    size="large"
                  />
                  <Input
                    style={{ flex: 1 }}
                    placeholder="Your Phone number..."
                    size="large"
                  />
                </Flex>
              </Form.Item>
            </Flex>

            <Flex vertical className={styles.instructorPhoto} align="center">
              {imageUrl ? (
                <Avatar
                  src={imageUrl}
                  shape="square"
                  size={200}
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <Avatar
                  shape="square"
                  size={200}
                  style={{
                    backgroundColor: "#F5F7FA",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    color: "#999",
                  }}
                >
                  Upload
                </Avatar>
              )}

              <Upload
                showUploadList={false}
                beforeUpload={beforeUpload}
                onChange={handleChange}
                accept="image/*"
              >
                <Button icon={<UploadOutlined />} style={{ marginTop: 8 }}>
                  Upload Image
                </Button>
              </Upload>

              <p className={styles.imageNote}>
                Image size should be under 1MB and image ratio needs to be 1:1
              </p>
            </Flex>
          </Flex>

          <Form.Item layout="vertical" label="Title">
            <Input
              placeholder="Your tittle, proffesion or small biography"
              count={{
                show: true,
                max: 50,
              }}
              size="large"
            />
          </Form.Item>
          <Form.Item layout="vertical" label="Biography">
            <Input.TextArea
              placeholder="Your tittle, proffesion or small biography"
              className={styles.textArea}
              autoSize={{ minRows: 5 }}
            />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button className={styles.saveButton} type="primary">
              Save Changes
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Flex>
  );
};
