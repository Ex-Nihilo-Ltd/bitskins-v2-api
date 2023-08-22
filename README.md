# Bitskins Wrapper

## Integration

```js
import BitskinsApiV2 from 'bitskins-v2-api';
const api = new BitskinsApiV2();
```

## Installation

```
  $ npm install bitskins-v2-api
```

## Features complete coverage of the Bitskins API in its entirety.

A comprehensive and exhaustive encompassment of every function and capability offered by the Bitskins API

## API

In order to initiate a call, the prerequisite is to instantiate the Bitskins.API class by providing your Bitskins API key.

For a deeper insight, refer to the [documentation](https://bitskins.com/docs/api/v2) offered by the Bitskins API.

Each call issued yields a promise containing the data sourced from the response. If, however, an issue arises during the request formation or the response status from Bitskins deviates from the expected "success," the promise will undergo rejection.

```js
api.market.items_history().then((data) => {...}).catch((error) => {...})
```

For a comprehensive illustration, refer to the contents within the examples directory.

## Account

### Affiliate

get_affiliate_info()\
Allows you to retrive information about your profile at Bitskins\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-profile-me)

claim_money()\
Allows you to claim available money\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-affiliate-transfer_money)

list_historical_rewards({ limit?: number, offset?: number })\
Gives you the award history\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-affiliate-history)

set_or_change_affiliate_code({ code: string })\
Allows you to set or change your affiliate code\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-affiliate-set_code)

### API Access

create_api_key()\
Create API key, so you will be able to use it in next requests instead of token. Keep it safe!\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-apikey-create)

disable_api_key()\
Revoke current API key.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-apikey-disable)

### Profile

get_current_session()\
Get current session information.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-profile-me)

get_account_balance()\
Get account balance.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-profile-balance)

update_account({ set: { o_settings?: number, o_notify?: number, store_alias?: string, currency?: Currency, language?: Language }})\
Update account information app settings, notifications, store, currency, language, etc.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-profile-update)

update_trade_link({ tradelink: string })\
Update steam trade link. You can get it here: https://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-profile-update_tradelink)

block_my_account({ steam_token: string})\
If you believe that your account has been compromised you can temporarily block it. We will unblock your account after contacting our support.
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-profile-block)

### 2FA

create_twofa_code()\
In response you will get twofa_secret, you can use to generate 2FA codes.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-twofa-create)

verify_twofa_code({ email_code: string, twofa_code: string})\
Verifies 2FA code\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-twofa-verify)

disable_twofa_code({ twoda_code: string })\
Dissable 2FA\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-twofa-disable)

verify_disabling_twfa_code({ email_code: string })\
Verifies disabling 2FA code\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-twofa-verify_disable)

lock_twofa()\
Lock account, so it will need to enter 2FA code to make requests.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-twofa-lock)

unlock_twofa({ twofa_code: string })\
Unlock account with 2FA code.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-account-twofa-unlock)

## Config

get_currency_rates()\
Get fiat and crypto rates on the platform. Fiat rates are used for provisional preview only. All in-platform transactions are calculated in USD. Crypto currencies are used as based rates for depositing and withdrawing.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-config-currency-list)

get_fee_plans()\
Get available sale fee plans.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-config-fee_plan-list)

get_platform_status()\
Get platform status\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-config-status-get)

## Market

### Pricing

get_sales({ app_id: AppId, skin_id: number, date_from?: string, date_to?: string})\
Get latest sales for item.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-pricing-list)

get_pricing_summary({ app_id: AppId, skin_id: number, date: string, price_min: number, price_max: number, price_avg: number, counter: number})\
Get sales stats for item, can be filtered by date.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-pricing-summary)

### Market Items

search_tf2({limit?: number, offset?: number; order?: SearchTF2Field[], where_mine?: IWhereMine, where?: ISearchRF2Where})\
Search for items on the TF2 market.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-search-440)

search_dota2({ limit?: number, offset?: number, order?: SearchDota2Field[], where_mine?: IWhereMine, where?: ISearchDota2Where})\
Search for items on the Dota 2 market.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-search-570)

search_csgo({ limit?: number, offset?: number, order?: SearchCSGOField[]})\
Search for items on the CS:GO market.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-search-730)

search_rust({ limit?: number, offset?: number, order?: SearchRustField[], where_mine?: IWhereMine, where?: ISearchRustWhere})\
Search for items on the Rust market.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-search-252490)

