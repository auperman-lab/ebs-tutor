import { Pagination } from 'antd';
import { useURLQuery } from '@clientHooks';
import { perPage } from '@clientConst';

type PaginationComponentProps = {
  totalItems: number;
};

export const PaginationComponent = ({ totalItems }: PaginationComponentProps) => {
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
