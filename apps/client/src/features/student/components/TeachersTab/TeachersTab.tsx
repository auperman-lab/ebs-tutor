import { Flex, Typography, Row, Col, Spin, Empty, Input } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { api } from '@clientApi';
import { useURLQuery } from '@clientHooks';
import { useStyles } from './styles';
import { InstructorCard } from '@clientComponents';
import { useState } from 'react';
import { Author } from '@clientTypes';

const { Title } = Typography;

export const TeachersTab = () => {
  const { styles } = useStyles();
  const { getParams, setParams } = useURLQuery();
  const urlParams = getParams();

  const [searchValue, setSearchValue] = useState(urlParams.search || '');

  const { data, isLoading } = useQuery({
    queryKey: ['tutors'],
    queryFn: api.courses.getTutors,
    staleTime: Infinity,
  });

  const tutors: Author[] = data || [];

  const filteredTutors = tutors.filter((tutor) => {
    const fullName = (tutor.first_name + ' ' + tutor.last_name).toLowerCase();
    return fullName.includes(searchValue.toLowerCase());
  });

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setParams({ ...urlParams, search: value, page: 1 });
  };

  return (
    <Flex vertical className={styles.container} gap={24}>
      <Title level={4}>Tutors ({filteredTutors.length})</Title>

      <Input
        placeholder="Search tutors"
        value={searchValue}
        onChange={onSearchChange}
        allowClear
        className={styles.searchInput}
        size="large"
      />

      {isLoading ? (
        <Spin size="large" />
      ) : !filteredTutors.length ? (
        <Empty description="No tutors found" />
      ) : (
        <Row gutter={[24, 24]}>
          {filteredTutors.map((tutor) => (
            <Col key={tutor.id} lg={12} xl={6}>
              <InstructorCard
                id={tutor.id}
                name={tutor.first_name + ' ' + tutor.last_name}
                bio={tutor.bio}
                icon={tutor.url_avatar}
                isLoggedIn={true}
              />
            </Col>
          ))}
        </Row>
      )}
    </Flex>
  );
};
