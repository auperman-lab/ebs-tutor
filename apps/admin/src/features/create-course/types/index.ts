export type Lecture = {
  id: string;
  title: string;
  active: boolean;
  can_skip: boolean;
  description: string;
};

export type Section = {
  id: string;
  title: string;
  lectures: Lecture[];
};
