import { useState } from 'react';
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Button, Input, Switch, Typography, Flex, Collapse, Form } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useStyles } from './styles';
import { Section, Lecture } from '@features/create-course/types';

const { Text } = Typography;

const createEmptyLecture = (): Lecture => ({
  id: uuidv4(),
  title: '',
  active: false,
  can_skip: false,
  description: '',
});

const createEmptySection = (): Section => ({
  id: uuidv4(),
  title: '',
  lectures: [createEmptyLecture()],
});

export const Curriculum = ({
  value = [],
  onChange,
}: {
  value?: Section[];
  onChange?: (sections: Section[]) => void;
}) => {
  const { styles } = useStyles();
  const sections = value || [];

  const [editingSectionId, setEditingSectionId] = useState<string | null>(null);
  const [editingLectureId, setEditingLectureId] = useState<string | null>(null);
  const [tempTitle, setTempTitle] = useState('');

  const updateSections = (updater: (prev: Section[]) => Section[]) => {
    const newSections = updater(sections);
    onChange?.(newSections);
  };

  const addSection = () => {
    updateSections((prev) => [...prev, createEmptySection()]);
  };

  const deleteSection = (sectionId: string) => {
    updateSections((prev) => prev.filter((s) => s.id !== sectionId));
  };

  const addLecture = (sectionId: string) => {
    updateSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? { ...s, lectures: [...s.lectures, createEmptyLecture()] }
          : s
      )
    );
  };

  const deleteLecture = (sectionId: string, lectureId: string) => {
    updateSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              lectures: s.lectures.filter((l) => l.id !== lectureId),
            }
          : s
      )
    );
  };

  const updateLectureField = (
    sectionId: string,
    lectureId: string,
    field: keyof Lecture,
    value: any
  ) => {
    updateSections((prev) =>
      prev.map((s) =>
        s.id === sectionId
          ? {
              ...s,
              lectures: s.lectures.map((l) =>
                l.id === lectureId ? { ...l, [field]: value } : l
              ),
            }
          : s
      )
    );
  };

  const updateSectionTitle = (sectionId: string, title: string) => {
    updateSections((prev) =>
      prev.map((s) => (s.id === sectionId ? { ...s, title } : s))
    );
  };

  const updateLectureTitle = (
    sectionId: string,
    lectureId: string,
    title: string
  ) => {
    updateLectureField(sectionId, lectureId, 'title', title);
  };

  const renderLectureCollapseItems = (section: Section) =>
    section.lectures.map((lecture) => ({
      key: lecture.id,
      label: (
        <Flex justify="space-between" align="center" gap={8}>
          {editingLectureId === lecture.id ? (
            <Flex style={{ flex: 1 }} gap={8}>
              <Input
                autoFocus
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
              <Button
                icon={<CheckOutlined />}
                size="small"
                type="primary"
                onClick={(e) => {
                  e.stopPropagation();
                  updateLectureTitle(section.id, lecture.id, tempTitle);
                  setEditingLectureId(null);
                  setTempTitle('');
                }}
              />
              <Button
                icon={<CloseOutlined />}
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditingLectureId(null);
                  setTempTitle('');
                }}
              />
            </Flex>
          ) : (
            <Flex
              justify="space-between"
              align="center"
              style={{ flex: 1 }}
              gap={4}
            >
              <Text>{lecture.title || 'Untitled Lecture'}</Text>
              <Flex gap={4}>
                <Button
                  icon={<EditOutlined />}
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingLectureId(lecture.id);
                    setTempTitle(lecture.title);
                  }}
                />
                <Button
                  icon={<DeleteOutlined />}
                  danger
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteLecture(section.id, lecture.id);
                  }}
                />
              </Flex>
            </Flex>
          )}
        </Flex>
      ),
      children: (
        <Flex vertical gap={8}>
          <Input
            placeholder="Description"
            value={lecture.description}
            onChange={(e) =>
              updateLectureField(
                section.id,
                lecture.id,
                'description',
                e.target.value
              )
            }
          />
          <Flex justify="space-between" align="center">
            <Text>Active</Text>
            <Switch
              checked={lecture.active}
              onChange={(checked) =>
                updateLectureField(section.id, lecture.id, 'active', checked)
              }
            />
          </Flex>
          <Flex justify="space-between" align="center">
            <Text>Can Skip</Text>
            <Switch
              checked={lecture.can_skip}
              onChange={(checked) =>
                updateLectureField(section.id, lecture.id, 'can_skip', checked)
              }
            />
          </Flex>
        </Flex>
      ),
    }));

  const sectionItems = sections.map((section) => ({
    key: section.id,
    label: (
      <Flex justify="space-between" align="center" gap={8}>
        {editingSectionId === section.id ? (
          <Flex align="center" style={{ flex: 1 }} gap={8}>
            <Input
              autoFocus
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
              onClick={(e) => e.stopPropagation()}
            />
            <Button
              icon={<CheckOutlined />}
              size="small"
              type="primary"
              onClick={(e) => {
                e.stopPropagation();
                updateSectionTitle(section.id, tempTitle);
                setEditingSectionId(null);
                setTempTitle('');
              }}
            />
            <Button
              icon={<CloseOutlined />}
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setEditingSectionId(null);
                setTempTitle('');
              }}
            />
          </Flex>
        ) : (
          <Flex
            justify="space-between"
            align="center"
            style={{ flex: 1 }}
            gap={8}
          >
            <Text>{section.title || 'Untitled Section'}</Text>
            <Flex gap={4}>
              <Button
                icon={<EditOutlined />}
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditingSectionId(section.id);
                  setTempTitle(section.title);
                }}
              />
              <Button
                icon={<PlusOutlined />}
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  addLecture(section.id);
                }}
              />
              <Button
                icon={<DeleteOutlined />}
                danger
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSection(section.id);
                }}
              />
            </Flex>
          </Flex>
        )}
      </Flex>
    ),
    children: (
      <Collapse items={renderLectureCollapseItems(section)} bordered={false} />
    ),
  }));

  return (
    <Flex vertical className={styles.container} gap={16}>
      <Flex justify="space-between" align="center">
        <Typography.Title level={4}>Curriculum</Typography.Title>
        <Button type="dashed" icon={<PlusOutlined />} onClick={addSection}>
          Add Section
        </Button>
      </Flex>
      <Collapse accordion items={sectionItems} />
    </Flex>
  );
};
