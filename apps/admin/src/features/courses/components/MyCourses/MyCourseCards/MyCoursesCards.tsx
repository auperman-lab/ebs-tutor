import { Card, Col, Divider, Dropdown, Flex, MenuProps, Row, Tag, Typography } from "antd";
import { useStyles } from "./styles";
import { DotsThree, Star, User } from "@assets";
import { useNavigate } from "react-router-dom";
import { routes } from "@const";
import { useQuery } from "@tanstack/react-query";
import { api } from "@api";
import { ParamsType } from "@features/courses/types";
import { GetCoursesRequest } from "@types";

const { Title, Text } = Typography;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "My Account",
  },
  {
    type: "divider",
  },
  {
    key: "2",
    label: "Profile",
  },
  {
    key: "3",
    label: "Billing",
  },
  {
    key: "4",
    label: "Settings",
  },
];

export const MyCoursesCards = () => {
  const { styles } = useStyles();
  let navigate = useNavigate();


  const getQueryParams = () : GetCoursesRequest => {
    const searchParams = new URLSearchParams(location.search);
    const categoryValueRaw = searchParams.get("category") ?? "all";
    const categoryValue = categoryValueRaw === "all" ? undefined : Number(categoryValueRaw);
    const params: GetCoursesRequest =  {
      title: searchParams.get("search") || undefined,
      order: (searchParams.get("sort") as ParamsType["sort"]) || "ASC",
      order_by: "title",
      tag: searchParams.get("tag") || undefined ,
    };
    if (categoryValue !== undefined) {
      params.category_id = categoryValue;
    }
    return params;
  };

  const params = getQueryParams();

  const { data: courses, isLoading, isError } = useQuery({
    queryKey: ["myCourses", params],
    queryFn: () => api.courses.getAllCourses(params),
  });

  // todo: make skeleton for the courses
  // todo: make fail component (reusable)
  // todo: make pagination
  // todo: equalize components size

  if (isLoading) return <Text>Loading courses...</Text>;
  if (isError) return <Text type="danger">Failed to load courses.</Text>;

  return (
    <Row gutter={[24, 24]}>
      {courses!.map((item) => (
        <Col key={item.id} className="gutter-row" md={12} lg={8} xl={6}>
          <Card
            hoverable
            cover={
              <img
                alt="example"
                src={item.image_url}
                onClick={() => {
                  navigate(routes.courses + `/${item.title}`);
                }}
              />
            }
          >
            <Flex vertical>
              <Flex>
                {item.categories?.map((category) => (
                  <Tag key={category.id} color="geekblue" className={styles.tag}>
                    {category.name}
                  </Tag>
                ))}

              </Flex>

              <Title level={5}>{item.title}</Title>
              <Divider className={styles.divider} />
              <Flex justify="space-between" align="center" gap={24}>
                <Flex align="center" gap={6}>
                  <Star />
                  <Text className={styles.text}>{4.1}</Text>
                </Flex>
                <Flex align="center" gap={6}>
                  <User />
                  {item.users_count}
                  <Text type="secondary" color="#4E5566">
                    {" "}
                    students
                  </Text>
                </Flex>
              </Flex>
              <Divider className={styles.divider} />
              <Flex justify="space-between" align="center">
                <div className={styles.price}>
                  {item.product?.price === 0
                    ? "Free"
                    : item.product?.price != null
                      ? `$${item.product.price.toFixed(2)}`
                      : "N/A"}
                </div>
                <Dropdown menu={{ items }} trigger={["hover"]} arrow>
                  <div tabIndex={0}>
                    <DotsThree />
                  </div>
                </Dropdown>
              </Flex>
            </Flex>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
