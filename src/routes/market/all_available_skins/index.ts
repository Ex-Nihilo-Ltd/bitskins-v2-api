import { ApiBase } from "../../../base/api";
import { AppId } from "../../common/types";
import { IGetAllCSGOSkinsResponse, IGetAllDota2SkinsResponse, IGetAllRustSkins, IGetAllTF2SkinsResponse } from "./types";

export class AllAvailableSkins {
  private readonly baseUri: string;

  constructor(private readonly api: ApiBase) {
    this.baseUri = 'market/skin';
  }

  public async get_all_tf2_skins():Promise<IGetAllTF2SkinsResponse[]> {
    return this.api.get<IGetAllTF2SkinsResponse[]>(`${this.baseUri}/${AppId.TF2}`);
  }

  public async get_all_dota2_skins(): Promise<IGetAllDota2SkinsResponse[]> {
    return this.api.get<IGetAllDota2SkinsResponse[]>(`${this.baseUri}/${AppId.DOTA2}`)
  }

  public async get_all_CSGO_skins(): Promise<IGetAllCSGOSkinsResponse[]> {
    return this.api.get<IGetAllCSGOSkinsResponse[]>(`${this.baseUri}/${AppId.CSGO}`)
  }

  public async get_all_rust_skins():Promise<IGetAllRustSkins[]> {
    return this.api.get<IGetAllRustSkins[]>(`${this.baseUri}/${AppId.RUST}`)
  }
}