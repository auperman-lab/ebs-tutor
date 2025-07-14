import { Flex } from 'antd';
import { HeroSection, TopCategorySection } from '@clientFeatures/home/components';
import { CourseSection } from '@clientFeatures/home/components/HomePage/CoursesSection';

export const HomePage = ()=>{
  return (
    <Flex align="center" justify="center" vertical>
      <HeroSection />
      <TopCategorySection />
      <CourseSection />
    </Flex>
  )
}
