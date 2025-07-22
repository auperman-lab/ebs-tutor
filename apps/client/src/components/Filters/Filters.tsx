import { Col, Input, Row, Select } from 'antd';
import { useURLQuery } from '@client/hooks';
import { useStyles } from './styles';
import { ParamsSortOption } from '@client/types';

const { Option } = Select;

type Props = {
  searchValue: string;
  setSearchValue: (v: string) => void;
  tutors: any[];
  hideTutorFilter?: boolean;
};

export const Filters = ({
  searchValue,
  setSearchValue,
  tutors,
  hideTutorFilter = false,
}: Props) => {
  const { getParams, setParams } = useURLQuery();
  const urlParams = getParams();
  const { styles } = useStyles();

  const onSearch = (value: string) => {
    setParams({ ...urlParams, search: value, page: 1 });
  };

  const onSortChange = (value: ParamsSortOption) => {
    setParams({ ...urlParams, sort: value, page: 1 });
  };

  const onTutorChange = (value: number[]) => {
    setParams({ ...urlParams, tutor: value, page: 1 });
  };

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12} lg={8}>
        <Input.Search
          placeholder="Search courses..."
          allowClear
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={onSearch}
          size="large"
        />
      </Col>
      <Col xs={24} md={12} lg={8}>
        <Select
          className={styles.select}
          value={urlParams.sort}
          onChange={onSortChange}
          size="large"
        >
          <Option value="ASC">Ascend</Option>
          <Option value="DESC">Descend</Option>
        </Select>
      </Col>
      {!hideTutorFilter && (
        <Col xs={24} md={12} lg={8}>
          <Select
            className={styles.select}
            mode="multiple"
            allowClear
            placeholder="Filter by tutor"
            value={urlParams.tutor}
            onChange={onTutorChange}
            optionFilterProp="label"
            size="large"
          >
            {tutors.map((tutor) => (
              <Option key={tutor.id} value={tutor.id}>
                {tutor.first_name + tutor.last_name}
              </Option>
            ))}
          </Select>
        </Col>
      )}
    </Row>
  );
};
