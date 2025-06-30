
export type NotificationItemProps = {
  name: string;
  type: "comment" | "rating" | "purchase";
  content: string;
  date: Date;
};

export enum ActivityPeriod {
  Today = "today",
  Yesterday = "yesterday",
  Week = "week",
}


export const PeriodLabels: Record<ActivityPeriod, string> = {
  [ActivityPeriod.Today]: "Today",
  [ActivityPeriod.Yesterday]: "Yesterday",
  [ActivityPeriod.Week]: "This Week",
};


export const typeTextMap: Record<NotificationItemProps["type"], string> = {
  comment: "commented on your lecture",
  rating: "gave a 5 star rating on your course",
  purchase: "purchased your course",
};

