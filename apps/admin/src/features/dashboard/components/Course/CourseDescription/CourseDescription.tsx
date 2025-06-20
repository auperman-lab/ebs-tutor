import { useStyles } from "./CourseDescriptionStyles";
import { Typography, Image, Flex, Divider, Button, Rate } from "antd";
import { Globe, DotsTree } from "@assets/dashboard";

const { Text, Title } = Typography;

export const CourseDescription = () => {
  const { styles } = useStyles();

  const course = {
    id: 1,
    uploaded_at: "Uploaded: Jan 21, 2020",
    last_updated: "Last Updated: Sep 11, 2021",
    title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    description:
      "3 in 1 Course: Learn to design websites with Figma, build with Webflow, and make a living freelancing.",
    authors: [
      {
        id: 1,
        full_name: "Kevin Gilbert",
        avatar: "https://media.2x2tv.ru/content/images/2021/04/spor.jpg",
      },
      {
        id: 2,
        full_name: "Kristin Watson",
        avatar: "https://media.2x2tv.ru/content/images/2021/04/spor.jpg",
      },
    ],
    rating: 4.8,
    ratingsCounter: 451444,
    price: 13.99,
    revenue: 131800455.82,
  };

  return (
    <Flex className={styles.mainPart} gap={24}>
      <Image
        width={352}
        height={264}
        src="https://media.2x2tv.ru/content/images/2021/04/spor.jpg"
        preview={false}
      />
      <Flex vertical gap={24} className={styles.desctiption}>
        <Flex vertical gap={12}>
          <Flex gap={16}>
            <Text type="secondary" className={styles.datelabels}>
              {course.uploaded_at}
            </Text>
            <Text type="secondary" className={styles.datelabels}>
              {course.last_updated}
            </Text>
          </Flex>
          <Title level={4}>{course.title}</Title>
          <Text type="secondary">{course.description}</Text>
        </Flex>
        <Flex justify="space-between">
          <Flex gap={12}>
            <Flex className={styles.avatarGroup}>
              {course.authors.map((src, idx) => (
                <img key={idx} src={src.avatar} className={styles.avatar} />
              ))}
            </Flex>
            <Flex vertical gap={4}>
              <Text type="secondary">Created by:</Text>
              <Text className={styles.authors}>
                {course.authors.map((name) => name.full_name).join(" • ")}
              </Text>
            </Flex>
          </Flex>

          <Flex gap={8} align="center">
            <Flex>
              <Rate disabled defaultValue={Math.round(course.rating)} />
            </Flex>
            <Flex align="center" gap={8}>
              <Text className={styles.ratingScore}>{course.rating}</Text>
              <Text type="secondary"> ({course.ratingsCounter} Rating)</Text>
            </Flex>
          </Flex>
        </Flex>
        <Divider />
        <Flex justify="space-between">
          <Flex gap={32}>
            <Flex vertical gap={4}>
              <Text className={styles.price}>${course.price}</Text>
              <Text type="secondary">Course prices</Text>
            </Flex>
            <Divider className={styles.divider} size="large" type="vertical" />
            <Flex vertical gap={4}>
              <Text className={styles.price}>${course.revenue}</Text>
              <Text type="secondary">USD dollar revenue</Text>
            </Flex>
          </Flex>
          <Flex gap={16} align="center">
            <Button type="primary" size="large">
              Withdrew money
            </Button>
            <Button size="large">
              <img src={DotsTree} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