search_store({ store_alias: string, store_hash?: string })\
Get amount of items in the user store.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-search-store)

get_item_details({ app_id, id?: string, asset_id?: string, hash?: string })\
Get item details of single item.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-search-get)

search_skin({ where: ISearchSkinWhere, limit?: number })\
Search for item skins in game\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-search-skin_name)

get_filters({ app_id: AppId })\
Get available items filters for game.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-search-filters)

### Buy Item

buy_single_item({ app_id?: AppId, id: string, max_price: number, hash?: string })\
Buy item\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-buy-single)

buy_multiple_items({ app_id?: AppId, items: IItemPayload[] })\
Buy multiple items\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-buy-many)

buy_bulk_items({ app_id?: AppId, skin_id: number, max_price: number, quantity: number })\
Buy multiple items at once. You will buy items based on specified quantity and max price.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-buy-bulk)

### Withdraw

withdraw_single_item({ app_id: AppId, id: string, external?: { steam_id: string, steam_token: string }})\
Withdraw item from BitSkins inventory to your Steam account. Steam trade will be created.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-withdraw-single)

withdraw_multiple_items({ items: { id: string, success: boolean }[] })\
Withdraw multiple items from BitSkins inventory to your Steam account. Steam trades will be created.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-withdraw-many)

### Delist

delist_single_item({ app_id: AppId, id: string })\
Delist item from market. Item will be moved to BitSkins inventory.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-delist-single)

delist_multiple_items({ items: { id: string, success: boolean }[] })\
Delist multiple items from market. Items will be moved to BitSkins inventory.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-delist-many)

### Relist

relist_single_item({ app_id: AppId, id: string, price: number, type: DepositStatus })\
Relist single item from BitSkins inventory to market.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-relist-single)

relist_multiple_item({ items: { id: string, success: boolean }[] })\
Relist multiple items from BitSkins inventory to market.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-relist-many)

### Update price

update_single_item_price({ app_id: AppId, id: string, price: number })\
Update single item price on market.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-update_price-single)

update_multiple_items_prices({ items: { id: string, success: boolean }[] })\
Update multiple items on market.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-update_price-many)

### Items History

get_items_history({ type: MarketHistoryStatus, limit?: number, offset?: number, order?: { field: ItemHistoryField, order: Order }[],where?: { app_id?: AppId, skin_id?: number, price_from?: number, price_to?: number } })\
Get history of bought and sold items.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-update_price-many)

get_item_history({ type: MarketHistoryStatus, id: string })\
Get history of bought and sold specific item.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-history-get)

### Receipt

get_receipt({ app_id: AppId, id: string })\
Get receipt for bought items.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-receipt-get)

### Bump UP

bump_single_item({ app_id: AppId, id: string })\
Bump up item to make it visible on first place to all users.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-bump-single)

get_bumped_items({ app_id: AppId })\
Get list of bumped items\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-bump-list)

enable_bumping({ app_id: AppId, id: string, period: AutoBumpPeriod, quantity: number, delayed: number })\
Enable bumbing\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-bump-enable)

disable_bumping({ app_id: AppId, id: string })\
Disable bumping\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-bump-disable)

buy_bumps_package({ id: string })\
Buy bump packages\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-bump-buy_package)

### All available skins

get_all_tf2_skins({ id: number, name: string, class_id: string, suggested_price?: number })\
Get list of all skins\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-skin-440)

get_all_dota2_skins({ id: number, name: string, class_id: string, suggested_price?: number })\
Get list of all Dota2 skins\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-skin-570)

get_all_CSGO_skins({ id: number, name: string, class_id: string, suggested_price?: number })\
Get list of all CSGO skins\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-skin-730)

get_all_rust_skins({ id: number, name: string, class_id: string, suggested_price?: number })\
Get list of all Rust skins\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-skin-252490)

### All insell items

get_list_of_items_in_sell_for_tf2()\
Get list of all items in sell for TF2\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-skin-440)

get_list_of_items_in_sell_for_dota2()\
Get list of all items in sell for Dota 2\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-skin-570)

get_list_of_items_in_sell_for_csgo()\
Get list of all items in sell for CSGO\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-skin-730)

get_list_of_items_in_sell_for_rust()\
Get list of all items in sell for Rust\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-market-skin-252490)

## Steam

### Steam Inventory

get_steam_inventory({ app_id: AppId })\
Get list of items in your Steam inventory.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-steam-inventory-list)

### Steam deposit

