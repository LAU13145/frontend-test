import { StaticImageData } from "next/image";

export type Currency = "COP" | "USD";

export interface ProductsList {
  savings_accounts: SavingsAccount[];
  metadata: ProductsMetadata;
}

export type SavingsAccountType =
  | "tradicional"
  | "premium"
  | "programado"
  | "infantil"
  | "digital"
  | "moneda_extranjera";

export interface Fees {
  monthly_maintenance?: number;
  own_atm_withdrawal?: number;
  other_atm_withdrawal?: number;
  early_withdrawal?: number;
  international_transfer?: number;
}

export interface SavingsAccount {
  id: number;
  name: string;
  type: SavingsAccountType;
  img: StaticImageData;
  interest_rate: number;
  currency: Currency;

  minimum_opening_amount: number;
  minimum_maintenance_amount: number;

  benefits: string[];
  requirements: string[];
  fees: Fees;

  term_months?: number;
  max_age?: number;
}

export interface ProductsMetadata {
  last_updated: string;
  total_products: number;
  available_currencies: Currency[];
}

export interface ProductsPageProps {
  searchParams: Promise<{ search?: string | string[] }>;
}
