import { FilterItem } from './FilterItem';
import { Flex, Spin } from 'antd';
import { api } from '@clientApi';
import { useQuery } from '@tanstack/react-query';
import { LoadingOutlined } from '@ant-design/icons';
import { useURLQuery } from '@clientHooks';

export const Filter = () => {
	const { setParams, getParams } = useURLQuery();

	const params = getParams();
	const selectedCategories = params.category ?? [];
	const selectedTags = params.tag ?? [];

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
			value: tag.title,
		})),
	];


	const onCategoryChange = (checked: string[]) => {
		const ids = checked.map(Number);
		setParams({ category: ids, page: 1 });
	};

	const onTagChange = (ids: string[]) => {
		const titles = tagOptions
			.filter((tagOption) => ids.includes(tagOption.value))
			.map((tagOption) => tagOption.label);
		setParams({ tag: titles, page: 1 });
	};

	if (isLoadingCategory || isLoadingTags) return (<Spin indicator={<LoadingOutlined spin />} size="large" />);
	if (isError) return <div>error of course</div>;

	return (
		<Flex vertical gap={24}>
			<FilterItem
				label="Categories"
				options={categoryOptions}
				onChange={onCategoryChange}
				checkedItems={selectedCategories.map(String)}

			/>
			<FilterItem
				label="Tags"
				options={tagOptions}
				onChange={onTagChange}
				checkedItems={selectedTags}
			/>
		</Flex>
	);
};
