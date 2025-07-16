import { Form, Input, Button, Flex } from 'antd';

import { Delete, PencilLine, Trash, Check } from '@assets';
import { FormInstance } from 'antd/es/form/Form';

type LessonItemProps = {
  index: number;
  name: number;
  form: FormInstance;
  isEditing: boolean;
  onToggleEdit: (index: number) => void;
  onCancelEdit: () => void;
  onDelete: () => void;
};

export function LessonItem({
  index,
  name,
  form,
  isEditing,
  onToggleEdit,
  onCancelEdit,
  onDelete,
}: LessonItemProps) {
  const title = form.getFieldValue(['lessons', index, 'title']);

  return (
    <Flex align="center" justify="space-between" gap={8}>
      {isEditing ? (
        <Form.Item
          name={[name, 'title']}
          noStyle
          rules={[{ required: true, message: 'Enter lesson title' }]}
        >
          <Input placeholder="Lesson Title" />
        </Form.Item>
      ) : (
        <span>{title || 'Untitled Lesson'}</span>
      )}

      <Flex gap={8}>
        <Button
          type="text"
          icon={isEditing ? <Check /> : <PencilLine />}
          onClick={() => onToggleEdit(index)}
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
  );
}
