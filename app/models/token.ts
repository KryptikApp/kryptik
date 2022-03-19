import { Network } from "./network";

export interface Asset {
  address: string;
  decimals: number;
  name: string;
  symbol: string;
  network: Network;
}


export interface SavingsAsset extends Asset {
  contractAddress: string;
}

export interface AssetContract {
  address?: string;
  name?: string;
  nft_version?: string;
  schema_name?: string;
  symbol?: string;
  total_supply?: number | null;
}

// Represents fields in `KryptikToken` that are not present in `Asset`. These
// fields can be included in `ParsedAddressAsset`.
type KryptikTokenOwnFields = Omit<KryptikToken, keyof Asset>;

// `ParsedAddressAsset` extends both `Asset` as well as `Partial<KryptikTokenOwnFields>`
// since `parseAsset` loads token metadata and includes it in the resulting
// `ParsedAddressAsset`. The token metadata is of the type `kryptikToken`, but
// some fields overlap with the guaranteed `Asset` fields, so the
// `Partial<KryptikTokenOwnFields>` type is used.
export interface ParsedAddressAsset
  extends Asset,
    Partial<KryptikTokenOwnFields> {
  balance?: {
    amount?: string;
    display?: string;
  };
  hexColor?: string;
  icon_url?: string;
  price?: {
    changed_at?: number;
    relative_change_24h?: number;
    value?: number;
  };
  asset_contract?: AssetContract;
  type?: string;
  id: string;
  uniqueId: string;
  mainnet_address?: string;
  isNativeAsset?: boolean;
}

export interface UniswapCurrency extends ParsedAddressAsset {
  native?: {
    price?: {
      amount?: string;
    };
  };
}

export interface KryptikToken extends Asset {
  hexColor?: string;
  highLiquidity?: boolean;
  totalLiquidity?: number;
  favorite?: boolean;
  isRainbowCurated?: boolean;
  isVerified?: boolean;
  shadowColor?: string;
  uniqueId: string;
}

export interface IndexToken extends Asset {
  amount: string;
}