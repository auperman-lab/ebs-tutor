import { Skeleton } from "antd";
import { useStyles } from "./styles";

export const CourseBreadCrumbsSkeleton = () => {
  const {styles} = useStyles();
  return (
    <div className={styles.container}>
      <Skeleton.Input active size="small" className={styles.skeletonItem} />
      <Skeleton.Input active size="small" className={styles.skeletonItem} />
      <Skeleton.Input active size="small" className={styles.skeletonItem} />
    </div>
  );
};
