import { Form, Input, Select, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStyles } from './styles';
import { useURLQuery } from '@clientHooks';
import { api } from '@clientApi';

const sortOptions = [
  { label: 'Descendant', value: 'DESC' },
  { label: 'Ascendant', value: 'ASC' },
];

export const CoursesFilter = () => {
  const { styles } = useStyles();
  const [form] = Form.useForm();
  const location = useLocation();
  const { setParams, getParams } = useURLQuery();

  const { data: tutors = [] } = useQuery({
    queryKey: ['tutors'],
    queryFn: api.courses.getTutors,
    staleTime: Infinity,
  });

  const tutorOptions = [
    { label: 'All Tutors', value: 'all' },
    ...tutors.map((tutor) => ({
      label: `${tutor.first_name} ${tutor.last_name}`,
      value: tutor.id,
    })),
  ];

  useEffect(() => {
    const query = getParams();
    form.setFieldsValue({
      search: query.search || '',
      sort: query.sort || 'ASC',
      tutor: query.tutor?.[0] || 'all',
    });
  }, [location.search]);

  const handleValuesChange = (_: any, allValues: any) => {
    const result = {
      search: allValues.search || undefined,
      sort: allValues.sort,
      tutor: allValues.tutor !== 'all' ? [Number(allValues.tutor)] : undefined,
      page: 1,
    };
    setParams(result);
  };

  return (
    <Form
      form={form}
      //   className={styles.filterForm}
      onValuesChange={handleValuesChange}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item name="search">
            <Input
              prefix={<SearchOutlined />}
              placeholder="Search courses..."
              size="large"
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item name="sort">
            <Select options={sortOptions} size="large" />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item name="tutor">
            <Select
              options={tutorOptions}
              size="large"
              loading={!tutors}
              allowClear
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