deposit_steam_items({ app_id: AppId, items: { asset_id: string, price: number }[] })\
Deposit Steam item and list it on BitSkins market. Steam trade will be created.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-steam-deposit-many)

### Steam trades

get_steam_trades({ limit?: number, offset?: number, where?: { tradeofferid?: string, app_id?: AppId, type?: SteamTradesType, hash?: string[] } })\
Get all steam trades\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-steam-trade-list)

get_active_steam_trades({ limit?: number, offset?: number, where?: { tradeofferid?: string, app_id?: AppId, type?: SteamTradesType, hash?: string[] } })\
Get active steam trades\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-steam-trade-list_active)

get_hashes_of_active_steam_trades()\
Get hashes of all active steam trades\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-steam-trade-list_active_hash)

## Wallet

### Stats

get_wallet_stats()\
Get wallet statistics\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet-stats-get)

get_kyc_limits()\
Get KYC limits\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet-stats-get_kyc_limit)

### Wallet transactions

get_wallet_transactions({ limit?: number, offset?: number, order?: { field: WalletTransactionsField, order: Order }, where?: { amount_from?: number, amount_to?: number, date_from?: string, date_to?: string, date?: string, service_id?: WalletTransactionsServiceId } })\
Get wallet transactions\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet-transaction-list)

get_wallet_pending_transactions({ limit?: number, offset?: number, order?: { field: WalletTransactionsField, order: Order }, where?: { amount_from?: number, amount_to?: number, date_from?: string, date_to?: string, date?: string, service_id?: WalletTransactionsServiceId } })\
Get list of your pending transactions\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet-transaction-list_pending)

### Wallet reports

get_wallet_reports({ limit?: number, offset?: number, order?: { field: WalletReportsOrderType, order: Order }, where?: { type?: ReportType, status?: ReportStatus } })\
Get all your reports\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet-transaction-list_pending)

generate_wallet_report({ type: ReportType, date: string })\
Generate new report\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet-report-generate)

download_wallet_report({ id: number })\
Download report\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet-report-download)

### Wallet deposit

### Binance

deposit_binance({ amount: number })\
Deposit binance\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-binancepay-create)

### Cryptocurrency

get_crypto_addresses()\
Get cryptocurrency addresses\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-crypto-list_addresses)

get_ltc_address({ type: CryptoDepositType })\
Get Litecoin addresses\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-crypto-get_litecoin_address)

get_btc_address({ type: CryptoDepositType })\
Get bitcoin addresses\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-crypto-get_bitcoin_address)

get_eth_address()\
Get Etherium addresses\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-crypto-get_ethereum_address)

### Gift code

use_gift_code({ code: string })\
Use gift code\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-gift_code-use)

get_used_gift_codes()\
Get list of used gift codes\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-gift_code-list_used)

### Zen

deposit_zen({ amount: number })\
Deposit via zen\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-zen-create)

### Card

add_card({ amount: number, card: ICardInfo, billing_address: { country: string, city: string, addr_line_1: string, addr_line_2: string, zip: string } })\
Add credit card\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-unlimint-add_card)

list_cards()\
Get list of your credit cards
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-unlimint-list_cards)

deposit_card({ card_id: number, amount: number, security_code: string })\
Deposit money on BitSkins via card saved on BitSkins.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_deposit-unlimint-card_deposit)

## Wallet withdraw

### Cryptocurrency

withdraw_bitcoin({ twofa_code: string, amount: number, address: string })\
Withdraw bitcoin\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_withdraw-crypto-bitcoin)

withdraw_litecoin({ twofa_code: string, amount: number, address: string })\
Withdraw litecoin\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_withdraw-crypto-litecoin)

withdraw_ethereum({ twofa_code: string, amount: number, address: string })\
Withdraw etherium\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_withdraw-crypto-ethereum)

### Binance

withdraw_binance({ twoda_code: string, amount: number, receiver: string, receiver_type: WithdrawBinanceReceiverType })\
Withdraw funds to your Binance account, using BinanceID.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_withdraw-binancepay-create)

### Visa

withdraw_visa({ card_id: number, amount: number, security_code: string, twofa_code: string})\
Withdraw funds to your Visa card.\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_withdraw-unlimint-card_withdraw)

### P2P

transfer_to_p2p({ amount: number })\
Transfer funds to your account with same Steam ID on P2P market\
[Bitskins docs](https://bitskins.com/docs/api/v2#api-wallet_withdraw-p2p-transfer)
