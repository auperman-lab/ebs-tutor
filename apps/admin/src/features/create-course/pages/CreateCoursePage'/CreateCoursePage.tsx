import { Tabs, TabsProps } from 'antd';
import {
  BasicInformation,
  AdvanceInformation,
  Curriculum,
  PublishCourse,
} from '@createcourse';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Basic Information',
    children: <BasicInformation />,
  },
  {
    key: '2',
    label: 'Advance Information',
    children: <AdvanceInformation />,
  },
  {
    key: '3',
    label: 'Curriculum',
    children: <Curriculum />,
  },
  {
    key: '4',
    label: 'PublishCourse',
    children: <PublishCourse />,
  },
];

export const CreateCoursePage = () => {
  return <Tabs defaultActiveKey="1" items={items} />;
};
