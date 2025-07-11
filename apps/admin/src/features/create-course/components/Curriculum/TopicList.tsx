import { Button, Collapse, Form, Input, InputNumber, Switch, Flex } from 'antd';
import { useStyles } from './styles';
import { PlusOutlined } from '@ant-design/icons';
import { FormInstance } from 'antd/es/form/Form';
import { TopicItem } from './TopicItem';

type TopicListProps = {
  form: FormInstance;
  lessonIndex: number;
  lessonName: number;
  editingTopic: { lesson: number; topic: number } | null;
  onToggleTopicEdit: (lessonIndex: number, topicIndex: number) => void;
  onCancelTopicEdit: () => void;
  onDeleteTopic: (
    topicFieldName: number,
    remove: (name: number) => void
  ) => void;
};

export function TopicList({
  form,
  lessonIndex,
  lessonName,
  editingTopic,
  onToggleTopicEdit,
  onCancelTopicEdit,
  onDeleteTopic,
}: TopicListProps) {
  const { styles } = useStyles();
  return (
    <Form.List name={[lessonName, 'topics']}>
      {(topicFields, { add, remove }) => {
        const items = topicFields.map((topicField, topicIndex) => {
          const isEditing =
            editingTopic?.lesson === lessonIndex &&
            editingTopic?.topic === topicIndex;

          return {
            key: topicField.key.toString(),
            label: (
              <TopicItem
                form={form}
                lessonIndex={lessonIndex}
                topicFieldName={topicField.name}
                topicIndex={topicIndex}
                isEditing={isEditing}
                onToggleEdit={() => onToggleTopicEdit(lessonIndex, topicIndex)}
                onCancelEdit={onCancelTopicEdit}
                onDelete={() => onDeleteTopic(topicField.name, remove)}
              />
            ),
            children: isEditing ? null : (
              <Flex vertical gap={18}>
                <Form.Item
                  name={[topicField.name, 'description']}
                  label="Description"
                >
                  <Input placeholder="Topic description" />
                </Form.Item>

                <Form.Item
                  name={[topicField.name, 'duration']}
                  label="Duration"
                >
                  <InputNumber
                    min={1}
                    max={8}
                    placeholder="Topic duration"
                    className={styles.stretch}
                  />
                </Form.Item>

                <Form.Item
                  name={[topicField.name, 'active']}
                  label="Active"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>

                <Form.Item
                  name={[topicField.name, 'can_skip']}
                  label="Skippable"
                  valuePropName="checked"
                >
                  <Switch />
                </Form.Item>
              </Flex>
            ),
          };
        });

        return (
          <>
            <Collapse accordion items={items} />
            <Button
              type="dashed"
              onClick={() =>
                add({
                  title: '',
                  description: '',
                  duration: 1,
                  active: false,
                  can_skip: false,
                })
              }
              icon={<PlusOutlined />}
              block
              className={styles.addTopic}
            >
              Add Topic
            </Button>
          </>
        );
      }}
    </Form.List>
  );
}
