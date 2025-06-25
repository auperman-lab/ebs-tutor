import { Button, Checkbox, Flex, Form } from "antd";
import { useStyles } from "./NotificationSettingsStyles";
import { useState } from "react";

export const NotificationsSettings = () => {
  const { styles } = useStyles();

  const notificationsData = [
    { id: "notify-purchase", label: "I want to know who buy my course." },
    {
      id: "notify-review",
      label: "I want to know who write a review on my course.",
    },
    {
      id: "notify-comment-lecture",
      label: "I want to know who commented on my lecture.",
    },
    {
      id: "notify-download-notes",
      label: "I want to know who download my lecture notes.",
    },
    {
      id: "notify-reply-comment",
      label: "I want to know who replied on my comment.",
    },
    {
      id: "notify-profile-visits",
      label: "I want to know daily how many people visited my profile.",
    },
    {
      id: "notify-download-attachments",
      label: "I want to know who download my lecture attach file.",
    },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const onChange = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const onSave = () => {
    console.log("ыаыуааыа", selectedIds);
  };

  return (
    <Flex
      vertical
      justify="space-between"
      className={styles.mainBlock}
      gap={24}
    >
      <h1 className={styles.heading}>Notifications</h1>
      <Form>
        <Flex vertical gap={32}>
          <Flex vertical gap={16}>
            {notificationsData.map(({ id, label }) => (
              <Form.Item key={id} noStyle>
                <Checkbox
                  checked={selectedIds.includes(id)}
                  onChange={() => onChange(id)}
                >
                  {label}
                </Checkbox>
              </Form.Item>
            ))}
          </Flex>
          <Form.Item noStyle>
            <Button type="primary" style={{ width: 130 }} onClick={onSave}>
              Save Changes
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </Flex>
  );
};
