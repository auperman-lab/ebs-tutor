import { Flex } from 'antd';
import { HeroSection, TopCategorySection, CourseSection } from '@clientFeatures/home/components';

export const HomePage = ()=>{
  return (
    <Flex align="center" justify="center" vertical>
      <HeroSection />
      <TopCategorySection />
      <CourseSection />
    </Flex>
  )
}
