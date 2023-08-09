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
