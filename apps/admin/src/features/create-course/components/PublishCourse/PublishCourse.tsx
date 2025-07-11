import {
  Flex,
  Typography,
  Divider,
  Form,
  Button,
  Switch,
  Select,
  message,
  InputNumber,
} from 'antd';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useStyles } from './styles';
import { api } from '@api';
import { useCourse } from '@context';
import type { TabsProps } from '@features/create-course/types';
import { Product } from '@types';

const { Title } = Typography;

export const PublishCourse = ({
  onHandleNext,
  onHandleBack,
  activeKey,
}: TabsProps) => {
  const { styles } = useStyles();
  const queryClient = useQueryClient();
  const [form] = Form.useForm();
  const params = useParams();
  const { setCourse, course } = useCourse();

  useEffect(() => {
    if (course) {
      form.setFieldsValue({
        ...course,
        price: course.product?.price,
        price_old: course.product?.price_old,
        tax_rate: course.product?.tax_rate,
        limit_total: course.product?.limit_total,
        limit_per_user: course.product?.limit_per_user,
        type: course.product?.type,
        purchasable: course.product?.purchasable,
        buyable: course.product?.buyable,
      });
    }
  }, [form, course]);

  const createProductMutation = useMutation({
    mutationFn: (data: Product) => api.courses.createProduct(data),
    onError: (error) => console.error(error),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['course'] }),
  });

  const updateProductMutation = useMutation({
    mutationFn: (data: Product) => api.courses.updateProduct(data),
    onError: (err) => {
      console.error('Update course error:', err);
      message.error('Failed to update course.');
    },
  });

  const onSave = async () => {
    try {
      const values = await form.validateFields();

      if (!params.id || !course) {
        message.error('Course ID or course is misssing.');
        return;
      }

      const productables = {
        id: course.id,
        class: 'EscolaLms\\Courses\\Models\\Course',
        productable_id: course.id,
        productable_type: 'App\\Models\\Course',
        quantity: 1,
        name: course.title,
        description: course.description,
      };

      const productBase: Product = {
        id: Number(params.id),
        price: values.price,
        name: course.title,
        price_old: values.price_old,
        tax_rate: values.tax_rate,
        limit_total: values.limit_total,
        limit_per_user: values.limit_per_user,
        type: values.type,
        purchasable: values.purchasable,
        buyable: values.buyable,
        productables: [productables],
      };

      if (course.product) {
        const product: Product = {
          ...productBase,
          id: course.product.id,
        };

        await updateProductMutation.mutateAsync(product);
        const updatedCourse = await api.courses.getCourse(params.id);
        setCourse(updatedCourse);
      } else {
        const created = await createProductMutation.mutateAsync(
          productBase as Product
        );
        setCourse({
          ...course,
          product: created,
        });
      }
    } catch (error) {
      console.error('Error saving advanced info:', error);
    }
  };

  const onNext = async () => {
    await onSave();
    onHandleNext();
  };

  return (
    <Form form={form}>
      <Flex vertical className={styles.container}>
        <Title level={4}>Publis Course</Title>
        <Divider orientationMargin={32} />
        <Flex gap={32}>
          <Form.Item
            layout="vertical"
            label="Price"
            name="price"
            className={styles.stretch}
          >
            <InputNumber
              size="large"
              placeholder="Course price"
              className={styles.stretch}
            />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Old price"
            name="price_old"
            className={styles.stretch}
          >
            <InputNumber
              size="large"
              placeholder="Old price"
              className={styles.stretch}
            />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Tax Rate"
            name="tax_rate"
            className={styles.stretch}
          >
            <InputNumber
              size="large"
              placeholder="tax_rate"
              className={styles.stretch}
            />
          </Form.Item>
        </Flex>

        <Flex gap={32} style={{ marginTop: 64 }}>
          <Form.Item
            layout="vertical"
            label="Limit total"
            name="limit_total"
            className={styles.stretch}
          >
            <InputNumber
              size="large"
              placeholder="Buyable quantity"
              className={styles.stretch}
            />
          </Form.Item>{' '}
          <Form.Item
            layout="vertical"
            label="Limit per user"
            name="limit_per_user"
            initialValue={1}
            className={styles.stretch}
          >
            <InputNumber
              size="large"
              placeholder="Limit per user"
              className={styles.stretch}
            />
          </Form.Item>
          <Form.Item
            layout="vertical"
            label="Product type"
            className={styles.stretch}
            name="type"
          >
            <Select
              size="large"
              placeholder="Product type"
              options={[
                {
                  label: 'Single',
                  value: 'single',
                },
              ]}
            />
          </Form.Item>
        </Flex>

        <Flex style={{ marginTop: 64 }} gap={32}>
          <Form.Item
            name="purchasable"
            label="Purchasable"
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item name="buyable" label="Buyable" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Flex>

        <Flex className={styles.optionsButtons} justify="space-between">
          <Button
            size="large"
            variant="filled"
            className={styles.save}
            onClick={onHandleBack}
            style={activeKey === '1' ? { visibility: 'hidden' } : {}}
          >
            Back
          </Button>

          <Flex gap={32}>
            <Button
              size="large"
              variant="filled"
              className={styles.save}
              onClick={onSave}
            >
              {params.id ? 'Edit' : 'Save'}
            </Button>
            <Button size="large" type="primary" onClick={onNext}>
              Preview
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Form>
  );
};
