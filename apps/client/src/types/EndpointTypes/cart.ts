import { Product } from '@client/types';

export type addCartItemEndpointRequest = {
  id: number;
};

export type deleteCartItemEndpointResponse = {
  operation: string;
  difference: number;
  quantity_owned: number;
  quantity_in_cart: number;
  limit: number;
  buyable: boolean;
};

export type getCartEndpointResponse = {
  total: number;
  subtotal: number;
  tax: number;
  items: CartItem[];
  total_with_tax: number;
  additional_discount: number;
  total_prediscount: number;
  coupon: any;
  coupon_type: any;
};

export type CartItem = {
  id: number; //
  product_id: number;
  product_type: string;
  product: Product;
  price: number; //
  price_with_tax: number;
  quantity: number;
  subtotal: number;
  total: number;
  tax_rate: number;
  tax: number;
  total_with_tax: number;
  discount: number;
};
