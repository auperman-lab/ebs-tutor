export interface Course {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  summary: any;
  image_path: string;
  video_path: any;
  duration: any;
  author_id: number;
  author: Author;
  authors: Author[];
  status: string;
  subtitle: string;
  language: any;
  description: any;
  categories: Category[];
  tags: Tag[];
  level: string;
  lessons?: Lesson[];
  poster_path: any;
  active_from: string;
  active_to: string;
  hours_to_complete: any;
  findable: boolean;
  scorm_sco_id: any;
  target_group: any;
  users_count: number;
  image_url: string;
  video_url: any;
  poster_url: any;
  teaser_url: any;
  public: boolean;
  fields: any;
  product: Product;
  related_product: any;
}

export interface Author {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  path_avatar: string;
  url_avatar: string;
  interests: string[];
  categories: string[];
  bio: string;
  address: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  is_active: boolean;
  parent_id?: number;
  icon: string;
  icon_class: any;
  created_at: string;
  updated_at: string;
  description: any;
  order: number;
  pivot: Pivot;
}

export interface CategoryResponse extends Category {
  name_with_breadcrumbs: string;
  count: number;
  order: number;
}

export interface Pivot {
  course_id: number;
  category_id: number;
}

export interface Lesson {
  id: number;
  title: string;
  summary: any;
  duration: any;
  active: boolean;
  order: number;
  course_id: number;
  active_from: any;
  active_to: any;
  lessons: any[];
  topics: Topic[];
}

export interface Topic {
  id: number;
  title: string;
  lesson_id: number;
  active: boolean;
  preview: boolean;
  topicable_id: number;
  topicable_type: string;
  summary?: string;
  introduction?: string;
  description: any;
  order: number;
  json: any;
  can_skip: boolean;
  duration: any;
}

export interface Tag {
  id: number;
  title: string;
  morphable_type: string;
  morphable_id: number;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  type: string;
  name: string;
  description: any;
  price: number; //important
  price_old: number; //important
  tax_rate: number;
  extra_fees: number;
  purchasable: boolean;
  duration: any;
  calculated_duration: number;
  limit_per_user: number;
  limit_total: number;
  productables: Productable[];
  teaser_url: any;
  poster_path: any;
  poster_url: any;
  buyable: boolean;
  owned: boolean;
  owned_quantity: number;
  categories: any[];
  tags: any[];
  updated_at: string;
  authors: Author[];
  available_quantity: number;
  sold_quantity: number; //important
  gross_price: number;
  subscription_period: any;
  subscription_duration: any;
  recursive: boolean;
  has_trial: any;
  trial_period: any;
  trial_duration: any;
  fields: any;
  related_products: any[];
}

export interface Productable {
  id: number;
  morph_class: string;
  productable_id: number;
  productable_type: string;
  quantity: number;
  name: string; // important ?
  description: string; //important ?
}
