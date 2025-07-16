import { Divider, Flex } from 'antd';
import { ChangePassword, GeneralInfo } from '@clientFeatures/student';

export const SettingsTab = () => {
  return (
    <Flex vertical gap={18}>
      <GeneralInfo />
      <Divider />
      <ChangePassword />
    </Flex>
  );
};
