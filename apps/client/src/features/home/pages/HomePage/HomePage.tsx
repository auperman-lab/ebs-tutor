import { Flex } from 'antd';
import { HeroSection, TopCategorySection, CourseSection ,LastSection} from '@client/features/home/components';

export const HomePage = ()=>{
  return (
    <Flex align="center" justify="center" vertical>
      <HeroSection />
      <TopCategorySection />
      <CourseSection />
      <LastSection/>
    </Flex>
  )
}
