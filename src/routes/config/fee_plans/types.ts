export interface IItemDiscount {
  min_price: number;
  discound: number;
}

export interface IItemPlan {
  id: number;
  sid: string;
  name: string;
  total: number;
  fee: number;
}

export interface IGetFreePlansResponse {
  plans: IItemPlan[];
  item_discounts: IItemDiscount[];
  private_item_discount: number;
  minimal_fee: number;
}
