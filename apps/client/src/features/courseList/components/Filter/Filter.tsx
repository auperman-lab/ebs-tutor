import { FilterItem } from '@clientFeatures/courseList/components/Filter/FilterItem';
import { Flex, Spin } from 'antd';
import { api } from '@clientApi';
import { useQuery } from '@tanstack/react-query';
import { LoadingOutlined } from '@ant-design/icons';

export const Filter = () => {

	const { data: categories = [], isLoading: isLoadingCategory, isError } = useQuery({
		queryKey: ['categories'],
		queryFn: api.courses.getCategories,
		staleTime: Infinity,
	});

	const { data: tags = [], isLoading: isLoadingTags } = useQuery({
		queryKey: ['tags'],
		queryFn: api.courses.getTags,
		staleTime: Infinity,
	});

	const categoryOptions = [
		...categories.map((cat) => ({
			label: cat.name,
			value: cat.id.toString(),
			icon: cat.icon,
		})),
	];

	const tagOptions = [
		...tags.map((tag: any) => ({
			label: tag.title,
			value: tag.id,
		})),
	];

	if (isLoadingCategory || isLoadingTags) return (<Spin indicator={<LoadingOutlined spin />} size="large" />);
	if (isError) return <div>error of course</div>;

	return (
		<Flex vertical gap={24}>
			<FilterItem
				label="Categories"
				options={categoryOptions}

			/>
			<FilterItem
				label="Tags"
				options={tagOptions}

			/>
		</Flex>
	);
};
