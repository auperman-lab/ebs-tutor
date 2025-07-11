import { Flex } from 'antd';
import { Hero, TopCategory } from '@clientFeatures/home/components';

export const HomePage = ()=>{
  return (
    <Flex align="center" justify="center" vertical>
      <Hero />
      <TopCategory />
    </Flex>
  )
}
