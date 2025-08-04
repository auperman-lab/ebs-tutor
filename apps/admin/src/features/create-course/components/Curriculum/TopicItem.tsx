import { Form, Input, Button, Flex } from 'antd';
import { Check, Trash, PencilLine, Delete } from '@assets';
import { FormInstance } from 'antd/es/form/Form';

type TopicItemProps = {
  form: FormInstance;
  lessonIndex: number;
  topicFieldName: number;
  topicIndex: number;
  isEditing: boolean;
  onToggleEdit: () => void;
  onCancelEdit: () => void;
  onDelete: () => void;
};

export function TopicItem({
  form,
  lessonIndex,
  topicFieldName,
  topicIndex,
  isEditing,
  onToggleEdit,
  onCancelEdit,
  onDelete,
}: TopicItemProps) {
  const title = form.getFieldValue([
    'lessons',
    lessonIndex,
    'topics',
    topicIndex,
    'title',
  ]);

  return (
    <>
      <Flex align="center" justify="space-between" gap={8}>
        {isEditing ? (
          <Form.Item
            name={[topicFieldName, 'title']}
            noStyle
            rules={[{ required: true, message: 'Enter topic title' }]}
          >
            <Input placeholder="Topic Title" />
          </Form.Item>
        ) : (
          <span>{title || 'Untitled Topic'}</span>
        )}

        <Flex>
          <Button
            type="text"
            icon={isEditing ? <Check /> : <PencilLine />}
            onClick={onToggleEdit}
          />

          {isEditing && (
            <Button type="text" icon={<Delete />} onClick={onCancelEdit} />
          )}

          <Button
            type="text"
            icon={<Trash />}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          />
        </Flex>
      </Flex>
    </>
  );
}
