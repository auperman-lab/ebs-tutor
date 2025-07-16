import { Col, Form, Input, Row, Select } from 'antd';
import { useStyles } from './styles';
import { MagnifyingGlass } from '@assets';
import { api } from '@api';
import { useQuery } from '@tanstack/react-query';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ParamsType } from '@features/courses/types';

const { Option } = Select;
const sort = [
  {
    label: 'Descendant',
    value: 'DESC',
  },
  {
    label: 'Ascendant',
    value: 'ASC',
  },
];

const initialValues: ParamsType = {
  search: '',
  sort: 'ASC',
  category: 'all',
  tag: 'all',
};

export const CoursesFiltration = () => {
  const { styles } = useStyles();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [form] = Form.useForm();
  const location = useLocation();

  const { data: categories = [], isLoading: isLoadingCategory } = useQuery({
    queryKey: ['categories'],
    queryFn: api.courses.getCategories,
    staleTime: Infinity,
  });

  const { data: tags = [], isLoading: isLoadingTags } = useQuery({
    queryKey: ['tags'],
    queryFn: api.courses.getTags,
    staleTime: Infinity,
  });

  const categoryOptions = [
    { label: 'All Categories', value: 'all' },
    ...categories.map((cat) => ({
      label: cat.name,
      value: cat.id,
    })),
  ];

  const tagOptions = [
    { label: 'All Tags', value: 'all' },
    ...tags.map((tag: any) => ({
      label: tag.title,
      value: tag.id,
    })),
  ];

  const filterParams = (allValues: ParamsType): ParamsType => {
    const result: ParamsType = {};

    for (const [key, value] of Object.entries(allValues)) {
      const defaultValue = initialValues[key as keyof ParamsType];

      if (value === defaultValue) continue;

      if (key === 'tag') {
        const tag = tagOptions.find((t) => t.value === value);
        if (tag) result[key] = tag.label;
      } else {
        result[key as keyof ParamsType] = value as any;
      }
    }

    return result;
  };

  const toQueryString = (params: Partial<ParamsType>) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (!!value && value !== 'All Categories') {
        searchParams.set(key, String(value));
      }
    });
    return searchParams.toString();
  };

  const getQueryParams = (): Partial<ParamsType> => {
    const categoryValueRaw = searchParams.get('category') ?? 'all';
    const categoryValue =
      categoryValueRaw === 'all' ? 'all' : Number(categoryValueRaw);
    const categoryOption = categoryOptions.find(
      (c) => c.value === categoryValue
    );

    return {
      search: searchParams.get('search') || '',
      sort: (searchParams.get('sort') as ParamsType['sort']) || 'ASC',
      category: categoryOption?.label?.toString() ?? 'all',
      tag: searchParams.get('tag') || 'all',
      page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
    };
  };

  useEffect(() => {
    if (!isLoadingCategory && !isLoadingTags) {
      const params = getQueryParams();
      form.setFieldsValue(params);
    }
  }, [isLoadingCategory, isLoadingTags, location.search]);

  return (
    <Form
      form={form}
      className={styles.container}
      onValuesChange={(changed, allValues) => {
        const finalParams = filterParams(allValues);
        const queryString = toQueryString(finalParams);
        navigate(`${location.pathname}?${queryString}`, { replace: true });
      }}
      initialValues={initialValues}
    >
      <Row gutter={24}>
        <Col sm={24} lg={9}>
          <Form.Item name="search">
            <Input
              addonBefore={<MagnifyingGlass />}
              placeholder="Search in your courses..."
              size="large"
            />
          </Form.Item>
        </Col>

        <Col sm={24} lg={5}>
          <Form.Item name="sort">
            <Select size="large" className={styles.select} options={sort} />
          </Form.Item>
        </Col>

        <Col sm={24} lg={5}>
          <Form.Item name="category">
            <Select
              size="large"
              className={styles.select}
              options={categoryOptions}
              loading={isLoadingCategory}
            />
          </Form.Item>
          <Option value="all">All Category</Option>
        </Col>

        <Col className="gutter-row" sm={24} lg={5}>
          <Form.Item name="tag">
            <Select
              size="large"
              className={styles.select}
              options={tagOptions}
              loading={isLoadingTags}
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
