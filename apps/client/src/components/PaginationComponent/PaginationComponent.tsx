import { perPage } from '@clientConst';
import { Pagination } from 'antd';

export const PaginationComponent = () =>{
  return (
    <Pagination
      current={1}
      total={12*5}
      pageSize={perPage}
    />
  )
}
