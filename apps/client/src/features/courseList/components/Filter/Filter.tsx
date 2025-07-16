import { FilterItem } from './FilterItem';
import { Flex, Spin } from 'antd';
import { api } from '@clientApi';
import { useQuery } from '@tanstack/react-query';
import { useURLQuery } from '@clientHooks';

export const Filter = () => {
  const { setParams, getParams } = useURLQuery();

  const params = getParams();
  const selectedCategories = params.category ?? [];
  const selectedTags = params.tag ?? [];
  const selectedTutors = params.tutor ?? [];

  const {
    data: categories = [],
    isLoading: isLoadingCategory,
    isError,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: api.courses.getCategories,
    staleTime: Infinity,
  });

  const { data: tags = [], isLoading: isLoadingTags } = useQuery({
    queryKey: ['tags'],
    queryFn: api.courses.getTags,
    staleTime: Infinity,
  });

  const { data: tutors = [], isLoading: isLoadingTutors } = useQuery({
    queryKey: ['tutors'],
    queryFn: api.courses.getTutors,
    staleTime: Infinity,
  });

  const categoryOptions = [
    ...categories.map((cat) => ({
      label: cat.name,
      value: cat.id.toString(),
      icon: cat.icon,
    })),
  ];

  const tutorOptions = [
    ...tutors.map((tutor) => ({
      label: tutor.first_name + tutor.last_name,
      value: tutor.id.toString(),
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

  const onTutorChange = (checked: string[]) => {
    const ids = checked.map(Number);
    setParams({ tutor: ids, page: 1 });
  };

  const onTagChange = (ids: string[]) => {
    const titles = tagOptions
      .filter((tagOption) => ids.includes(tagOption.value))
      .map((tagOption) => tagOption.label);
    setParams({ tag: titles, page: 1 });
  };

  if (isError) return <div>error of course</div>;

  return (
    <Flex vertical gap={24}>
      {isLoadingCategory ? (
        <Spin size="large" />
      ) : (
        <FilterItem
          label="Categories"
          options={categoryOptions}
          onChange={onCategoryChange}
          checkedItems={selectedCategories.map(String)}
        />
      )}

      {isLoadingTags ? (
        <Spin size="large" />
      ) : (
        <FilterItem
          label="Tags"
          options={tagOptions}
          onChange={onTagChange}
          checkedItems={selectedTags}
        />
      )}

      {isLoadingTutors ? (
        <Spin size="large" />
      ) : (
        <FilterItem
          label="Tutors"
          options={tutorOptions}
          onChange={onTutorChange}
          checkedItems={selectedTutors.map(String)}
        />
      )}
    </Flex>
  );
};
