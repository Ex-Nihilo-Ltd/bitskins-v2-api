import { AppId, INumberBoolean, ItemStatus } from '../../common/types';
import { SearchCSGOField, SearchDota2Field, SearchOrder, SearchRustField, SearchTF2Field } from './enum';

export interface IWhereMine {
  status?: ItemStatus[];
}

export interface ISearchOrder<TFields> {
  field: TFields;
  order: SearchOrder;
}

export interface ICommonWhere {
  id?: string[];
  name?: string;
  skin_id?: number[];
  price_from?: number;
  price_to?: number;
  discount_from?: number;
  discount_to?: number;
  skin_name?: string;
  store_alias?: string;
  store_hash?: string;
  tradehold_from?: number;
  tradehold_to?: number;
  category_id?: number[];
  color_id?: number[];
  type_id?: number[];
}

export interface ISearchTF2Where extends ICommonWhere {}

export interface ISearchTF2Payload {
  limit?: number;
  offset?: number;
  order?: ISearchOrder<SearchTF2Field>[];
  // TODO: inconsistent docs
  where_mine?: IWhereMine;
  where?: ISearchTF2Where;
}

export interface ISearchDota2Order {
  filed: SearchDota2Field;
  order: SearchOrder;
}

export interface ISearchDota2WhereMine {
  status?: ItemStatus[];
}

export interface ISearchDota2Where extends ICommonWhere {
  hero_id?: number[];
  quality_id?: number[];
  rarity_id?: number[];
  slot_id?: number[];
}

export interface ISearchCSGOWhere extends ICommonWhere {
  has_nametag?: INumberBoolean;
  has_hightier?: INumberBoolean;
  stickers?: {
    skin_id: number;
    slot?: number;
  }[];
  sticker_counter_from?: number;
  sticker_counter_to?: number;
  float_value_from?: number;
  float_value_to?: number;
  extras_1_from?: number;
  extras_1_to?: number;
  collection_id?: number[];
  container_id?: number[];
  exterior_id?: number[];
  point_id?: number[];
  paint_seed?: number[];
  paint_index?: number[];
  phase_id?: number[];
  quality_id?: number[];
  typesub_id?: number[];
}

export interface ISearchRustWhere {}

export interface ISearchDota2Payload {
  limit?: number;
  offset?: number;
  order?: ISearchOrder<SearchDota2Field>[];
  where_mine?: IWhereMine;
  where?: ISearchDota2Where;
}

export interface ISearchCSGOPayload {
  limit?: number;
  offset?: number;
  order?: ISearchOrder<SearchCSGOField>[];
  where_mine?: IWhereMine;
  where?: ISearchCSGOWhere;
}

export interface ISearchRustPayload {
  limit?: number;
  offset?: number;
  order?: ISearchOrder<SearchRustField>[];
  where_mine?: IWhereMine;
  where?: ISearchRustWhere;
}

export interface ISearchStorePayload {
  store_alias: string;
  store_hash?: string;
}

export interface ISearchItemDetailsPayload {
  app_id: AppId; // default AppId.CSGO
  id?: string;
  asset_id?: string;
  hash?: string;
}

export interface ISearchSkinWhere {
  skin_name?: string;
  id?: number[];
  paint_id?: number[];
  category_id?: number[];
  collection_id?: number[];
  type_id?: number[];
  app_id?: AppId;
}

export interface ISearchSkinPayload {
  where: ISearchSkinWhere;
  limit?: number;
}

export interface ISearchFiltersPayload {
  app_id: AppId;
}

export interface IGetFiltersResponse {
  category: { id: number; name: string; position: number }[];
  exterior: { id: number; name: string; position: number; short_name: string }[];
  phase: { id: number; name: string; position: number }[];
  quality: { id: number; name: string; position: number; group_id: string }[];
  type: { id: number; name: string; position: number }[];
  typesub: { id: number; name: string; position: number; type_id: number; group_id: number }[];
  paint_wear: { id: number; wear_min: number; wear_max: number }[];
  sticker_collection: { id: number; name: string }[];
}

export interface ISearchTf2ResponseItem {
  id: string;
  asset_id: string;
  skin_id: number;
  bot_id: number;
  price: number;
  status: number;
  name: string;
  class_id: string;
  skin_status: number;
  discount: number;
  suggested_price: number;
  collection_id: number;
  quality_id: number;
  type_id: number;
  bot_steam_id: string;
}

export interface ISearchTf2Response {
  counter: ICounter;
  list: ISearchTf2ResponseItem[];
}

export interface ISearchDota2ResponseItem {
  id: string;
  asset_id: string;
  skin_id: number;
  bot_id: number;
  price: number;
  tradehold: number;
  status: number;
  name: string;
  class_id: string;
  skin_status: number;
  discount: number;
  suggested_price: number;
  hero_id: number;
  quality_id: number;
  rarity_id: number;
  slot_id: number;
  type_id: number;
  bot_steam_id: string;
}

export interface ICounter {
  total: number;
  filtered: number;
}

export interface ISearchDota2Response {
  counter: ICounter;
  list: ISearchDota2ResponseItem[];
}

export interface ISearchCSGOResponseItem {
  id: string;
  asset_id: string;
  skin_id: number;
  bot_id: number;
  price: number;
  tradehold: number;
  sticker_counter: number;
  ss: number;
  status: number;
  name: string;
  class_id: string;
  skin_status: number;
  discount: number;
  suggested_price: number;
  category_id: number;
  collection_id: [[any]];
  type_id: number;
  quality_id: number;
  bot_steam_id: string;
}

export interface ISearchCSGOResponse {
  counter: ICounter;
  list: ISearchCSGOResponseItem[];
}

export interface ISearchRustResponseItem {
  id: string;
  asset_id: string;
  skin_id: number;
  bot_id: number;
  price: number;
  status: number;
  name: string;
  class_id: string;
  skin_status: number;
  discount: number;
  suggested_price: number;
  category_id: number;
  type_id: number;
  bot_steam_id: string;
}

export interface ISearchRustResponse {
  counter: ICounter;
  list: ISearchRustResponseItem[];
}

export interface ISearchItemDetailsResponse {
  id: string;
  asset_id: string;
  skin_id: number;
  bot_id: number;
  price: number;
  tradehold: number;
  sticker_counter: number;
  ss: number;
  status: number;
  name: string;
  class_id: string;
  skin_status: number;
  discount: number;
  suggested_price: number;
  category_id: number;
  collection_id: [number];
  type_id: number;
  quality_id: number;
  bot_steam_id: string;
}

export interface ISearchSkinResponse {
  id: number;
  name: string;
  class_id: string;
  suggested_price: number;
}

export interface ISearchStoreResponse {
  total: { [key in keyof AppId]?: number };
}
