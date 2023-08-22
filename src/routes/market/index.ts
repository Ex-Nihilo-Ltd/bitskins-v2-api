import { ApiBase } from '../../base/api';
import { AllAvailableSkins } from './all_available_skins';
import { AllInsellItemsRoutes } from './all_insell_items';
import { BumpUpRoutes } from './bump_up';
import { BuyItemRoutes } from './buy_item';
import { BuyOrderRoutes } from './buy_order';
import { DelistRoutes } from './delist';
import { ItemsHistoryRoutes } from './items_history';
import { MarketItemsRoutes } from './market_items';
import { PricingRoutes } from './pricing';
import { ReceiptRoutes } from './receipt';
import { RelistRoutes } from './relist';
import { UpdatePriceRoutes } from './update_price';
import { MarketWithdrawRoutes } from './withdraw';

export class MarketRoutes {
  public readonly all_insell_items: AllInsellItemsRoutes;
  public readonly bump_up: BumpUpRoutes;
  public readonly buy_item: BuyItemRoutes;
  public readonly buy_order: BuyOrderRoutes;
  public readonly delist: DelistRoutes;
  public readonly items_history: ItemsHistoryRoutes;
  public readonly market_items: MarketItemsRoutes;
  public readonly pricing: PricingRoutes;
  public readonly receipt: ReceiptRoutes;
  public readonly relist: RelistRoutes;
  public readonly update_price: UpdatePriceRoutes;
  public readonly withdraw: MarketWithdrawRoutes;
  public readonly all_available_skins: AllAvailableSkins;

  constructor(private readonly api: ApiBase) {
    this.all_insell_items = new AllInsellItemsRoutes(this.api);
    this.bump_up = new BumpUpRoutes(this.api);
    this.buy_item = new BuyItemRoutes(this.api);
    this.buy_order = new BuyOrderRoutes(this.api);
    this.delist = new DelistRoutes(this.api);
    this.items_history = new ItemsHistoryRoutes(this.api);
    this.market_items = new MarketItemsRoutes(this.api);
    this.pricing = new PricingRoutes(this.api);
    this.receipt = new ReceiptRoutes(this.api);
    this.relist = new RelistRoutes(this.api);
    this.update_price = new UpdatePriceRoutes(this.api);
    this.withdraw = new MarketWithdrawRoutes(this.api);
    this.all_available_skins = new AllAvailableSkins(this.api);
  }
}
