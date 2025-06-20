type ActivityItemProps = {
  name: string;
  type: "comment" | "rating" | "purchase";
  content: string;
  date: Date;
};
