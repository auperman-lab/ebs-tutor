import { Flex, Typography, Form, Input, Button } from 'antd';
import { useStyles } from './styles';
import { Delete, Add } from '@assets';

const { Text } = Typography;

type ListComponentProps = {
  name: string;
  title: string;
  keyItem: string;
  placeholder: string;
};

export const ListComponent = ({
  name,
  title,
  keyItem,
  placeholder,
}: ListComponentProps) => {
  const { styles } = useStyles();

  return (
    <Form.List name={name}>
      {(fields, { add, remove }) => {
        const canAdd = fields.length < 8;

        return (
          <Flex vertical gap={12}>
            <Flex justify="space-between" align="center">
              <Text className={styles.title}>
                {title} ({fields.length}/8)
              </Text>
              <Button
                type="dashed"
                onClick={() => add()}
                icon={<Add width={16} height={16} />}
                disabled={!canAdd}
              >
                Add new
              </Button>
            </Flex>

            {fields.map(({ key, name, ...restField }) => (
              <Flex gap={24} align="center" key={key}>
                <Form.Item
                  {...restField}
                  name={[name, keyItem]}
                  className={styles.stretch}
                >
                  <Input
                    size="large"
                    placeholder={placeholder}
                    count={{
                      show: true,
                      max: 120,
                    }}
                  />
                </Form.Item>

                <Button type="dashed">
                  <Delete onClick={() => remove(name)} />
                </Button>
              </Flex>
            ))}
          </Flex>
        );
      }}
    </Form.List>
  );
};
