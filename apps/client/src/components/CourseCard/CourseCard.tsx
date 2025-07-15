import { Card, Divider, Flex, Tag, Tooltip, Typography, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { Category } from "@client/types";
import { NoImage, Star, User } from "@client/assets";
import { routes } from "@client/const";
import { useStyles } from "./styles";
import { useTheme } from "antd-style";

const { Text } = Typography;

type CourseCardProps = {
  title: string,
  id: number,
  users_count: number
  image_url: string
  categories: Category[]
  price?: number

}

export const CourseCard= ({title, id, users_count, image_url, price, categories}:CourseCardProps ) => {
  const navigate = useNavigate();
  const {styles} = useStyles();
  const palette = useTheme();


  const onClick = () =>{
    navigate(routes.courses + `/${id}`);
  }
  return (
      <Card
        hoverable
        cover={
          image_url ? (
            <Image
              alt="example"
              src={image_url}
              height={200}
              preview={false}
              className={styles.cover}
            />
          ) : (
            <NoImage  className={styles.cover} height={200}/>
          )
        }
        onClick={onClick}
      >
        <Flex vertical>
          <Flex justify="space-between" align="center">
            <Flex className={styles.tagContainer}>
              {categories?.length ? (
                categories.map((category) => (
                  <Tag key={category.id} bordered={false} className={styles.tag}>
                    {(category.name).toUpperCase()}
                  </Tag>
                ))
              ) : (
                <div className={styles.emptyTag}>
                </div>
              )}
            </Flex>

            <div className={styles.price}>
              {price === 0
                ? "Free"
                : price != null
                  ? `$${price.toFixed(2)}`
                  : "N/A"
              }
            </div>
          </Flex>

          <Tooltip title={title} placement="topRight" color={palette.common.black} arrow={false}>
            <div className={styles.title}>{title}</div>
          </Tooltip>

          <Divider className={styles.divider} />
          <Flex justify="space-between" align="center" gap={24}>
            <Flex align="center" gap={6}>
              <Star />
              <Text className={styles.text}>{4.1}</Text>
            </Flex>
            <Flex align="center" gap={6}>
              <User />
              {users_count}
              <Text type="secondary" color="#4E5566">
                {" "}
                students
              </Text>
            </Flex>
          </Flex>

        </Flex>
      </Card>

    )
}
