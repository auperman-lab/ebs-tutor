import { Pagination } from 'antd';
import { useURLQuery } from '@client/hooks';
import { perPage } from '@client/const';

type PaginationComponentProps = {
  totalItems: number;
};

export const PaginationComponent = ({
  totalItems,
}: PaginationComponentProps) => {
  const { getParams, setParams } = useURLQuery();
  const params = getParams();

  const currentPage = params.page ?? 1;

  const handleChange = (page: number) => {
    setParams({ page });
  };

  return (
    <Pagination
      current={currentPage}
      total={totalItems}
      pageSize={perPage}
      onChange={handleChange}
    />
  );
};
