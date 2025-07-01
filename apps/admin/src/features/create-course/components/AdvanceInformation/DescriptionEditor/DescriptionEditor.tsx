import { useState } from 'react';
import { Flex, Typography } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useStyles } from './styles';
import { CustomToolbar } from './CustomToolbar';

const { Text } = Typography;

export const DescriptionEditor = () => {
  const [value, setValue] = useState('');
  const { styles } = useStyles();

  return (
    <Flex vertical gap={8}>
      <Text className={styles.title}>Course Description</Text>
      <div>
        <ReactQuill
          value={value}
          onChange={setValue}
          placeholder="Enter your course descriptions"
          modules={{
            toolbar: '#custom-toolbar',
          }}
          formats={[
            'bold',
            'italic',
            'underline',
            'strike',
            'list',
            'bullet',
            'link',
          ]}
          className={styles.editor}
        />
        <CustomToolbar />
      </div>
    </Flex>
  );
};
