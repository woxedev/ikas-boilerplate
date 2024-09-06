/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: { input: any; output: any; }
};

export type AbandonedCartFlow = {
  __typename?: 'AbandonedCartFlow';
  authorizedAppId?: Maybe<Scalars['String']['output']>;
  campaignId?: Maybe<Scalars['String']['output']>;
  canApplicable: Scalars['Boolean']['output'];
  couponId?: Maybe<Scalars['String']['output']>;
  customerFilters?: Maybe<AbandonedCartFlowCustomerFilter>;
  flowId: Scalars['String']['output'];
  mailSendDate?: Maybe<Scalars['Timestamp']['output']>;
  mailTranslationId?: Maybe<Scalars['String']['output']>;
  messageType?: Maybe<AbandonedCartSettingsNotificationTypeEnum>;
  recoverEmailStatus: CheckoutRecoveryEmailStatusEnum;
  sendAfter: Scalars['Float']['output'];
  smsTranslationId?: Maybe<Scalars['String']['output']>;
};

export type AbandonedCartFlowCustomerFilter = {
  __typename?: 'AbandonedCartFlowCustomerFilter';
  sendOnlyActiveAccount?: Maybe<Scalars['Boolean']['output']>;
  sendOnlySubscribedToEmail?: Maybe<Scalars['Boolean']['output']>;
};

export enum AbandonedCartSettingsNotificationTypeEnum {
  Email = 'EMAIL',
  Sms = 'SMS'
}

export type AddCouponsInput = {
  campaignId: Scalars['String']['input'];
  coupons?: InputMaybe<Array<NewCouponInput>>;
  generateCoupons?: InputMaybe<GenerateCouponInput>;
};

export type AddOrderInvoiceInput = {
  /** It is the app id  for which the invoice is issued. */
  appId: Scalars['String']['input'];
  /** It is the content of invoice. Is the entered value must be in base64 format. */
  base64?: InputMaybe<Scalars['String']['input']>;
  /** 'It is data for create invoice. */
  invoiceData?: InputMaybe<Scalars['JSON']['input']>;
  /** It is the number of the order invoice. */
  invoiceNumber: Scalars['String']['input'];
  /**
   * It is the order id for which the invoice is issued.
   *  * Is the entered id must be exist in ikas.
   */
  orderId: Scalars['String']['input'];
  /** If the customer is to be informed after the invoice information is saved, this field can be sent as "true". */
  sendNotificationToCustomer: Scalars['Boolean']['input'];
  /** It is the type enum of the invoice. */
  type: InvoiceTypeEnum;
};

export type AdditionalPrice = {
  __typename?: 'AdditionalPrice';
  amount: Scalars['Float']['output'];
  amountType: PaymentGatewayTransactionFeeTypeEnum;
  name: Scalars['String']['output'];
  type: PaymentGatewayAdditionalPriceTypeEnum;
};

/** Scope Enum for Apps */
export enum AppScopeEnum {
  ReadCampaigns = 'READ_CAMPAIGNS',
  ReadCustomers = 'READ_CUSTOMERS',
  ReadInventories = 'READ_INVENTORIES',
  ReadOrders = 'READ_ORDERS',
  ReadProducts = 'READ_PRODUCTS',
  WriteCampaigns = 'WRITE_CAMPAIGNS',
  WriteCustomers = 'WRITE_CUSTOMERS',
  WriteInventories = 'WRITE_INVENTORIES',
  WriteOrders = 'WRITE_ORDERS',
  WriteProducts = 'WRITE_PRODUCTS',
  WriteStorefront = 'WRITE_STOREFRONT'
}

export type ApproveOrderTransactionsInput = {
  orderId: Scalars['String']['input'];
  paymentMethods?: InputMaybe<Array<PaymentMethodTypeEnum>>;
};

export type AuthorizedApp = {
  __typename?: 'AuthorizedApp';
  /** The date the app was added. */
  addedDate: Scalars['Timestamp']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  partnerId: Scalars['String']['output'];
  /** The id of the sales channel owned by the merchant. */
  salesChannelId?: Maybe<Scalars['String']['output']>;
  scope: Scalars['String']['output'];
  /** The application's id in the store. */
  storeAppId: Scalars['String']['output'];
  /** It keeps the information that a merchant cn install more than one application. If `true`, merchant can add more than one application. */
  supportsMultipleInstallation?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type AvailableShippingMethod = {
  __typename?: 'AvailableShippingMethod';
  estimatedDeliveryTime?: Maybe<LocalDeliverySettingsDayEstimatedDeliveryTime>;
  price: Scalars['Float']['output'];
  rateName: Scalars['String']['output'];
  shippingMethod: OrderShippingMethodEnum;
  shippingSettingsId: Scalars['String']['output'];
  shippingZoneRateId: Scalars['String']['output'];
};

export type BooleanFilterInput = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Branch = {
  __typename?: 'Branch';
  address: BranchAddress;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  favoriteItems?: Maybe<Array<BranchFavoriteItem>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  salesChannelId: Scalars['String']['output'];
  settings?: Maybe<BranchSettings>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type BranchAddress = {
  __typename?: 'BranchAddress';
  address: Scalars['String']['output'];
  city: BranchAddressCity;
  country: BranchAddressCountry;
  district?: Maybe<BranchAddressDistrict>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  state?: Maybe<BranchAddressState>;
};

export type BranchAddressCity = {
  __typename?: 'BranchAddressCity';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type BranchAddressCountry = {
  __typename?: 'BranchAddressCountry';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type BranchAddressDistrict = {
  __typename?: 'BranchAddressDistrict';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BranchAddressState = {
  __typename?: 'BranchAddressState';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BranchFavoriteItem = {
  __typename?: 'BranchFavoriteItem';
  order: Scalars['Float']['output'];
  targetId: Scalars['String']['output'];
  targetParentId: Scalars['String']['output'];
  type: BranchFavoriteTypeEnum;
};

export enum BranchFavoriteTypeEnum {
  Category = 'CATEGORY',
  Discount = 'DISCOUNT',
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

export type BranchSettings = {
  __typename?: 'BranchSettings';
  customerRequirement?: Maybe<BranchSettingsRequirementEnum>;
  gridLayout?: Maybe<BranchSettingsGridLayoutEnum>;
  hideOutOfStockProducts?: Maybe<Scalars['Boolean']['output']>;
  lockTime?: Maybe<Scalars['Float']['output']>;
  pinRequirement?: Maybe<BranchSettingsRequirementEnum>;
  sellOutOfStockProducts?: Maybe<Scalars['Boolean']['output']>;
};

export enum BranchSettingsGridLayoutEnum {
  FourFive = 'FOUR_FIVE',
  ThreeFour = 'THREE_FOUR',
  TwoEight = 'TWO_EIGHT'
}

export enum BranchSettingsRequirementEnum {
  Mandatory = 'MANDATORY',
  Optional = 'OPTIONAL'
}

export type BulkUpdateProductBrandInput = {
  /** Description of the brand. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Image id of brand. */
  imageId?: InputMaybe<Scalars['String']['input']>;
  /** Name of the brand. */
  name: Scalars['String']['input'];
};

export type BulkUpdateProductCategoryInput = {
  /** Name of the category. */
  name: Array<Scalars['String']['input']>;
};

export type BulkUpdateProductHtmlMetaDataInput = {
  /** Canonical URL list of entity. */
  canonicals?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Description of the product in HTML metadata. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Defines if the entity is not indexable by search engines */
  disableIndex?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
  /** Metadata overrides for the product */
  metadataOverrides?: InputMaybe<Array<BulkUpdateProductHtmlMetaDataOverrideInput>>;
  /** Page title for the product */
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  /** Redirect URL for the product. */
  redirectTo?: InputMaybe<Scalars['String']['input']>;
  /** Slug of the product */
  slug: Scalars['String']['input'];
  /** Target of HTML metadata. */
  target?: InputMaybe<Scalars['String']['input']>;
  /** Target type for HTML metadata. */
  targetType?: InputMaybe<Scalars['String']['input']>;
};

export type BulkUpdateProductHtmlMetaDataOverrideInput = {
  /** Description of the product in HTML metadata. */
  description: Scalars['String']['input'];
  /** Language metadata for the product. */
  language?: InputMaybe<Scalars['String']['input']>;
  /** Page title for the product */
  pageTitle: Scalars['String']['input'];
};

export type BulkUpdateProductImageInput = {
  /** URL of the image */
  imageUrl: Scalars['String']['input'];
  /** Whether the image is main image for the product or not. */
  isMain: Scalars['Boolean']['input'];
  /** True if this the media type is video */
  isVideo?: InputMaybe<Scalars['Boolean']['input']>;
  /** Order of the product image. */
  order: Scalars['Float']['input'];
};

export type BulkUpdateProductPriceInput = {
  /** Buy price of product. */
  buyPrice?: InputMaybe<Scalars['Float']['input']>;
  /** Currency code for the price of product. */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** Discount price of product. */
  discountPrice?: InputMaybe<Scalars['Float']['input']>;
  /** Id of the price list that the product belongs to. */
  priceListId?: InputMaybe<Scalars['String']['input']>;
  /** Sell price of product. */
  sellPrice: Scalars['Float']['input'];
};

export type BulkUpdateProductSalesChannels = {
  /** Sales channels id for bulk update. */
  id: Scalars['String']['input'];
  /** Max purchasable quantity of the sales channel for per cart. */
  maxQuantityPerCart?: InputMaybe<Scalars['Float']['input']>;
  /** Min purchasable quantity of the sales channel for per cart. */
  minQuantityPerCart?: InputMaybe<Scalars['Float']['input']>;
  quantitySettings?: InputMaybe<Array<Scalars['Float']['input']>>;
  /** Sales channels id for bulk update. */
  status?: InputMaybe<SalesChannelStatusEnum>;
};

export type BulkUpdateProductStockInput = {
  /** Number of available items in the stock location. */
  stockCount: Scalars['Float']['input'];
  /** Id of the stock location. */
  stockLocationId: Scalars['String']['input'];
};

export type BulkUpdateProductTagInput = {
  /** Name of the product tag. */
  name: Scalars['String']['input'];
};

export type BulkUpdateProductVariantInput = {
  /** List of barcode for the variant. */
  barcodeList?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Whether the variant is deleted or not */
  deleted: Scalars['Boolean']['input'];
  /** Source id for variant. */
  hsCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  /** List of images for variant. */
  images?: InputMaybe<Array<BulkUpdateProductImageInput>>;
  /** Whether the variant is active or not. */
  isActive: Scalars['Boolean']['input'];
  /** List of prices for the variant. */
  prices: Array<BulkUpdateProductPriceInput>;
  /** SKU of the variant. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Source id for variant. */
  sourceId?: InputMaybe<Scalars['String']['input']>;
  /** List of stocks for the variant. */
  stocks?: InputMaybe<Array<BulkUpdateProductStockInput>>;
  /** List of variant values. */
  variantValues?: InputMaybe<Array<BulkUpdateProductVariationValueRelationInput>>;
  /** Weight of the variant. */
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type BulkUpdateProductVariantTypeImportInput = {
  /** Order of the variant type. */
  order: Scalars['Float']['input'];
  /** Name of variant type. */
  variantTypeName?: InputMaybe<Scalars['String']['input']>;
  /** List of variant values. */
  variantValues: Array<BulkUpdateProductVariantValueImportInput>;
};

export type BulkUpdateProductVariantValueImportInput = {
  /** Hex color code for the variant value. */
  colorCode?: InputMaybe<Scalars['String']['input']>;
  /** Name of the variant value. */
  name: Scalars['String']['input'];
  /** Source id for variant value. */
  sourceId?: InputMaybe<Scalars['String']['input']>;
  /** Thumbnail image url for the variant value. */
  thumbnailImageUrl?: InputMaybe<Scalars['String']['input']>;
};

export type BulkUpdateProductVariationValueRelationInput = {
  /** Name of variant type. */
  variantTypeName: Scalars['String']['input'];
  /** Name of the variant value. */
  variantValueName: Scalars['String']['input'];
};

export type BulkUpdateProductsInput = {
  /** Brand of the product. */
  brand?: InputMaybe<BulkUpdateProductBrandInput>;
  /** List of categories of the product. */
  categories: Array<BulkUpdateProductCategoryInput>;
  /** Whether the product is deleted or not */
  deleted: Scalars['Boolean']['input'];
  /** Description of the product. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Product Google Categories */
  googleTaxonomyId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  /** Max purchasable quantity of the product for per cart. */
  maxQuantityPerCart?: InputMaybe<Scalars['Float']['input']>;
  /** HTML Metadata identifier of the product. */
  metaData?: InputMaybe<BulkUpdateProductHtmlMetaDataInput>;
  /** Name of the product */
  name: Scalars['String']['input'];
  /** Variant types of the product. */
  productVariantTypes: Array<BulkUpdateProductVariantTypeImportInput>;
  /** Sales channel ids for bulk update. */
  salesChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Sales channels for bulk update. */
  salesChannels?: InputMaybe<Array<BulkUpdateProductSalesChannels>>;
  /** Short description of the product. */
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  /** Source id for bulk update. */
  sourceId?: InputMaybe<Scalars['String']['input']>;
  /** List of product tags. */
  tags?: InputMaybe<Array<BulkUpdateProductTagInput>>;
  /** Type of the product. */
  type: ProductTypeEnum;
  /** List of product variants. */
  variants: Array<BulkUpdateProductVariantInput>;
  /** Vendor of the product. */
  vendor?: InputMaybe<Scalars['String']['input']>;
  /** Weight of the product. */
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type BundleProductInput = {
  addToBundleBasePrice?: InputMaybe<Scalars['Boolean']['input']>;
  discountRatio?: InputMaybe<Scalars['Float']['input']>;
  filteredVariantIds: Array<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  maxQuantity?: InputMaybe<Scalars['Float']['input']>;
  minQuantity?: InputMaybe<Scalars['Float']['input']>;
  order: Scalars['Float']['input'];
  productId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type BundleProductModel = {
  __typename?: 'BundleProductModel';
  /** The setting that specifies whether the prices of the products to be added to the bundle product will be added to the base price of the bundle. If this setting is selected, the sales prices of the products in the bundle product are included on the bundle price. */
  addToBundleBasePrice?: Maybe<Scalars['Boolean']['output']>;
  /** The discount rate that will be applied specifically to the product to be added to the bundle product. If the addToBundleBasePrice setting is selected, the discount is applied. */
  discountRatio?: Maybe<Scalars['Float']['output']>;
  /** Selectable variant ids of the product that can be included in the bundle product. */
  filteredVariantIds: Array<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  /** Maximum quantity of product that can be included in the bundle product. */
  maxQuantity?: Maybe<Scalars['Float']['output']>;
  /** Minimum quantity of product that can be included in the bundle product. */
  minQuantity?: Maybe<Scalars['Float']['output']>;
  /** Order of the product that can be included in the bundle product. */
  order: Scalars['Float']['output'];
  /** Id of the product that can be included in the bundle product. */
  productId: Scalars['String']['output'];
  /** Quantity of the product that can be included in the bundle product. */
  quantity: Scalars['Float']['output'];
};

export type BundleProductOrderLine = {
  __typename?: 'BundleProductOrderLine';
  /** If the order line is derived from a package product, it shows the bundle line id of the package product */
  bundleLineId: Scalars['String']['output'];
  /** If the order line is derived from a package product, it shows the bundle line id of the package product */
  bundleLineQuantity: Scalars['Float']['output'];
  /** If the order line is derived from a package product, it shows the bundle product name of the package product */
  name?: Maybe<Scalars['String']['output']>;
  /** It is the option information of the variant value in the order line item. */
  options?: Maybe<Array<OrderLineOption>>;
  /** Information about the variant of the order line item. */
  variant: OrderLineVariant;
};

export type BundleProductOrderLineInput = {
  /** It is the bundle product line id the bundle line item. */
  bundleLineId: Scalars['String']['input'];
  /** It is the bundle product line id the bundle line item. */
  bundleLineQuantity: Scalars['Float']['input'];
  /** It is the bundle product name the bundle line item. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** It is the options information in the bundle line item. */
  options?: InputMaybe<Array<OrderLineOptionInput>>;
  /** It is the variant information in the bundle line item. */
  variant: OrderLineVariantInput;
};

export type BundleSettingsInput = {
  maxBundleQuantity?: InputMaybe<Scalars['Float']['input']>;
  minBundleQuantity?: InputMaybe<Scalars['Float']['input']>;
  products: Array<BundleProductInput>;
};

export type BundleSettingsModel = {
  __typename?: 'BundleSettingsModel';
  /** Maximum quantity of products that can be in the bundle product. */
  maxBundleQuantity?: Maybe<Scalars['Float']['output']>;
  /** Minimum quantity of products that can be in the bundle product. */
  minBundleQuantity?: Maybe<Scalars['Float']['output']>;
  /** List of products that can be included in the bundle product. */
  products: Array<BundleProductModel>;
};

export type BuyX = {
  __typename?: 'BuyX';
  amount: Scalars['Float']['output'];
  applyByQuantity: Scalars['Boolean']['output'];
  filter: CampaignFilter;
  maxAmount?: Maybe<Scalars['Float']['output']>;
};

export type BuyXInput = {
  amount: Scalars['Float']['input'];
  applyByQuantity: Scalars['Boolean']['input'];
  filter: CampaignFilterInput;
  maxAmount?: InputMaybe<Scalars['Float']['input']>;
};

export type BuyXThenGetY = {
  __typename?: 'BuyXThenGetY';
  buyX: BuyX;
  getY: GetY;
  maxUsagePerOrder?: Maybe<Scalars['Int']['output']>;
};

export type BuyXThenGetYInput = {
  buyX: BuyXInput;
  getY: GetYInput;
  maxUsagePerOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type Campaign = {
  __typename?: 'Campaign';
  applicableCustomerGroupIds?: Maybe<Array<Scalars['String']['output']>>;
  applicableCustomerIds?: Maybe<Array<Scalars['String']['output']>>;
  applicableCustomerSegmentIds?: Maybe<Array<Scalars['String']['output']>>;
  applicablePrice: CampaignApplicablePriceEnum;
  applyCampaignToProductPrice?: Maybe<Scalars['Boolean']['output']>;
  buyXThenGetY?: Maybe<BuyXThenGetY>;
  canCombineWithOtherCampaigns: Scalars['Boolean']['output'];
  couponPrefix?: Maybe<Scalars['String']['output']>;
  couponValidityPeriod?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  createdFor?: Maybe<CampaignCreatedForEnum>;
  currencyCodes?: Maybe<Array<Scalars['String']['output']>>;
  dateRange?: Maybe<CampaignDateRangeField>;
  deleted: Scalars['Boolean']['output'];
  fixedDiscount?: Maybe<FixedDiscount>;
  hasCoupon: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  includeDiscountedProducts?: Maybe<Scalars['Boolean']['output']>;
  isFreeShipping?: Maybe<Scalars['Boolean']['output']>;
  onlyUseCustomer?: Maybe<Scalars['Boolean']['output']>;
  salesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  tieredDiscount?: Maybe<CampaignTieredDiscount>;
  title: Scalars['String']['output'];
  translations?: Maybe<Array<CampaignTranslation>>;
  type: CampaignTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  usageCount: Scalars['Int']['output'];
  usageLimit?: Maybe<Scalars['Int']['output']>;
  usageLimitPerCustomer?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

export enum CampaignApplicablePriceEnum {
  DiscountPrice = 'DISCOUNT_PRICE',
  SellPrice = 'SELL_PRICE'
}

export enum CampaignCreatedForEnum {
  AbandonedCheckout = 'ABANDONED_CHECKOUT',
  Cart = 'CART',
  CustomerReview = 'CUSTOMER_REVIEW',
  MarketingCampaign = 'MARKETING_CAMPAIGN'
}

export type CampaignDateRangeField = {
  __typename?: 'CampaignDateRangeField';
  end?: Maybe<Scalars['Timestamp']['output']>;
  start?: Maybe<Scalars['Timestamp']['output']>;
};

export type CampaignDateRangeFieldInput = {
  end?: InputMaybe<Scalars['Timestamp']['input']>;
  start?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type CampaignFilter = {
  __typename?: 'CampaignFilter';
  idList: Array<Scalars['String']['output']>;
  type: CampaignFilterTypeEnum;
};

export type CampaignFilterInput = {
  idList: Array<Scalars['String']['input']>;
  type: CampaignFilterTypeEnum;
};

export enum CampaignFilterTypeEnum {
  Category = 'CATEGORY',
  DynamicCategory = 'DYNAMIC_CATEGORY',
  Product = 'PRODUCT',
  ProductAndVariant = 'PRODUCT_AND_VARIANT',
  ProductBrand = 'PRODUCT_BRAND',
  ProductTag = 'PRODUCT_TAG',
  Variant = 'VARIANT'
}

export enum CampaignGetYDiscountTypeEnum {
  Amount = 'AMOUNT',
  FixedProductPrice = 'FIXED_PRODUCT_PRICE',
  Ratio = 'RATIO'
}

export type CampaignInput = {
  applicableCustomerGroupIds?: InputMaybe<Array<Scalars['String']['input']>>;
  applicableCustomerIds?: InputMaybe<Array<Scalars['String']['input']>>;
  applicableCustomerSegmentIds?: InputMaybe<Array<Scalars['String']['input']>>;
  applicablePrice: CampaignApplicablePriceEnum;
  applyCampaignToProductPrice?: InputMaybe<Scalars['Boolean']['input']>;
  buyXThenGetY?: InputMaybe<BuyXThenGetYInput>;
  canCombineWithOtherCampaigns: Scalars['Boolean']['input'];
  couponPrefix?: InputMaybe<Scalars['String']['input']>;
  couponValidityPeriod?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  createdFor?: InputMaybe<CampaignCreatedForEnum>;
  currencyCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  dateRange?: InputMaybe<CampaignDateRangeFieldInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  fixedDiscount?: InputMaybe<FixedDiscountInput>;
  hasCoupon: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  includeDiscountedProducts?: InputMaybe<Scalars['Boolean']['input']>;
  isFreeShipping?: InputMaybe<Scalars['Boolean']['input']>;
  onlyUseCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  salesChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  tieredDiscount?: InputMaybe<TieredDiscountInput>;
  title: Scalars['String']['input'];
  translations?: InputMaybe<Array<CampaignTranslationInput>>;
  type: CampaignTypeEnum;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  usageLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
};

export type CampaignMinMaxRangeField = {
  __typename?: 'CampaignMinMaxRangeField';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type CampaignMinMaxRangeFieldInput = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type CampaignOffer = {
  __typename?: 'CampaignOffer';
  availableSalesChannelIds: Array<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currencyCodes?: Maybe<Array<Scalars['String']['output']>>;
  deleted: Scalars['Boolean']['output'];
  endDate?: Maybe<Scalars['Timestamp']['output']>;
  followUpActionType: CampaignOfferFollowUpActionTypeEnum;
  id: Scalars['ID']['output'];
  maxCount?: Maybe<Scalars['Float']['output']>;
  maximumRequiredCartAmount?: Maybe<Scalars['Float']['output']>;
  minimumRequiredCartAmount?: Maybe<Scalars['Float']['output']>;
  name: Scalars['String']['output'];
  offers: Array<CampaignOfferProduct>;
  startDate?: Maybe<Scalars['Timestamp']['output']>;
  targetPageTypes: Array<CampaignOfferTargetPageTypeEnum>;
  triggerSettings?: Maybe<CampaignOfferTriggerFilter>;
  triggers: CampaignOfferTriggers;
  type: CampaignOfferTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum CampaignOfferFollowUpActionTypeEnum {
  DoNothing = 'DO_NOTHING',
  OpenCart = 'OPEN_CART',
  OpenCheckout = 'OPEN_CHECKOUT'
}

export type CampaignOfferProduct = {
  __typename?: 'CampaignOfferProduct';
  applicablePrice?: Maybe<CampaignOfferProductApplicablePriceEnum>;
  countdownMinutes?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  discountAmount?: Maybe<Scalars['Float']['output']>;
  discountType?: Maybe<OrderAmountTypeEnum>;
  excludedVariantIdList?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  order: Scalars['Float']['output'];
  productId: Scalars['String']['output'];
  showCriteria?: Maybe<CampaignOfferProductShowCriteriaEnum>;
  skipOfferIfProductExistsInCart?: Maybe<Scalars['Boolean']['output']>;
  title: Scalars['String']['output'];
  translations?: Maybe<Array<CampaignOfferProductTranslation>>;
};

export enum CampaignOfferProductApplicablePriceEnum {
  DiscountPrice = 'DISCOUNT_PRICE',
  SellPrice = 'SELL_PRICE'
}

export enum CampaignOfferProductShowCriteriaEnum {
  PreviousAccepted = 'PREVIOUS_ACCEPTED',
  PreviousRejected = 'PREVIOUS_REJECTED'
}

export type CampaignOfferProductTranslation = {
  __typename?: 'CampaignOfferProductTranslation';
  description?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export enum CampaignOfferTargetPageTypeEnum {
  Checkout = 'CHECKOUT',
  PostCheckout = 'POST_CHECKOUT',
  Product = 'PRODUCT'
}

export type CampaignOfferTriggerFilter = {
  __typename?: 'CampaignOfferTriggerFilter';
  filterType: CampaignOfferTriggerFilterTypeEnum;
  valueList: Array<Scalars['String']['output']>;
};

export enum CampaignOfferTriggerFilterTypeEnum {
  AllProducts = 'ALL_PRODUCTS',
  Category = 'CATEGORY',
  MinCartAmount = 'MIN_CART_AMOUNT',
  Product = 'PRODUCT',
  ProductAndVariant = 'PRODUCT_AND_VARIANT',
  ProductBrand = 'PRODUCT_BRAND',
  ProductTag = 'PRODUCT_TAG',
  Variant = 'VARIANT'
}

export type CampaignOfferTriggers = {
  __typename?: 'CampaignOfferTriggers';
  filters: Array<CampaignOfferTriggerFilter>;
  shouldMatchAllConditions?: Maybe<Scalars['Boolean']['output']>;
};

export enum CampaignOfferTypeEnum {
  CrossSell = 'CROSS_SELL',
  Upsell = 'UPSELL'
}

export type CampaignPaginationResponse = {
  __typename?: 'CampaignPaginationResponse';
  /**
   * Returns the first three records of each page in the records returned as a response.
   * For example, **let's say page = 3, limit = 30, count = 3.**
   * The records that will return as a response are the records **between 60-62.**
   */
  count: Scalars['Int']['output'];
  data: Array<Campaign>;
  /** In the records returned as Response, it shows whether there are any more records or not. For example, let's say our page field is three and our limit field is thirty. Records between 60 and 90 will be returned. If hasNext is `true` despite these records, **it means there are more records.** If hasNext is `false`, it means there are a total of **90 records.** */
  hasNext: Scalars['Boolean']['output'];
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit: Scalars['Int']['output'];
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page: Scalars['Int']['output'];
};

export type CampaignTieredDiscount = {
  __typename?: 'CampaignTieredDiscount';
  filters?: Maybe<Array<CampaignFilter>>;
  isApplyByCartAmount?: Maybe<Scalars['Boolean']['output']>;
  rules: Array<CampaignTieredDiscountRule>;
  shouldMatchAllConditions?: Maybe<Scalars['Boolean']['output']>;
};

export type CampaignTieredDiscountRule = {
  __typename?: 'CampaignTieredDiscountRule';
  amount: Scalars['Float']['output'];
  lineItemQuantityRange?: Maybe<CampaignMinMaxRangeField>;
  priceRange?: Maybe<CampaignMinMaxRangeField>;
};

export type CampaignTranslation = {
  __typename?: 'CampaignTranslation';
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the title information of the translation. */
  title?: Maybe<Scalars['String']['output']>;
};

export type CampaignTranslationInput = {
  locale: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export enum CampaignTypeEnum {
  BuyXThenGetY = 'BUY_X_THEN_GET_Y',
  FixedAmount = 'FIXED_AMOUNT',
  FreeShipping = 'FREE_SHIPPING',
  Ratio = 'RATIO'
}

export type CampaignTypeEnumFilterInput = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<CampaignTypeEnum>;
  /** Returns a boolean indicating whether a specified value is in an array. */
  in?: InputMaybe<Array<InputMaybe<CampaignTypeEnum>>>;
  /** `not equal`. The filter used for not equality. */
  ne?: InputMaybe<CampaignTypeEnum>;
  /** Returns a boolean indicating whether a specified value is not in an array. */
  nin?: InputMaybe<Array<InputMaybe<CampaignTypeEnum>>>;
};

export type CancelFulfillmentInput = {
  lines?: InputMaybe<Array<CancelFulfillmentOrderLineInput>>;
  orderId: Scalars['String']['input'];
  orderPackageId: Scalars['String']['input'];
};

export type CancelFulfillmentOrderLineInput = {
  orderLineItemId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type CancelOrderLineInput = {
  orderId: Scalars['String']['input'];
  orderLineItems: Array<CancelOrderLineItemInput>;
};

export type CancelOrderLineItemInput = {
  orderLineItemId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  restockItems?: Scalars['Boolean']['input'];
};

export type CargoCompany = {
  __typename?: 'CargoCompany';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Cart = {
  __typename?: 'Cart';
  campaignOffers?: Maybe<Array<CartCampaignOffer>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  createdBy?: Maybe<CartCreatedByEnum>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  dueDate: Scalars['Timestamp']['output'];
  id: Scalars['ID']['output'];
  itemCount: Scalars['Float']['output'];
  items: Array<OrderLineItem>;
  lastActivityDate: Scalars['Timestamp']['output'];
  merchantId: Scalars['String']['output'];
  priceListId?: Maybe<Scalars['String']['output']>;
  salesChannelId: Scalars['String']['output'];
  status: CartStatusEnum;
  storefrontId?: Maybe<Scalars['String']['output']>;
  storefrontRouting?: Maybe<CartStorefrontRouting>;
  storefrontRoutingId?: Maybe<Scalars['String']['output']>;
  storefrontThemeId?: Maybe<Scalars['String']['output']>;
  taxLines?: Maybe<Array<OrderTaxLine>>;
  totalPrice: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type CartCampaignOffer = {
  __typename?: 'CartCampaignOffer';
  appliedOrderLineId?: Maybe<Scalars['String']['output']>;
  campaignOfferId: Scalars['String']['output'];
  campaignOfferProductId?: Maybe<Scalars['String']['output']>;
  offerEndDate?: Maybe<Scalars['Timestamp']['output']>;
  offerStartDate: Scalars['Timestamp']['output'];
  status: CartCampaignOfferStatus;
  targetPageTypes: Array<CampaignOfferTargetPageTypeEnum>;
  triggerSourceOrderLineId: Scalars['String']['output'];
};

export enum CartCampaignOfferStatus {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Removed = 'REMOVED',
  WaitingForAction = 'WAITING_FOR_ACTION'
}

export enum CartCreatedByEnum {
  Admin = 'ADMIN',
  Customer = 'CUSTOMER',
  Upsell = 'UPSELL'
}

export type CartPaginationResponse = {
  __typename?: 'CartPaginationResponse';
  /**
   * Returns the first three records of each page in the records returned as a response.
   * For example, **let's say page = 3, limit = 30, count = 3.**
   * The records that will return as a response are the records **between 60-62.**
   */
  count: Scalars['Int']['output'];
  data: Array<Checkout>;
  /** In the records returned as Response, it shows whether there are any more records or not. For example, let's say our page field is three and our limit field is thirty. Records between 60 and 90 will be returned. If hasNext is `true` despite these records, **it means there are more records.** If hasNext is `false`, it means there are a total of **90 records.** */
  hasNext: Scalars['Boolean']['output'];
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit: Scalars['Int']['output'];
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page: Scalars['Int']['output'];
};

export enum CartStatusEnum {
  Active = 'ACTIVE',
  Freeze = 'FREEZE',
  Passive = 'PASSIVE'
}

export type CartStorefrontRouting = {
  __typename?: 'CartStorefrontRouting';
  domain?: Maybe<Scalars['String']['output']>;
  dynamicCurrencySettings?: Maybe<CartStorefrontRoutingDynamicCurrencySettings>;
  id: Scalars['String']['output'];
  locale?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  priceListId?: Maybe<Scalars['String']['output']>;
};

export type CartStorefrontRoutingDynamicCurrencySettings = {
  __typename?: 'CartStorefrontRoutingDynamicCurrencySettings';
  /** One of '.x0' | '.x9' | '.00' | '.90' | '.99' | '0.00' | '9.90' */
  roundingFormat?: Maybe<Scalars['String']['output']>;
  targetCurrencyCode: Scalars['String']['output'];
  targetCurrencySymbol?: Maybe<Scalars['String']['output']>;
};

export type CartV2CampaignOffer = {
  __typename?: 'CartV2CampaignOffer';
  appliedOrderLineId?: Maybe<Scalars['String']['output']>;
  campaignOffer?: Maybe<CampaignOffer>;
  campaignOfferId: Scalars['String']['output'];
  campaignOfferProductId?: Maybe<Scalars['String']['output']>;
  offerEndDate?: Maybe<Scalars['Timestamp']['output']>;
  offerStartDate: Scalars['Timestamp']['output'];
  status: CartCampaignOfferStatus;
  targetPageTypes: Array<CampaignOfferTargetPageTypeEnum>;
  triggerSourceOrderLineId: Scalars['String']['output'];
};

export enum CartV2StatusEnum {
  Completed = 'COMPLETED',
  Freeze = 'FREEZE',
  Killed = 'KILLED',
  Open = 'OPEN'
}

export type Category = {
  __typename?: 'Category';
  /** It is the id list information where the ids of all the superclasses of the category are found. */
  categoryPath?: Maybe<Array<Scalars['String']['output']>>;
  /** It is the id list information where the ids of all the superclasses of the category are found. */
  categoryPathItems?: Maybe<Array<CategoryPathItem>>;
  conditions?: Maybe<Array<CategoryCondition>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** It is the description of the category of the product. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** It is the id where the picture of the category is kept in the system. */
  imageId?: Maybe<Scalars['String']['output']>;
  isAutomated?: Maybe<Scalars['Boolean']['output']>;
  /** It is the metadata information of the product category. */
  metaData?: Maybe<HtmlMetaData>;
  /** It is the name of the category in which the product is located. */
  name: Scalars['String']['output'];
  orderType?: Maybe<CategoryProductsOrderTypeEnum>;
  /** It is the id of the superclass category of the category. */
  parentId?: Maybe<Scalars['String']['output']>;
  /** It is the information of which sales channel the product category is in. */
  salesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  /** List of hidden sales channels of the category. */
  salesChannels?: Maybe<Array<CategorySalesChannel>>;
  shouldMatchAllConditions?: Maybe<Scalars['Boolean']['output']>;
  /** It is the translation information of the product category. */
  translations?: Maybe<Array<CategoryTranslation>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type CategoryCondition = {
  __typename?: 'CategoryCondition';
  conditionType: CategoryConditionTypeEnum;
  method?: Maybe<CategoryConditionMethodEnum>;
  valueList: Array<Scalars['String']['output']>;
};

export type CategoryConditionInput = {
  conditionType: CategoryConditionTypeEnum;
  method?: InputMaybe<CategoryConditionMethodEnum>;
  valueList: Array<Scalars['String']['input']>;
};

export enum CategoryConditionMethodEnum {
  In = 'IN',
  NotIn = 'NOT_IN'
}

/** CategoryCondition Types */
export enum CategoryConditionTypeEnum {
  Campaign = 'CAMPAIGN',
  Category = 'CATEGORY',
  CreatedAt = 'CREATED_AT',
  DiscountedProducts = 'DISCOUNTED_PRODUCTS',
  PriceRange = 'PRICE_RANGE',
  ProductAttribute = 'PRODUCT_ATTRIBUTE',
  ProductBrand = 'PRODUCT_BRAND',
  ProductTag = 'PRODUCT_TAG',
  VariantValue = 'VARIANT_VALUE'
}

export type CategoryFilterInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CategoryInput = {
  conditions?: InputMaybe<Array<CategoryConditionInput>>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** It is the description of the category of the product. */
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** It is the id where the picture of the category is kept in the system. */
  imageId?: InputMaybe<Scalars['String']['input']>;
  isAutomated?: InputMaybe<Scalars['Boolean']['input']>;
  /** It is the metadata information of the product category. */
  metaData?: InputMaybe<HtmlMetaDataInput>;
  /** It is the name of the category in which the product is located. */
  name: Scalars['String']['input'];
  orderType?: InputMaybe<CategoryProductsOrderTypeEnum>;
  /** It is the id of the superclass category of the category. */
  parentId?: InputMaybe<Scalars['String']['input']>;
  /** List of hidden sales channels of the category. */
  salesChannels?: InputMaybe<Array<CategorySalesChannelInput>>;
  shouldMatchAllConditions?: InputMaybe<Scalars['Boolean']['input']>;
  /** It is the translation information of the product category. */
  translations?: InputMaybe<Array<CategoryTranslationInput>>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type CategoryPathFilterInput = {
  in?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CategoryPathItem = {
  __typename?: 'CategoryPathItem';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** It is the description of the category of the product. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** It is the id where the picture of the category is kept in the system. */
  imageId?: Maybe<Scalars['String']['output']>;
  isAutomated?: Maybe<Scalars['Boolean']['output']>;
  /** It is the metadata information of the product category. */
  metaData?: Maybe<HtmlMetaData>;
  /** It is the name of the category in which the product is located. */
  name: Scalars['String']['output'];
  /** It is the translation information of the product category. */
  translations?: Maybe<Array<CategoryTranslation>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

/** CategoryProductsOrder Types */
export enum CategoryProductsOrderTypeEnum {
  BestSeller = 'BEST_SELLER',
  HighestDiscountRatio = 'HIGHEST_DISCOUNT_RATIO',
  HighestPrice = 'HIGHEST_PRICE',
  LowestDiscountRatio = 'LOWEST_DISCOUNT_RATIO',
  LowestPrice = 'LOWEST_PRICE',
  Manually = 'MANUALLY',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export type CategorySalesChannel = {
  __typename?: 'CategorySalesChannel';
  id: Scalars['String']['output'];
  status: SalesChannelStatusEnum;
};

export type CategorySalesChannelInput = {
  id: Scalars['String']['input'];
  status: SalesChannelStatusEnum;
};

export type CategoryTranslation = {
  __typename?: 'CategoryTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
};

export type CategoryTranslationInput = {
  /** It is the description information of the translation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['input'];
  /** It is the information in which language the translation is saved. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Checkout = {
  __typename?: 'Checkout';
  abandonedCheckoutFlows?: Maybe<Array<AbandonedCartFlow>>;
  adjustments?: Maybe<Array<OrderAdjustment>>;
  availableShippingMethods?: Maybe<Array<AvailableShippingMethod>>;
  billingAddress?: Maybe<OrderAddress>;
  cart?: Maybe<Cart>;
  cartId: Scalars['String']['output'];
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  customer?: Maybe<CheckoutCustomer>;
  deleted: Scalars['Boolean']['output'];
  giftPackageLines?: Maybe<Array<OrderGiftPackageLine>>;
  giftPackageNote?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isGiftPackage?: Maybe<Scalars['Boolean']['output']>;
  merchantId: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['String']['output']>;
  orderedAt?: Maybe<Scalars['Timestamp']['output']>;
  recoverEmailStatus?: Maybe<CheckoutRecoveryEmailStatusEnum>;
  recoveryStatus?: Maybe<CheckoutRecoveryStatusEnum>;
  shippingAddress?: Maybe<OrderAddress>;
  shippingLines?: Maybe<Array<OrderShippingLine>>;
  shippingMethod: OrderShippingMethodEnum;
  shippingSettingsId?: Maybe<Scalars['String']['output']>;
  shippingZoneRateId?: Maybe<Scalars['String']['output']>;
  status: CheckoutStatusEnum;
  stockLocationId?: Maybe<Scalars['String']['output']>;
  totalFinalPrice: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type CheckoutCustomer = {
  __typename?: 'CheckoutCustomer';
  accountStatus?: Maybe<CustomerAccountStatusEnum>;
  customerGroupIds?: Maybe<Array<Scalars['String']['output']>>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  identityNumber?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  notificationsAccepted?: Maybe<Scalars['Boolean']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  subscriptionStatus?: Maybe<CustomerEmailSubscriptionStatusesEnum>;
};

export enum CheckoutRecoveryEmailStatusEnum {
  NotSent = 'NOT_SENT',
  Sent = 'SENT'
}

export enum CheckoutRecoveryStatusEnum {
  NotRecovered = 'NOT_RECOVERED',
  Recovered = 'RECOVERED'
}

export enum CheckoutStatusEnum {
  Completed = 'COMPLETED',
  Freeze = 'FREEZE',
  Killed = 'KILLED',
  Open = 'OPEN'
}

export type City = {
  __typename?: 'City';
  /** The two-letter city code corresponding to the city. */
  cityCode?: Maybe<Scalars['String']['output']>;
  /** ID indicating which country the city belongs to. */
  countryId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Indicates the latitude of the city. */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Indicates the longitude of the city. */
  longitude?: Maybe<Scalars['String']['output']>;
  /** City's name. */
  name: Scalars['String']['output'];
  /** Specifies the order of cities. */
  order?: Maybe<Scalars['Float']['output']>;
  /** ID indicating which state the city belongs to. */
  stateId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type Country = {
  __typename?: 'Country';
  /** Indicates the capital of the county. */
  capital?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Indicates the currency of the county. */
  currency?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** Indicates the flag emoji of the county. */
  emoji?: Maybe<Scalars['String']['output']>;
  /** Indicates the flag emoji code of the county. */
  emojiString?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The two-letter country code corresponding to the country. */
  iso2?: Maybe<Scalars['String']['output']>;
  /** The three-letter country code corresponding to the country. */
  iso3?: Maybe<Scalars['String']['output']>;
  /** Shows spellings of country name in different languages. */
  locationTranslations: LocationTranslations;
  /** Country's name. */
  name: Scalars['String']['output'];
  /** Indicates the name of the country in the local language. */
  native?: Maybe<Scalars['String']['output']>;
  /** The phone code corresponding to the country. */
  phoneCode?: Maybe<Scalars['String']['output']>;
  /** Indicates the region of the county. */
  region?: Maybe<Scalars['String']['output']>;
  /** Indicates the subregion of the county. */
  subregion?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  applicableCustomerId?: Maybe<Scalars['String']['output']>;
  campaignId: Scalars['String']['output'];
  canCombineWithOtherCampaigns: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  dateRange?: Maybe<CouponDateRangeField>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  usageCount: Scalars['Int']['output'];
  usageLimit?: Maybe<Scalars['Int']['output']>;
  usageLimitPerCustomer?: Maybe<Scalars['Int']['output']>;
};

export type CouponDateRangeField = {
  __typename?: 'CouponDateRangeField';
  end?: Maybe<Scalars['Timestamp']['output']>;
  start?: Maybe<Scalars['Timestamp']['output']>;
};

export type CouponPaginationResponse = {
  __typename?: 'CouponPaginationResponse';
  /**
   * Returns the first three records of each page in the records returned as a response.
   * For example, **let's say page = 3, limit = 30, count = 3.**
   * The records that will return as a response are the records **between 60-62.**
   */
  count: Scalars['Int']['output'];
  data: Array<Coupon>;
  /** In the records returned as Response, it shows whether there are any more records or not. For example, let's say our page field is three and our limit field is thirty. Records between 60 and 90 will be returned. If hasNext is `true` despite these records, **it means there are more records.** If hasNext is `false`, it means there are a total of **90 records.** */
  hasNext: Scalars['Boolean']['output'];
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit: Scalars['Int']['output'];
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page: Scalars['Int']['output'];
};

export type CreateMerchantAppPaymentWithSubscriptionInput = {
  /** It keeps the information of which type of license is obtained. For example: trendyol-app-licence, foriba-app-licence etc. */
  storeAppListingSubscriptionKey: Scalars['String']['input'];
};

export type CreateOrderInput = {
  /** It is the address to which the order will be billing. */
  billingAddress?: InputMaybe<OrderAddressInput>;
  /** It is the branch session id of the order. If the order is placed via ikasPos, this field can be sent as filled. */
  branchSessionId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  /** It is the currency code of the order. */
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  /** It is the customer information in the order. */
  customer?: InputMaybe<OrderCustomerInput>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Host name of order source. */
  host?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** It is an order note. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** A list of adjustment objects, each containing information about a adjustment in the order. */
  orderAdjustments?: InputMaybe<Array<OrderAdjustmentInput>>;
  /** A list of line item objects, each containing information about an item in the order. */
  orderLineItems: Array<OrderLineItemInput>;
  /**
   * It is the id list of the tags in the order.
   * * Is the entered tag id list must be exist in ikas.
   */
  orderTagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The date the order was ordered. */
  orderedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  /**
   * It is the id of the price list that includes the prices of the products in the order.
   * * Is the entered id must be exist in ikas.
   */
  priceListId?: InputMaybe<Scalars['String']['input']>;
  /**
   * It is the sales channel id where the order was created.
   * * Is the entered id must be exist in ikas.
   */
  salesChannelId?: InputMaybe<Scalars['String']['input']>;
  /** It is the address to which the order will be shipping. */
  shippingAddress?: InputMaybe<OrderAddressInput>;
  /** A list of shipping line objects, each containing information about a shipping in the order. */
  shippingLines?: InputMaybe<Array<OrderShippingLineInput>>;
  /** It is the shipping method enum of the order */
  shippingMethod?: InputMaybe<OrderShippingMethodEnum>;
  /** It is the source id of the order. If the order came from the marketplace, it shows the order number in the marketplace. */
  sourceId?: InputMaybe<Scalars['String']['input']>;
  /** It is the staff information of the order. */
  staff?: InputMaybe<OrderStaffInput>;
  /** It is the terminal session id of the order. If the order is placed via ikasPos, this field can be sent as filled. */
  terminalId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type CreateOrderWithTransactionsInput = {
  /** If there is no customer connected to the e-mail in the order and it is not desired to create a new customer with this e-mail, it can be sent as `true`. */
  disableAutoCreateCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** If this value is sent as 'true,' your order lines will not be taxed. */
  isTaxFreeOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Contains the order information to be created. */
  order: CreateOrderInput;
  /**
   * A list of transaction objects.
   * * The list must contain at least one transaction.
   */
  transactions: Array<OrderTransactionInput>;
};

export enum CurrencyFormatSymbolPosition {
  Left = 'LEFT',
  Right = 'RIGHT'
}

export type Customer = {
  __typename?: 'Customer';
  /** CustomerAccountStatusEnum */
  accountStatus?: Maybe<CustomerAccountStatusEnum>;
  accountStatusUpdatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** A list of the ten most recently updated addresses for the customer. */
  addresses?: Maybe<Array<CustomerAddress>>;
  attributes?: Maybe<Array<CustomerAttributeValue>>;
  birthDate?: Maybe<Scalars['Timestamp']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Groups that the store owner attaches to the customer. */
  customerGroupIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Segments that the customers are belong to. */
  customerSegmentIds?: Maybe<Array<Scalars['String']['output']>>;
  /** It is the sequence value of the customer. The sequence value starts from 1. */
  customerSequence?: Maybe<Scalars['Float']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** The unique email address of the customer. Attempting to assign the same email address to multiple customers returns an error. */
  email?: Maybe<Scalars['String']['output']>;
  /** The date the **email** was verified. */
  emailVerifiedDate?: Maybe<Scalars['Timestamp']['output']>;
  /** The customer's first name. */
  firstName: Scalars['String']['output'];
  /** Date of first order by the customer */
  firstOrderDate?: Maybe<Scalars['Timestamp']['output']>;
  /** Customer's full name. Firstname plus lastname if firstname and lastname exist. Otherwise, it is saved as firstname only. */
  fullName?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<CustomerGenderTypeEnum>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  /** Email verification status. **isEmailVerified** returns `true` if the email is verified. */
  isEmailVerified?: Maybe<Scalars['Boolean']['output']>;
  /** Phone verification status. **isPhoneVerified** returns `true` if the email is verified. */
  isPhoneVerified?: Maybe<Scalars['Boolean']['output']>;
  /** The customer's last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** Date of last order by the customer */
  lastOrderDate?: Maybe<Scalars['Timestamp']['output']>;
  /** Last used price list id by the customer */
  lastPriceListId?: Maybe<Scalars['String']['output']>;
  /** Last used storefront routing id by the customer */
  lastStorefrontRoutingId?: Maybe<Scalars['String']['output']>;
  /** A note about the customer. */
  note?: Maybe<Scalars['String']['output']>;
  /** Number of orders placed by the customer. */
  orderCount?: Maybe<Scalars['Float']['output']>;
  /** Date the customer last changed their password. */
  passwordUpdateDate?: Maybe<Scalars['Timestamp']['output']>;
  /** The customer's phone number */
  phone?: Maybe<Scalars['String']['output']>;
  /** CustomerEmailSubscriptionStatusesEnum */
  phoneSubscriptionStatus?: Maybe<CustomerEmailSubscriptionStatusesEnum>;
  phoneSubscriptionStatusUpdatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** The date the **email** was verified. */
  phoneVerifiedDate?: Maybe<Scalars['Timestamp']['output']>;
  preferredLanguage?: Maybe<Scalars['String']['output']>;
  priceListId?: Maybe<Scalars['String']['output']>;
  priceListRules?: Maybe<Array<CustomerPriceListRule>>;
  /** Registration source of customer. */
  registrationSource?: Maybe<CustomerRegistrationSourceEnum>;
  /** CustomerEmailSubscriptionStatusesEnum */
  smsSubscriptionStatus?: Maybe<CustomerEmailSubscriptionStatusesEnum>;
  smsSubscriptionStatusUpdatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** CustomerEmailSubscriptionStatusesEnum */
  subscriptionStatus?: Maybe<CustomerEmailSubscriptionStatusesEnum>;
  subscriptionStatusUpdatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Tags that the store owner attaches to the customer. */
  tagIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Amount of orders by the customer */
  totalOrderPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  userAgent?: Maybe<Scalars['String']['output']>;
};

/** Customer Account Statuses */
export enum CustomerAccountStatusEnum {
  ActiveAccount = 'ACTIVE_ACCOUNT',
  DeactivatedAccount = 'DEACTIVATED_ACCOUNT',
  DeclinedAccountInvitation = 'DECLINED_ACCOUNT_INVITATION',
  DisabledAccount = 'DISABLED_ACCOUNT',
  InvitedToCreateAccount = 'INVITED_TO_CREATE_ACCOUNT'
}

export type CustomerAddress = {
  __typename?: 'CustomerAddress';
  /** The customer's mailing address. */
  addressLine1: Scalars['String']['output'];
  /** An additional field for the customer's mailing address. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  attributes?: Maybe<Array<CustomerAttributeValue>>;
  /** The customer's city. */
  city: CustomerAddressCity;
  /** The customer's company. */
  company?: Maybe<Scalars['String']['output']>;
  /** The customer's country. */
  country: CustomerAddressCountry;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** The customer's district in city. */
  district?: Maybe<CustomerAddressDistrict>;
  /** The customer's first name. */
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** The customer's identity numbers. */
  identityNumber?: Maybe<Scalars['String']['output']>;
  /** Whether this address is the default address for the customer. Returns `true` for each default address. */
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  /** The customer's last name. */
  lastName: Scalars['String']['output'];
  /** The customer's phone number at this address */
  phone?: Maybe<Scalars['String']['output']>;
  /** The customer's postal code, also known as zip, postcode, etc. */
  postalCode?: Maybe<Scalars['String']['output']>;
  region?: Maybe<CustomerAddressRegion>;
  state?: Maybe<CustomerAddressState>;
  /** Tax number that the customer will use for orders */
  taxNumber?: Maybe<Scalars['String']['output']>;
  /** If customer is corporate, customer can use that field to fill their Tax Office name. */
  taxOffice?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type CustomerAddressCity = {
  __typename?: 'CustomerAddressCity';
  /** The two-letter country code corresponding to the customer's country. */
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** The customer's normalized city name. */
  name: Scalars['String']['output'];
};

export type CustomerAddressCountry = {
  __typename?: 'CustomerAddressCountry';
  /** The two-letter country code corresponding to the customer's country. */
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** The two-letter country code corresponding to the customer's country. */
  iso2?: Maybe<Scalars['String']['output']>;
  /** The two-letter country code corresponding to the customer's country. */
  iso3?: Maybe<Scalars['String']['output']>;
  /** The customer's normalized country name. */
  name: Scalars['String']['output'];
};

export type CustomerAddressDistrict = {
  __typename?: 'CustomerAddressDistrict';
  /** The two-letter district code corresponding to the customer's district. */
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** The customer's normalized district name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomerAddressRegion = {
  __typename?: 'CustomerAddressRegion';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type CustomerAddressState = {
  __typename?: 'CustomerAddressState';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CustomerAttribute = {
  __typename?: 'CustomerAttribute';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options?: Maybe<Array<CustomerAttributeOption>>;
  order?: Maybe<Scalars['Float']['output']>;
  routings?: Maybe<Array<CustomerAttributeRouting>>;
  salesChannels?: Maybe<Array<CustomerAttributeSalesChannel>>;
  translations?: Maybe<Array<CustomerAttributeTranslation>>;
  type: CustomerAttributeTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type CustomerAttributeOption = {
  __typename?: 'CustomerAttributeOption';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type CustomerAttributeOptionTranslation = {
  __typename?: 'CustomerAttributeOptionTranslation';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

/** Customer Attribute Permission Types */
export enum CustomerAttributePermissionEnum {
  Invisible = 'INVISIBLE',
  Read = 'READ',
  Write = 'WRITE'
}

/** Customer Attribute Register Page Requirement Types */
export enum CustomerAttributeRegisterPageRequirementEnum {
  Invisible = 'INVISIBLE',
  Mandatory = 'MANDATORY',
  Optional = 'OPTIONAL'
}

export type CustomerAttributeRouting = {
  __typename?: 'CustomerAttributeRouting';
  storefrontRoutingId: Scalars['String']['output'];
};

export type CustomerAttributeSalesChannel = {
  __typename?: 'CustomerAttributeSalesChannel';
  permission: CustomerAttributePermissionEnum;
  registerPageRequirement: CustomerAttributeRegisterPageRequirementEnum;
  salesChannelId: Scalars['String']['output'];
  storefrontId: Scalars['String']['output'];
};

export type CustomerAttributeTranslation = {
  __typename?: 'CustomerAttributeTranslation';
  description?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<CustomerAttributeOptionTranslation>>;
};

/** CustomerAttribute Types */
export enum CustomerAttributeTypeEnum {
  Boolean = 'BOOLEAN',
  Choice = 'CHOICE',
  Date = 'DATE',
  Datetime = 'DATETIME',
  MultipleChoice = 'MULTIPLE_CHOICE',
  Numeric = 'NUMERIC',
  Text = 'TEXT'
}

export type CustomerAttributeValue = {
  __typename?: 'CustomerAttributeValue';
  customerAttributeId?: Maybe<Scalars['String']['output']>;
  customerAttributeOptionId?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export enum CustomerB2BStatusEnum {
  ActiveAccount = 'ACTIVE_ACCOUNT',
  DisabledAccount = 'DISABLED_ACCOUNT',
  WaitingForApproval = 'WAITING_FOR_APPROVAL'
}

/** Customer Email Subscription Statuses */
export enum CustomerEmailSubscriptionStatusesEnum {
  NotSubscribed = 'NOT_SUBSCRIBED',
  PendingConfirmation = 'PENDING_CONFIRMATION',
  Subscribed = 'SUBSCRIBED'
}

export enum CustomerGenderTypeEnum {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type CustomerPaginationResponse = {
  __typename?: 'CustomerPaginationResponse';
  /**
   * Returns the first three records of each page in the records returned as a response.
   * For example, **let's say page = 3, limit = 30, count = 3.**
   * The records that will return as a response are the records **between 60-62.**
   */
  count: Scalars['Int']['output'];
  data: Array<Customer>;
  /** In the records returned as Response, it shows whether there are any more records or not. For example, let's say our page field is three and our limit field is thirty. Records between 60 and 90 will be returned. If hasNext is `true` despite these records, **it means there are more records.** If hasNext is `false`, it means there are a total of **90 records.** */
  hasNext: Scalars['Boolean']['output'];
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit: Scalars['Int']['output'];
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page: Scalars['Int']['output'];
};

export type CustomerPriceListRule = {
  __typename?: 'CustomerPriceListRule';
  discountRate?: Maybe<Scalars['Float']['output']>;
  filters?: Maybe<Array<CustomerPriceListRuleFilter>>;
  priceListId?: Maybe<Scalars['String']['output']>;
  shouldMatchAllFilters?: Maybe<Scalars['Boolean']['output']>;
  value: Scalars['Float']['output'];
  valueType: CustomerPriceListRuleValueTypeEnum;
};

export type CustomerPriceListRuleFilter = {
  __typename?: 'CustomerPriceListRuleFilter';
  type: CustomerPriceListRuleFilterTypeEnum;
  valueList: Array<Scalars['String']['output']>;
};

export enum CustomerPriceListRuleFilterTypeEnum {
  Category = 'CATEGORY',
  Product = 'PRODUCT',
  ProductBrand = 'PRODUCT_BRAND',
  ProductTag = 'PRODUCT_TAG'
}

export enum CustomerPriceListRuleValueTypeEnum {
  DiscountAmount = 'DISCOUNT_AMOUNT',
  DiscountRate = 'DISCOUNT_RATE',
  FixedPrice = 'FIXED_PRICE'
}

/** Customer Registration Source Enum */
export enum CustomerRegistrationSourceEnum {
  Apple = 'apple',
  Credentials = 'credentials',
  Facebook = 'facebook',
  Google = 'google',
  Twitch = 'twitch'
}

export type DateFilterInput = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<Scalars['Timestamp']['input']>;
  /** `greater than` selects the documents where the value of the `input` is greater than to (** i.e. > **) a specified value (e.g. value.) */
  gt?: InputMaybe<Scalars['Timestamp']['input']>;
  /** `greater than or equals` selects the documents where the value of the `input` is greater than or equal to (** i.e. >= **) a specified value (e.g. value.) */
  gte?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Returns a boolean indicating whether a specified value is in an array. */
  in?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
  /** `less than` selects the documents where the value of the `input` is less than or equal to (** i.e. < **) a specified value (e.g. value.) */
  lt?: InputMaybe<Scalars['Timestamp']['input']>;
  /** `less than or equals` selects the documents where the value of the `input` is less than or equal to (** i.e. <= **) a specified value (e.g. value.) */
  lte?: InputMaybe<Scalars['Timestamp']['input']>;
  /** `not equal`. The filter used for not equality. */
  ne?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Returns a boolean indicating whether a specified value is not in an array. */
  nin?: InputMaybe<Array<Scalars['Timestamp']['input']>>;
};

export type District = {
  __typename?: 'District';
  /** ID indicating which city the district belongs to. */
  cityId: Scalars['String']['output'];
  /** ID indicating which country the district belongs to. */
  countryId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Indicates the latitude of the city. */
  latitude?: Maybe<Scalars['String']['output']>;
  /** Indicates the longitude of the city. */
  longitude?: Maybe<Scalars['String']['output']>;
  /** District's name. */
  name: Scalars['String']['output'];
  /** Specifies the order of districts. */
  order?: Maybe<Scalars['Float']['output']>;
  /** ID indicating which state the district belongs to. */
  stateId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type FixedDiscount = {
  __typename?: 'FixedDiscount';
  amount?: Maybe<Scalars['Float']['output']>;
  filters?: Maybe<Array<CampaignFilter>>;
  isApplyByCartAmount?: Maybe<Scalars['Boolean']['output']>;
  lineItemQuantityRange?: Maybe<CampaignMinMaxRangeField>;
  priceRange?: Maybe<CampaignMinMaxRangeField>;
  shouldMatchAllConditions?: Maybe<Scalars['Boolean']['output']>;
};

export type FixedDiscountInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  filters?: InputMaybe<Array<CampaignFilterInput>>;
  isApplyByCartAmount?: InputMaybe<Scalars['Boolean']['input']>;
  lineItemQuantityRange?: InputMaybe<CampaignMinMaxRangeFieldInput>;
  priceRange?: InputMaybe<CampaignMinMaxRangeFieldInput>;
  shouldMatchAllConditions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FulFillOrderInput = {
  lines: Array<FulfillOrderLineInput>;
  markAsReadyForShipment?: InputMaybe<Scalars['Boolean']['input']>;
  orderId: Scalars['String']['input'];
  sendNotificationToCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  sourcePackageId?: InputMaybe<Scalars['String']['input']>;
  trackingInfoDetail?: InputMaybe<TrackingInfoDetailInput>;
};

export type FulfillOrderLineInput = {
  orderLineItemId: Scalars['String']['input'];
  quantity: Scalars['Float']['input'];
};

export type GenerateCouponInput = {
  applicableCustomerId?: InputMaybe<Scalars['String']['input']>;
  canCombineWithOtherCampaigns: Scalars['Boolean']['input'];
  prefix: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  usageLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
};

export type GetImportJobDataResponse = {
  __typename?: 'GetImportJobDataResponse';
  data?: Maybe<Scalars['String']['output']>;
  errorMessage?: Maybe<Scalars['String']['output']>;
  importJobId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ImportStatusEnum>;
};

export type GetLastImportJobDataResponse = {
  __typename?: 'GetLastImportJobDataResponse';
  fileURL?: Maybe<Scalars['String']['output']>;
  importJobId?: Maybe<Scalars['String']['output']>;
};

export type GetLastImportJobDataResponseData = {
  __typename?: 'GetLastImportJobDataResponseData';
  data?: Maybe<Array<GetLastImportJobDataResponse>>;
};

export type GetOrderInvoicePdfUrlInput = {
  invoiceId: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
};

export type GetVideoUploadUrlResponse = {
  __typename?: 'GetVideoUploadURLResponse';
  /** Fields object that should be sent with the video file as multipart form-data. */
  fields: Scalars['JSON']['output'];
  /** Upload url for the specified video. */
  url: Scalars['String']['output'];
};

export type GetY = {
  __typename?: 'GetY';
  amount: Scalars['Float']['output'];
  automaticallyAddItemToCart?: Maybe<Scalars['Boolean']['output']>;
  discountRatio: Scalars['Float']['output'];
  discountType?: Maybe<CampaignGetYDiscountTypeEnum>;
  filter: CampaignFilter;
};

export type GetYInput = {
  amount: Scalars['Float']['input'];
  automaticallyAddItemToCart?: InputMaybe<Scalars['Boolean']['input']>;
  discountRatio: Scalars['Float']['input'];
  discountType?: InputMaybe<CampaignGetYDiscountTypeEnum>;
  filter: CampaignFilterInput;
};

export type GlobalTaxSettings = {
  __typename?: 'GlobalTaxSettings';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isTaxExcludedOnPrices: Scalars['Boolean']['output'];
  isTaxExcludedOnShippingPrices: Scalars['Boolean']['output'];
  storefrontId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type GlobalTaxSettingsInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isTaxExcludedOnPrices?: Scalars['Boolean']['input'];
  isTaxExcludedOnShippingPrices?: Scalars['Boolean']['input'];
  storefrontId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type HtmlMetaData = {
  __typename?: 'HTMLMetaData';
  /** Canonical URL list of entity. */
  canonicals?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** The description of the metadata. */
  description?: Maybe<Scalars['String']['output']>;
  /** Defines if the entity is not indexable by search engines */
  disableIndex?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  metadataOverrides?: Maybe<Array<HtmlMetaDataOverride>>;
  /** The page title of the metadata. */
  pageTitle?: Maybe<Scalars['String']['output']>;
  redirectTo?: Maybe<Scalars['String']['output']>;
  /** The token of the metadata. It is saved as completely unique. */
  slug: Scalars['String']['output'];
  targetId?: Maybe<Scalars['String']['output']>;
  targetType?: Maybe<HtmlMetaDataTargetTypeEnum>;
  /** The translations information of the metadata. */
  translations?: Maybe<Array<HtmlMetaDataTranslation>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type HtmlMetaDataInput = {
  canonicals?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  disableIndex?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  metadataOverrides?: InputMaybe<Array<HtmlMetaDataOverrideInput>>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  targetId?: InputMaybe<Scalars['String']['input']>;
  targetType?: InputMaybe<HtmlMetaDataTargetTypeEnum>;
  translations?: InputMaybe<Array<HtmlMetaDataTranslationInput>>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type HtmlMetaDataOverride = {
  __typename?: 'HTMLMetaDataOverride';
  description: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  pageTitle: Scalars['String']['output'];
  storefrontId?: Maybe<Scalars['String']['output']>;
  storefrontRegionId?: Maybe<Scalars['String']['output']>;
};

export type HtmlMetaDataOverrideInput = {
  description: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  pageTitle: Scalars['String']['input'];
  storefrontId?: InputMaybe<Scalars['String']['input']>;
  storefrontRegionId?: InputMaybe<Scalars['String']['input']>;
};

/** Url Slug Target Type Enum Codes */
export enum HtmlMetaDataTargetTypeEnum {
  Brand = 'BRAND',
  Category = 'CATEGORY',
  Page = 'PAGE',
  Product = 'PRODUCT'
}

export type HtmlMetaDataTranslation = {
  __typename?: 'HTMLMetaDataTranslation';
  description?: Maybe<Scalars['String']['output']>;
  locale: Scalars['String']['output'];
  pageTitle?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type HtmlMetaDataTranslationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locale: Scalars['String']['input'];
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

/** Import Status Type */
export enum ImportStatusEnum {
  Failed = 'FAILED',
  Fetching = 'FETCHING',
  Importing = 'IMPORTING',
  Success = 'SUCCESS',
  Waiting = 'WAITING',
  WaitingForImport = 'WAITING_FOR_IMPORT'
}

/** Import Type */
export enum ImportTypeEnum {
  Customer = 'CUSTOMER',
  CustomerAttribute = 'CUSTOMER_ATTRIBUTE',
  CustomerReview = 'CUSTOMER_REVIEW',
  Order = 'ORDER',
  OrderCoupon = 'ORDER_COUPON',
  OrderRaffleParticipant = 'ORDER_RAFFLE_PARTICIPANT',
  Product = 'PRODUCT',
  ProductAttribute = 'PRODUCT_ATTRIBUTE',
  ProductBackInStockReminder = 'PRODUCT_BACK_IN_STOCK_REMINDER',
  ProductBrand = 'PRODUCT_BRAND',
  ProductCategory = 'PRODUCT_CATEGORY',
  ProductOrder = 'PRODUCT_ORDER',
  ProductPriceList = 'PRODUCT_PRICE_LIST',
  ProductPurchaseOrder = 'PRODUCT_PURCHASE_ORDER',
  ProductStockCount = 'PRODUCT_STOCK_COUNT',
  ProductStockTransfer = 'PRODUCT_STOCK_TRANSFER',
  ReportPurchaseOrderByDate = 'REPORT_PURCHASE_ORDER_BY_DATE',
  ReportSalesByDate = 'REPORT_SALES_BY_DATE',
  ReportSalesByGroupFields = 'REPORT_SALES_BY_GROUP_FIELDS',
  StorefrontRedirect = 'STOREFRONT_REDIRECT',
  StoreFrontThemeLocalization = 'STORE_FRONT_THEME_LOCALIZATION',
  Translation = 'TRANSLATION'
}

export type Invoice = {
  __typename?: 'Invoice';
  /** It is the id of the order invoice. */
  appId: Scalars['String']['output'];
  /** It is the id of the order invoice. */
  appName: Scalars['String']['output'];
  /** It is the id of the order invoice. */
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  /** It is indicates that the invoice has the pdf. */
  hasPdf?: Maybe<Scalars['Boolean']['output']>;
  /** It is the id of the order invoice. */
  id: Scalars['String']['output'];
  /** It is data of the invoice. */
  invoiceData?: Maybe<Scalars['JSON']['output']>;
  /** It is the id of the order invoice. */
  invoiceNumber: Scalars['String']['output'];
  /** It is the id of the order invoice. */
  storeAppId: Scalars['String']['output'];
  /** It is the type enum of the invoice. */
  type: InvoiceTypeEnum;
};

export enum InvoiceTypeEnum {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL',
  Other = 'OTHER'
}

export type Language = {
  __typename?: 'Language';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ListAbandonedCartInput = {
  recoverEmailStatus?: InputMaybe<CheckoutRecoveryEmailStatusEnum>;
  recoveryStatus?: InputMaybe<CheckoutRecoveryStatusEnum>;
};

export type LocalDeliveryAvailableHoursRange = {
  __typename?: 'LocalDeliveryAvailableHoursRange';
  endTime: Scalars['String']['output'];
  startTime: Scalars['String']['output'];
};

export type LocalDeliverySettings = {
  __typename?: 'LocalDeliverySettings';
  activeDays: Array<LocalDeliverySettingsDayType>;
  activeLocalDeliveryHours?: Maybe<LocalDeliveryAvailableHoursRange>;
  timezone: Scalars['String']['output'];
};

export type LocalDeliverySettingsDayEstimatedDeliveryTime = {
  __typename?: 'LocalDeliverySettingsDayEstimatedDeliveryTime';
  type: LocalDeliverySettingsDeliveryTimeType;
  value: Scalars['Float']['output'];
};

export type LocalDeliverySettingsDayType = {
  __typename?: 'LocalDeliverySettingsDayType';
  activeLocalDeliveryHours?: Maybe<LocalDeliveryAvailableHoursRange>;
  day: LocalDeliverySettingsDayTypes;
  estimatedDeliveryTime?: Maybe<LocalDeliverySettingsDayEstimatedDeliveryTime>;
};

/** LocalDeliverySettingsDayTypes */
export enum LocalDeliverySettingsDayTypes {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY'
}

/** LocalDeliverySettingsDeliveryTimeType */
export enum LocalDeliverySettingsDeliveryTimeType {
  Day = 'DAY',
  Hour = 'HOUR',
  Minute = 'MINUTE'
}

export type LocationTranslations = {
  __typename?: 'LocationTranslations';
  de?: Maybe<Scalars['String']['output']>;
  en: Scalars['String']['output'];
  fr?: Maybe<Scalars['String']['output']>;
  tr: Scalars['String']['output'];
};

export type MeResponse = {
  __typename?: 'MeResponse';
  /** The date the app was added. */
  addedDate?: Maybe<Scalars['Timestamp']['output']>;
  /** The merchant staff's email address. */
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  partnerId?: Maybe<Scalars['String']['output']>;
  /** The id of the sales channel owned by the merchant. */
  salesChannelId?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  /** It keeps the information of the operations that this application can access and perform. For more information please review [Scopes section](/docs/intro#api-scopes). */
  scopes?: Maybe<Array<AppScopeEnum>>;
  /** The application's id in the store. */
  storeAppId?: Maybe<Scalars['String']['output']>;
  /** It keeps the information that a merchant cn install more than one application. If `true`, merchant can add more than one application. */
  supportsMultipleInstallation?: Maybe<Scalars['Boolean']['output']>;
};

export type MerchantAddress = {
  __typename?: 'MerchantAddress';
  /** The merchant's mailing address. */
  addressLine1?: Maybe<Scalars['String']['output']>;
  /** An additional field for the merchant's mailing address. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** The merchant's city. */
  city?: Maybe<MerchantAddressCity>;
  company?: Maybe<Scalars['String']['output']>;
  /** The merchant's country. */
  country?: Maybe<MerchantAddressCountry>;
  /** The merchant's district in city. */
  district?: Maybe<MerchantAddressDistrict>;
  /** The merchant staff's first name. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** The merchant's identity numbers. */
  identityNumber?: Maybe<Scalars['String']['output']>;
  /** The merchant staff's last name. */
  lastName?: Maybe<Scalars['String']['output']>;
  /** The merchant's postal code, also known as zip, postcode, etc. */
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<MerchantAddressState>;
  taxNumber?: Maybe<Scalars['String']['output']>;
  /** If merchant is corporate, merchant can use that field to fill their Tax Office name. */
  taxOffice?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<MerchantSettingsAddressTypeEnum>;
  vkn?: Maybe<Scalars['String']['output']>;
};

export type MerchantAddressCity = {
  __typename?: 'MerchantAddressCity';
  /** The city code corresponding to the merchant's city. */
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** The merchant's normalized city name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type MerchantAddressCountry = {
  __typename?: 'MerchantAddressCountry';
  /** The ISO3 country code corresponding to the merchant's country. */
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** Two-letter country code */
  iso2?: Maybe<Scalars['String']['output']>;
  /** Three-letter country code */
  iso3?: Maybe<Scalars['String']['output']>;
  /** The merchant's normalized country name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type MerchantAddressDistrict = {
  __typename?: 'MerchantAddressDistrict';
  /** The district code corresponding to the merchant's district. */
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** The merchant's normalized district name. */
  name?: Maybe<Scalars['String']['output']>;
};

export type MerchantAddressState = {
  __typename?: 'MerchantAddressState';
  code?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type MerchantAppPayment = {
  __typename?: 'MerchantAppPayment';
  /** It keeps the information of which type of license is obtained. For example: trendyol-app-licence, foriba-app-licence etc. */
  appPaymentKey?: Maybe<Scalars['String']['output']>;
  /** The id of the app that generated the app payment. Actually, the id of the app for which merchant app payment was created. */
  authorizedAppId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The url where the Merchant will be redirected to the payment screen. On this page, the payment process is performed by obtaining the card information. */
  merchantPaymentUrl: Scalars['String']['output'];
  /** The created merchant app keeps the name of the payment.  */
  name: Scalars['String']['output'];
  /** The merchant app keeps the date of completion of the payment. In other words, it keeps the information of the date the payment was received. */
  paymentDate?: Maybe<Scalars['Timestamp']['output']>;
  /** Merchant app payment pricing description. */
  prices: Array<MerchantAppPaymentPrice>;
  status: MerchantAppPaymentStatusEnum;
  /** The id of the application for which payment will be created in the store */
  storeAppId: Scalars['String']['output'];
  storeAppListingSubscriptionId?: Maybe<Scalars['String']['output']>;
  storeAppListingSubscriptionKey?: Maybe<Scalars['String']['output']>;
  type: MerchantAppPaymentTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type MerchantAppPaymentInput = {
  /** The created merchant app keeps the name of the payment. */
  name: Scalars['String']['input'];
  /** The area where the price information of the product is kept. Input array can be sent a minimum of one element and a maximum of 2 elements. */
  price: Scalars['Float']['input'];
};

export type MerchantAppPaymentPaginationResponse = {
  __typename?: 'MerchantAppPaymentPaginationResponse';
  /**
   * Returns the first three records of each page in the records returned as a response.
   * For example, **let's say page = 3, limit = 30, count = 3.**
   * The records that will return as a response are the records **between 60-62.**
   */
  count: Scalars['Int']['output'];
  data: Array<MerchantAppPayment>;
  /** In the records returned as Response, it shows whether there are any more records or not. For example, let's say our page field is three and our limit field is thirty. Records between 60 and 90 will be returned. If hasNext is `true` despite these records, **it means there are more records.** If hasNext is `false`, it means there are a total of **90 records.** */
  hasNext: Scalars['Boolean']['output'];
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit: Scalars['Int']['output'];
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page: Scalars['Int']['output'];
};

export type MerchantAppPaymentPrice = {
  __typename?: 'MerchantAppPaymentPrice';
  period: SubscriptionPeriodEnum;
  /** The area where the price information of the product is kept. Here, one-time, monthly or annual payments can be made and the information is kept in this way. */
  price: Scalars['Float']['output'];
};

export enum MerchantAppPaymentStatusEnum {
  Paid = 'PAID',
  PaymentFailed = 'PAYMENT_FAILED',
  WaitingForPayment = 'WAITING_FOR_PAYMENT'
}

export enum MerchantAppPaymentTypeEnum {
  OneTime = 'ONE_TIME',
  Subscription = 'SUBSCRIPTION'
}

export type MerchantAppSubscription = {
  __typename?: 'MerchantAppSubscription';
  /** The date the app licence was added. */
  addedDate?: Maybe<Scalars['Timestamp']['output']>;
  /** It is the information of which type of app license is obtained. */
  appPaymentKey?: Maybe<Scalars['String']['output']>;
  /** The id of the app that generated the app payment. Actually, the id of the app for which merchant app payment was created. */
  authorizedAppId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currency?: Maybe<SubscriptionPriceCurrencyEnum>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** It is the date of receipt of the last payment for the license subscription. */
  lastPaymentDate?: Maybe<Scalars['Timestamp']['output']>;
  /** The discount rate on the last payment for the app license subscription. */
  lastPaymentDiscountRatio?: Maybe<Scalars['Float']['output']>;
  lastPaymentPeriod: SubscriptionPeriodEnum;
  /** The payment period of the license last payment. The purpose of keeping this information is to adjust the controls according to the last month if the subscription is withdrawn from annual to monthly. */
  lastPaymentPeriodInDays: Scalars['Float']['output'];
  /** It is the last payment information for the app license subscription. */
  lastPaymentPrice: Scalars['Float']['output'];
  /** It is the price information including KDV, for which the last payment is made for the app license subscription. */
  lastPaymentPriceWithTax: Scalars['Float']['output'];
  merchantAppPaymentId?: Maybe<Scalars['String']['output']>;
  /** The name of the created application license is the information. */
  name: Scalars['String']['output'];
  status: MerchantSubscriptionStatusEnum;
  /** The id of the application to be licensed in the store */
  storeAppId: Scalars['String']['output'];
  storeAppListingSubscriptionId: Scalars['String']['output'];
  storeAppListingSubscriptionKey: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type MerchantLicence = {
  __typename?: 'MerchantLicence';
  activeSubscriptionCode: SubscriptionCodeEnum;
  /** If the license is attached to an app, its properties are kept in this domain. */
  appSubscriptions?: Maybe<Array<MerchantAppSubscription>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  developmentStore?: Maybe<Scalars['Boolean']['output']>;
  /** It is the information of the start date of the license. */
  fromDate?: Maybe<Scalars['Timestamp']['output']>;
  id: Scalars['ID']['output'];
  period?: Maybe<SubscriptionPeriodEnum>;
  region: MerchantRegionEnum;
  /** It is the information of the expiry date of the license. */
  toDate?: Maybe<Scalars['Timestamp']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum MerchantRegionEnum {
  Af = 'AF',
  An = 'AN',
  As = 'AS',
  Eu = 'EU',
  Oc = 'OC',
  Pl = 'PL',
  Tr = 'TR',
  Us = 'US'
}

export type MerchantResponse = {
  __typename?: 'MerchantResponse';
  /** Merchant's address information. */
  address?: Maybe<MerchantAddress>;
  /** The merchant staff's email address. */
  email: Scalars['String']['output'];
  /** The merchant's first name. */
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  /** The merchant's last name. */
  lastName: Scalars['String']['output'];
  /** The merchant staff's last name. */
  merchantName?: Maybe<Scalars['String']['output']>;
  merchantSequence?: Maybe<Scalars['Float']['output']>;
  /** The merchant's phone number. */
  phoneNumber?: Maybe<Scalars['String']['output']>;
  /** The merchant's store name. */
  storeName?: Maybe<Scalars['String']['output']>;
};

export type MerchantSettings = {
  __typename?: 'MerchantSettings';
  accessPermission?: Maybe<Scalars['Boolean']['output']>;
  accessPermissionToDate?: Maybe<Scalars['Timestamp']['output']>;
  /** Merchant's address information. */
  address?: Maybe<MerchantAddress>;
  billingAddress?: Maybe<MerchantAddress>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencyFormats?: Maybe<Array<MerchantSettingsCurrencyFormat>>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  defaultLocale?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  logoId?: Maybe<Scalars['String']['output']>;
  merchantName: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  requireMFAForAllStaffs?: Maybe<Scalars['Boolean']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum MerchantSettingsAddressTypeEnum {
  Corporate = 'CORPORATE',
  Individual = 'INDIVIDUAL'
}

export type MerchantSettingsCurrencyFormat = {
  __typename?: 'MerchantSettingsCurrencyFormat';
  currencyCode: Scalars['String']['output'];
  decimalSeparator: Scalars['String']['output'];
  omitZeroDecimal: Scalars['Boolean']['output'];
  symbol: Scalars['String']['output'];
  symbolPosition: CurrencyFormatSymbolPosition;
  thousandSeparator: Scalars['String']['output'];
};

export enum MerchantSubscriptionStatusEnum {
  Active = 'ACTIVE',
  Removed = 'REMOVED',
  WillBeRemoved = 'WILL_BE_REMOVED'
}

export type Mutation = {
  __typename?: 'Mutation';
  addCustomTimelineEntry: Scalars['Boolean']['output'];
  /** Use this mutation to add invoice to order. */
  addOrderInvoice?: Maybe<Order>;
  addOrderTag: Scalars['Boolean']['output'];
  approvePendingOrderTransactions: Scalars['Boolean']['output'];
  /** Response indicating the status of operation. */
  bulkUpdateProducts: Scalars['String']['output'];
  campaignAddCoupons: Array<Coupon>;
  /** Use this mutation to cancel the already created package for an order. */
  cancelFulfillment: Order;
  /** Use this mutation to cancel given order lines. */
  cancelOrderLine: Order;
  /** Using this api, you can add payment features to a merchant app. */
  createMerchantAppPayment: MerchantAppPayment;
  /** Using this api, you can add payment features to a merchant app with app subscription id. */
  createMerchantAppPaymentWithSubscription?: Maybe<MerchantAppPayment>;
  /** Use this mutation if you want to create a new order with transactions. */
  createOrderWithTransactions: Order;
  deleteCampaignList: Scalars['Boolean']['output'];
  /** Using this api, you can delete the categories of products. */
  deleteCategoryList: Scalars['Boolean']['output'];
  deleteCouponList: Scalars['String']['output'];
  deleteGlobalTaxSettingsList: Scalars['Boolean']['output'];
  deleteOrderTagList: Scalars['Boolean']['output'];
  /** Use this mutation to delete product attributes with specific ids. */
  deleteProductAttributeList: Scalars['Boolean']['output'];
  /** Using this api, you can delete the brands of products. */
  deleteProductBrandList: Scalars['Boolean']['output'];
  /** Use this mutation to delete products with specific product ids. */
  deleteProductList: Scalars['Boolean']['output'];
  deleteProductOrderList: Scalars['Boolean']['output'];
  /** Using this api, you can delete the tags of products. */
  deleteProductTagList: Scalars['Boolean']['output'];
  /** Using this api, you can delete the units of products. */
  deleteProductUnitList: Scalars['Boolean']['output'];
  /** Using this api, you can delete the product volume discounts */
  deleteProductVolumeDiscountList: Scalars['Boolean']['output'];
  /** Using this api, you can delete javascript script from a the storefront. */
  deleteStorefrontJSScript: Scalars['Boolean']['output'];
  /** Using this API, you can delete a policy from the storefront. */
  deleteStorefrontPolicyList: Scalars['Boolean']['output'];
  deleteTaxSettingsList: Scalars['Boolean']['output'];
  /** Using this api, you can delete the variant types of products. */
  deleteVariantTypeList: Scalars['Boolean']['output'];
  /** Use this mutation to delete vendors with specific vendor ids. */
  deleteVendorList: Scalars['Boolean']['output'];
  /** Use this mutation to delete webhooks by giving `scope` list. */
  deleteWebhook: Scalars['Boolean']['output'];
  /** Use this mutation to fulfill order line items. */
  fulfillOrder: Order;
  /** Using this api, you can collect demo day. */
  getAppDemoDay?: Maybe<Scalars['Float']['output']>;
  getOrderInvoicePdfUrl?: Maybe<Scalars['String']['output']>;
  /** Use this mutation to refund given order lines. */
  refundOrderLine: Order;
  removeOrderTag: Scalars['Boolean']['output'];
  saveCampaign: Campaign;
  /** Using this api, you can update the categories of products. */
  saveCategory: Category;
  saveGlobalTaxSettings: GlobalTaxSettings;
  saveOrderTag: OrderTag;
  /** Use this mutation to create or update a product with provided input values. */
  saveProduct: Product;
  /** Use this mutation to create or update product attributes with provided input values. */
  saveProductAttribute: ProductAttribute;
  /** Using this api, you can update the brands of products. */
  saveProductBrand: ProductBrand;
  saveProductOrder: ProductOrder;
  /** Use this mutation to define new stock or update stocks by location. */
  saveProductStockLocations: Scalars['Boolean']['output'];
  /** Using this api, you can update the tags of products. */
  saveProductTag: ProductTag;
  /** Using this api, you can update the units of products. */
  saveProductUnit: ProductUnit;
  /** Using this api, you can update the product volume discounts */
  saveProductVolumeDiscount: ProductVolumeDiscount;
  /** Using this api you can update the sales channel name, priceList Id and stockLocations properties. */
  saveSalesChannel?: Maybe<SalesChannel>;
  /** Using this api, you can save javascript script to a the storefront. */
  saveStorefrontJSScript: StorefrontJsScript;
  /** Using this API, you can save a policy to the storefront. */
  saveStorefrontPolicy: StorefrontPolicy;
  saveTaxSettings: TaxSettings;
  /** Response indicating the status of operation. */
  saveVariantPrices: Scalars['Boolean']['output'];
  /** Using this api, you can update the variant types of products. */
  saveVariantType: VariantType;
  /** Use this mutation to define new vendor. */
  saveVendor: Vendor;
  /** Use this mutation to save webhooks by using multiple `scope` variables. After saving a webhook, **ikas** will start to push new webhooks to given url `endpoint`. If **endpoint** is unreachable or returns an error code other than `HTTP 200` **ikas** will try to push webhook for 3 times then stops sending webhook. */
  saveWebhook?: Maybe<Array<Webhook>>;
  updateCustomerB2BStatus: Scalars['Boolean']['output'];
  /** Use this mutation for order address information changes. */
  updateOrderAddresses: Order;
  /** Use this mutation to cancel the fulfillment of the already created package for an order. */
  updateOrderLine: Order;
  /** Use this mutation to update the status of packages linked to an order and the status of the order based on the status of those packages. */
  updateOrderPackageStatus: Order;
  /** Response indicating the status of operation. */
  updateProductSalesChannelStatus: Scalars['Boolean']['output'];
  updateSubscriptionStatus: Scalars['Boolean']['output'];
};


export type MutationAddCustomTimelineEntryArgs = {
  input: TimelineInput;
};


export type MutationAddOrderInvoiceArgs = {
  input: AddOrderInvoiceInput;
};


export type MutationAddOrderTagArgs = {
  input: UpdateOrderTagInput;
};


export type MutationApprovePendingOrderTransactionsArgs = {
  input: ApproveOrderTransactionsInput;
};


export type MutationBulkUpdateProductsArgs = {
  input: Array<BulkUpdateProductsInput>;
};


export type MutationCampaignAddCouponsArgs = {
  input: AddCouponsInput;
};


export type MutationCancelFulfillmentArgs = {
  input: CancelFulfillmentInput;
};


export type MutationCancelOrderLineArgs = {
  input: CancelOrderLineInput;
};


export type MutationCreateMerchantAppPaymentArgs = {
  input: MerchantAppPaymentInput;
};


export type MutationCreateMerchantAppPaymentWithSubscriptionArgs = {
  input: CreateMerchantAppPaymentWithSubscriptionInput;
};


export type MutationCreateOrderWithTransactionsArgs = {
  input: CreateOrderWithTransactionsInput;
};


export type MutationDeleteCampaignListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteCategoryListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteCouponListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteGlobalTaxSettingsListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteOrderTagListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteProductAttributeListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteProductBrandListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteProductListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteProductOrderListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteProductTagListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteProductUnitListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteProductVolumeDiscountListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteStorefrontJsScriptArgs = {
  storefrontIdList: Array<Scalars['String']['input']>;
};


export type MutationDeleteStorefrontPolicyListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteTaxSettingsListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteVariantTypeListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteVendorListArgs = {
  idList: Array<Scalars['String']['input']>;
};


export type MutationDeleteWebhookArgs = {
  scopes: Array<Scalars['String']['input']>;
};


export type MutationFulfillOrderArgs = {
  input: FulFillOrderInput;
};


export type MutationGetAppDemoDayArgs = {
  input: CreateMerchantAppPaymentWithSubscriptionInput;
};


export type MutationGetOrderInvoicePdfUrlArgs = {
  input: GetOrderInvoicePdfUrlInput;
};


export type MutationRefundOrderLineArgs = {
  input: OrderRefundInput;
};


export type MutationRemoveOrderTagArgs = {
  input: UpdateOrderTagInput;
};


export type MutationSaveCampaignArgs = {
  input: CampaignInput;
};


export type MutationSaveCategoryArgs = {
  input: CategoryInput;
};


export type MutationSaveGlobalTaxSettingsArgs = {
  input: GlobalTaxSettingsInput;
};


export type MutationSaveOrderTagArgs = {
  input: OrderTagInput;
};


export type MutationSaveProductArgs = {
  input: ProductInput;
};


export type MutationSaveProductAttributeArgs = {
  input: ProductAttributeInput;
};


export type MutationSaveProductBrandArgs = {
  input: ProductBrandInput;
};


export type MutationSaveProductOrderArgs = {
  input: ProductOrderInput;
};


export type MutationSaveProductStockLocationsArgs = {
  input: SaveStockLocationsInput;
};


export type MutationSaveProductTagArgs = {
  input: ProductTagInput;
};


export type MutationSaveProductUnitArgs = {
  input: ProductUnitInput;
};


export type MutationSaveProductVolumeDiscountArgs = {
  input: ProductVolumeDiscountInput;
};


export type MutationSaveSalesChannelArgs = {
  input: SalesChannelInput;
};


export type MutationSaveStorefrontJsScriptArgs = {
  input: StorefrontJsScriptInput;
};


export type MutationSaveStorefrontPolicyArgs = {
  input: StorefrontPolicyInput;
};


export type MutationSaveTaxSettingsArgs = {
  input: TaxSettingsInput;
};


export type MutationSaveVariantPricesArgs = {
  input: SaveVariantPricesInput;
};


export type MutationSaveVariantTypeArgs = {
  input: VariantTypeInput;
};


export type MutationSaveVendorArgs = {
  input: VendorInput;
};


export type MutationSaveWebhookArgs = {
  input: WebhookInput;
};


export type MutationUpdateCustomerB2BStatusArgs = {
  b2bStatus: CustomerB2BStatusEnum;
  customerId: Scalars['String']['input'];
};


export type MutationUpdateOrderAddressesArgs = {
  input: UpdateOrderAddressesInput;
};


export type MutationUpdateOrderLineArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdateOrderPackageStatusArgs = {
  input: UpdateOrderPackageStatusInput;
};


export type MutationUpdateProductSalesChannelStatusArgs = {
  input: Array<UpdateProductSalesChannelStatusInput>;
  salesChannelId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateSubscriptionStatusArgs = {
  customerId: Scalars['String']['input'];
  subscriptionStatus: CustomerEmailSubscriptionStatusesEnum;
};

export type NewCouponInput = {
  applicableCustomerId?: InputMaybe<Scalars['String']['input']>;
  canCombineWithOtherCampaigns: Scalars['Boolean']['input'];
  code: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  usageLimitPerCustomer?: InputMaybe<Scalars['Int']['input']>;
};

export type Order = {
  __typename?: 'Order';
  abandonedCartFlows?: Maybe<Array<AbandonedCartFlow>>;
  archived: Scalars['Boolean']['output'];
  attributes?: Maybe<Array<OrderAttributeValue>>;
  availableShippingMethods?: Maybe<Array<AvailableShippingMethod>>;
  /** It is the billing address of the order. */
  billingAddress?: Maybe<OrderAddress>;
  /** It is the `branch` information of the orders created via ikasPOS. */
  branch?: Maybe<OrderBranch>;
  /** It is the `branchSession` information of the orders created via ikasPOS. */
  branchSession?: Maybe<OrderBranchSession>;
  branchSessionId?: Maybe<Scalars['String']['output']>;
  campaignOffers?: Maybe<Array<CartV2CampaignOffer>>;
  /** It is the cancel reason of the order. If the order has been cancelled, it indicates the cancellation reason of the order. */
  cancelReason?: Maybe<OrderCancelledReasonEnum>;
  /** If the order has been cancelled, it indicates the cancellation date of the order. */
  cancelledAt?: Maybe<Scalars['Timestamp']['output']>;
  cartId?: Maybe<Scalars['String']['output']>;
  /** Shows the status of the cart linked to the order. */
  cartStatus?: Maybe<CartV2StatusEnum>;
  checkoutId?: Maybe<Scalars['String']['output']>;
  /** The client ip address. */
  clientIp?: Maybe<Scalars['String']['output']>;
  couponCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Indicates who created the order. The order can be created by the customer or the store owner. */
  createdBy?: Maybe<CartCreatedByEnum>;
  /** It is the currency value of the order. */
  currencyCode: Scalars['String']['output'];
  /** A list of currency rate objects. */
  currencyRates: Array<OrderCurrencyRate>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  /** Information about the customer. The order does not have to be a customer information. If the order was created by ikasPOS, the customer information may be null. */
  customer?: Maybe<OrderCustomer>;
  customerGroups?: Maybe<Array<OrderCustomerGroup>>;
  customerId?: Maybe<Scalars['String']['output']>;
  /** It shows the number of orders given by the relevant customer. */
  customerOrderCount?: Maybe<Scalars['Float']['output']>;
  customerSegments?: Maybe<Array<OrderCustomerSegment>>;
  deleted: Scalars['Boolean']['output'];
  dueDate?: Maybe<Scalars['Timestamp']['output']>;
  edited?: Maybe<Scalars['Boolean']['output']>;
  giftCardLines?: Maybe<Array<OrderGiftCardLine>>;
  /** A list of gift package line objects, each containing information about a gift package pricing in the order. */
  giftPackageLines?: Maybe<Array<OrderGiftPackageLine>>;
  /** An optional gift package note, can attach to the order. */
  giftPackageNote?: Maybe<Scalars['String']['output']>;
  /** It is the host where the order was created. */
  host?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** A list of invoice objects, each containing information about an invoice. */
  invoices?: Maybe<Array<Invoice>>;
  /** Indicates whether there is a gift package in the order. **isGiftPackage** returns  `true` if the order has gift package */
  isGiftPackage?: Maybe<Scalars['Boolean']['output']>;
  itemCount?: Maybe<Scalars['Float']['output']>;
  lastActivityDate?: Maybe<Scalars['Timestamp']['output']>;
  marketingCampaignId?: Maybe<Scalars['String']['output']>;
  merchantId: Scalars['String']['output'];
  /** It is the reflection of the prices of the refunds and the items added later on the final order price. */
  netTotalFinalPrice?: Maybe<Scalars['Float']['output']>;
  /** An optional note, can attach to the order. */
  note?: Maybe<Scalars['String']['output']>;
  /** A list of adjustment objects, each containing information about a adjustment in the order. */
  orderAdjustments?: Maybe<Array<OrderAdjustment>>;
  /** A list of line item objects, each containing information about an item in the order. */
  orderLineItems: Array<OrderLineItem>;
  /** The position of the order in the store's order count starting from 1001. Order numbers are sequential and start from 1001. */
  orderNumber?: Maybe<Scalars['String']['output']>;
  /** is the sequence value of the packages in the order. */
  orderPackageSequence?: Maybe<Scalars['Float']['output']>;
  /** It is the package status enum of the order */
  orderPackageStatus?: Maybe<OrderPackageStatusEnum>;
  /** A list of order package objects. */
  orderPackages?: Maybe<Array<OrderPackage>>;
  /** It is the payment status enum of the order */
  orderPaymentStatus?: Maybe<OrderPaymentStatusEnum>;
  /** It is the sequence value of the order_number. The sequence value starts from 1 and an order with order number 1001 has a sequence value of 1. */
  orderSequence?: Maybe<Scalars['Float']['output']>;
  /** It is the tag id list in the order. */
  orderTagIds?: Maybe<Array<Scalars['String']['output']>>;
  /** The date the order was ordered. */
  orderedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** A list of payment method objects, each containing information about a payment method in the order. */
  paymentMethods?: Maybe<Array<OrderPaymentMethod>>;
  /** Information about the `priceList` used when the order was created. */
  priceList?: Maybe<OrderPriceList>;
  priceListId?: Maybe<Scalars['String']['output']>;
  recoverEmailStatus?: Maybe<CheckoutRecoveryEmailStatusEnum>;
  recoveryStatus?: Maybe<CheckoutRecoveryStatusEnum>;
  /** Information about the  `salesChannel` where the order was created. */
  salesChannel: OrderSalesChannel;
  salesChannelId?: Maybe<Scalars['String']['output']>;
  sessionInfo?: Maybe<OrderSessionInfo>;
  /** It is the shipping address of the order. */
  shippingAddress?: Maybe<OrderAddress>;
  /** A list of shipping line objects, each containing information about a shipping in the order. */
  shippingLines?: Maybe<Array<OrderShippingLine>>;
  /** It is the shipping method enum of the order */
  shippingMethod: OrderShippingMethodEnum;
  shippingSettingsId?: Maybe<Scalars['String']['output']>;
  shippingZoneRateId?: Maybe<Scalars['String']['output']>;
  sourceId?: Maybe<Scalars['String']['output']>;
  /** It is the `staff` information of the orders created via ikasPOS. */
  staff?: Maybe<OrderStaff>;
  /** It is the status enum of the order */
  status: OrderStatusEnum;
  /** It is the `stock location` information of the orders. */
  stockLocation?: Maybe<OrderStockLocation>;
  stockLocationId?: Maybe<Scalars['String']['output']>;
  /** Information about the `storefront` where the order was created. */
  storefront?: Maybe<OrderStorefront>;
  storefrontId?: Maybe<Scalars['String']['output']>;
  /** Information about the `storefrontRouting` used by the storefront at the time the order was created. */
  storefrontRouting?: Maybe<OrderStorefrontRouting>;
  storefrontRoutingId?: Maybe<Scalars['String']['output']>;
  /** Information about the `storefrontTheme` used by the storefront at the time the order was created. */
  storefrontTheme?: Maybe<OrderStorefrontTheme>;
  storefrontThemeId?: Maybe<Scalars['String']['output']>;
  /** A list of tax line objects, tax line objects contain the taxes of the shippingLines, orderLineItems, and giftPackageLines. */
  taxLines?: Maybe<Array<OrderTaxLine>>;
  /** It is the `terminalId`` information of the orders created via ikasPOS. */
  terminalId?: Maybe<Scalars['String']['output']>;
  /** The total final price of the order resulting from the apply of `orderAdjustments` , `shippingLines`, and  `giftPackageLines` pricing to the order total price. */
  totalFinalPrice: Scalars['Float']['output'];
  /** It is the sum of the net prices of the line items in the order. */
  totalPrice: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Details of the browsing client, including software and operating versions. */
  userAgent?: Maybe<Scalars['String']['output']>;
  workflowId?: Maybe<Scalars['String']['output']>;
  workflowName?: Maybe<Scalars['String']['output']>;
  workflowNodeId?: Maybe<Scalars['String']['output']>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  /** The street address of the address. */
  addressLine1: Scalars['String']['output'];
  /** An optional additional field for the street address of the address. */
  addressLine2?: Maybe<Scalars['String']['output']>;
  /** The city information of the address. */
  city: OrderAddressCity;
  /** The company of the person associated with the address. */
  company?: Maybe<Scalars['String']['output']>;
  /** The country information of the address. */
  country: OrderAddressCountry;
  /** The district information of the address. */
  district?: Maybe<OrderAddressDistrict>;
  /** The first name of the person associated with the address */
  firstName: Scalars['String']['output'];
  /** The address"s id of the order address. */
  id?: Maybe<Scalars['String']['output']>;
  /** The identity number of the person associated with the address. */
  identityNumber?: Maybe<Scalars['String']['output']>;
  /** The address"s id of the order address. */
  isDefault: Scalars['Boolean']['output'];
  /** The last name of the person associated with the address */
  lastName: Scalars['String']['output'];
  /** The phone of the person associated with the address. */
  phone?: Maybe<Scalars['String']['output']>;
  /** The postal code of the address. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** The region information of the address. */
  region?: Maybe<OrderAddressRegion>;
  /** The state information of the address. */
  state?: Maybe<OrderAddressState>;
  /** The tax number of the person associated with the address. */
  taxNumber?: Maybe<Scalars['String']['output']>;
  /** The tax office of the person associated with the address. */
  taxOffice?: Maybe<Scalars['String']['output']>;
};

export type OrderAddressCity = {
  __typename?: 'OrderAddressCity';
  /** It is the code of the city of the address. */
  code?: Maybe<Scalars['String']['output']>;
  /** It is the id of the city of the address. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the name of the city of the address. */
  name: Scalars['String']['output'];
};

export type OrderAddressCityInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type OrderAddressCountry = {
  __typename?: 'OrderAddressCountry';
  /** It is the code of the country of the address. */
  code?: Maybe<Scalars['String']['output']>;
  /** It is the id of the country of the address. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the two-letter code of the country of the address. */
  iso2?: Maybe<Scalars['String']['output']>;
  /** It is the three-letter code of the country of the address. */
  iso3?: Maybe<Scalars['String']['output']>;
  /** It is the name of the country of the address. */
  name: Scalars['String']['output'];
};

export type OrderAddressCountryInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  iso2?: InputMaybe<Scalars['String']['input']>;
  iso3?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type OrderAddressDistrict = {
  __typename?: 'OrderAddressDistrict';
  /** It is the code of the district of the address. */
  code?: Maybe<Scalars['String']['output']>;
  /** It is the id of the district of the address. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the name of the district of the address. */
  name?: Maybe<Scalars['String']['output']>;
};

export type OrderAddressDistrictInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrderAddressInput = {
  /** The street address of the address. */
  addressLine1: Scalars['String']['input'];
  /** An optional additional field for the street address of the address. */
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  /** The name of the city of the address. */
  city: OrderAddressCityInput;
  /** The company of the person associated with the address. */
  company?: InputMaybe<Scalars['String']['input']>;
  /** The name of the country of the address. */
  country: OrderAddressCountryInput;
  /** The name of the district of the address. */
  district?: InputMaybe<OrderAddressDistrictInput>;
  /** The first name of the person associated with the address */
  firstName: Scalars['String']['input'];
  /** If the address to be updated is registered in ikas, this field must be filled. If the Id field is sent blank, a new address is generated. */
  id?: InputMaybe<Scalars['String']['input']>;
  /** The identity number of the person associated with the address. */
  identityNumber?: InputMaybe<Scalars['String']['input']>;
  /** If the address is to be saved as default, this field can be sent as `true`. */
  isDefault: Scalars['Boolean']['input'];
  /** The last name of the person associated with the address */
  lastName: Scalars['String']['input'];
  /** The phone of the person associated with the address. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** The postal code of the address. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** The name of the region of the address. */
  region?: InputMaybe<OrderAddressRegionInput>;
  /** The name of the state of the address. */
  state?: InputMaybe<OrderAddressStateInput>;
  /** The tax number of the person associated with the address. */
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  /** The tax office of the person associated with the address. */
  taxOffice?: InputMaybe<Scalars['String']['input']>;
};

export type OrderAddressRegion = {
  __typename?: 'OrderAddressRegion';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** It is the id of the region of the address. */
  id: Scalars['String']['output'];
  /** It is the name of the region of the address. */
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type OrderAddressRegionInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type OrderAddressState = {
  __typename?: 'OrderAddressState';
  /** It is the code of the state of the address. */
  code?: Maybe<Scalars['String']['output']>;
  /** It is the id of the state of the address. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the name of the state of the address. */
  name?: Maybe<Scalars['String']['output']>;
};

export type OrderAddressStateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrderAdjustment = {
  __typename?: 'OrderAdjustment';
  /** It is the adjustment amount in the order. This amount can be positive or negative. */
  amount: Scalars['Float']['output'];
  amountType: OrderAmountTypeEnum;
  /** A list of order line items, each containing information about a order line item in the order. */
  appliedOrderLines?: Maybe<Array<OrderAdjustmentAppliedOrderLine>>;
  /** If the adjustment is associated to the campaign, it will show the campaign id. */
  campaignId?: Maybe<Scalars['String']['output']>;
  /** If the adjustment is associated to the campaign, it will show the campaign id. */
  campaignType?: Maybe<CampaignTypeEnum>;
  /** It is the coupon id generated depending on the campaign. */
  couponId?: Maybe<Scalars['String']['output']>;
  /** It is the name of the adjustment. */
  name: Scalars['String']['output'];
  /** It is the order of the adjustment. Adjustments are applied in this order. */
  order: Scalars['Float']['output'];
  /** The amount is the id of the transaction. */
  transactionId?: Maybe<Scalars['String']['output']>;
  type: OrderAdjustmentEnum;
};

export type OrderAdjustmentAppliedOrderLine = {
  __typename?: 'OrderAdjustmentAppliedOrderLine';
  /** Is he amount of the applied adjustment. */
  amount: Scalars['Float']['output'];
  /** It is the quantity of variants within the order line item to which the adjustment is applied. */
  appliedQuantity: Scalars['Float']['output'];
  /** It is the quantity of variants within the order line item to which the adjustment is applied. */
  isAutoCreated?: Maybe<Scalars['Boolean']['output']>;
  /** It is the id of the order line item to which the adjustment is applied. */
  orderLineId: Scalars['String']['output'];
};

export enum OrderAdjustmentEnum {
  Decrement = 'DECREMENT',
  Increment = 'INCREMENT'
}

export type OrderAdjustmentInput = {
  /** It is the amount of the order adjustment. */
  amount: Scalars['Float']['input'];
  /** It is the amount type of the order adjustment */
  amountType: OrderAmountTypeEnum;
  /** It is the campaign information that adjustment depends on. */
  campaignId?: InputMaybe<Scalars['String']['input']>;
  /** It is the coupon information of the campaign that adjustment is connected to. */
  couponId?: InputMaybe<Scalars['String']['input']>;
  /** It is the name of the order adjustment. */
  name: Scalars['String']['input'];
  /** It is the order information in which the adjustment will be applied. */
  order: Scalars['Float']['input'];
  /** It is the type enum of the order adjustment */
  type: OrderAdjustmentEnum;
};

export enum OrderAmountTypeEnum {
  Amount = 'AMOUNT',
  Ratio = 'RATIO'
}

export type OrderAttributeValue = {
  __typename?: 'OrderAttributeValue';
  /** It is the attribute id */
  orderAttributeId?: Maybe<Scalars['String']['output']>;
  /** It is the attribute option id */
  orderAttributeOptionId?: Maybe<Scalars['String']['output']>;
  /** It is the attribute value */
  value?: Maybe<Scalars['String']['output']>;
};

export type OrderBranch = {
  __typename?: 'OrderBranch';
  /** It is the id of the branch where the order was created. */
  id: Scalars['String']['output'];
  /** It is the name of the branch where the order was created. */
  name?: Maybe<Scalars['String']['output']>;
};

export type OrderBranchSession = {
  __typename?: 'OrderBranchSession';
  /** It is the id of the branch session where the order was created. */
  id: Scalars['String']['output'];
  /** It is the name of the branch session where the order was created. */
  name?: Maybe<Scalars['String']['output']>;
};

export enum OrderCancelledReasonEnum {
  Customer = 'CUSTOMER',
  Declined = 'DECLINED',
  Inventory = 'INVENTORY',
  Other = 'OTHER'
}

export type OrderCurrencyRate = {
  __typename?: 'OrderCurrencyRate';
  /** It is the code of the currency.  */
  code: Scalars['String']['output'];
  /** It is the original rate of the currency. */
  originalRate: Scalars['Float']['output'];
  /** It is the rate of the currency. */
  rate: Scalars['Float']['output'];
};

export type OrderCustomer = {
  __typename?: 'OrderCustomer';
  /** It is the email of the customer who created the order. */
  email?: Maybe<Scalars['String']['output']>;
  /** It is the first name of the customer who created the order. */
  firstName?: Maybe<Scalars['String']['output']>;
  /** It is the full name name of the customer who created the order. */
  fullName?: Maybe<Scalars['String']['output']>;
  /** It is the id of the customer who created the order. */
  id?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the order was created by a new customer with no email record. **isGuestCheckout** returns true if the order was created without customer email information. */
  isGuestCheckout?: Maybe<Scalars['Boolean']['output']>;
  /** It is the last name of the customer who created the order. */
  lastName?: Maybe<Scalars['String']['output']>;
  notificationsAccepted?: Maybe<Scalars['Boolean']['output']>;
  /** It is the phone number of the customer who created the order. */
  phone?: Maybe<Scalars['String']['output']>;
  /** It is the preferred language of the customer who created the order. */
  preferredLanguage?: Maybe<Scalars['String']['output']>;
};

export type OrderCustomerGroup = {
  __typename?: 'OrderCustomerGroup';
  /** It is the customer's group id */
  id: Scalars['String']['output'];
  /** It is the customer's group name */
  name: Scalars['String']['output'];
};

export type OrderCustomerInput = {
  /** It is the email of the customer who created the order. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** It is the first name of the customer who created the order. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** It is the last name of the customer who created the order. */
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type OrderCustomerSegment = {
  __typename?: 'OrderCustomerSegment';
  /** It is the customer's segment id */
  id: Scalars['String']['output'];
  /** It is the customer's segment name */
  name: Scalars['String']['output'];
};

export type OrderGiftCardLine = {
  __typename?: 'OrderGiftCardLine';
  amount: Scalars['Float']['output'];
  code: Scalars['String']['output'];
  giftCardId: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type OrderGiftPackageLine = {
  __typename?: 'OrderGiftPackageLine';
  /** Indicates whether the gift cost is refunded if the order is refunded. **isRefunded** returns `true` if the amount is refunded.  */
  isRefunded?: Maybe<Scalars['Boolean']['output']>;
  /** It is the price of the order gift package line. */
  price: Scalars['Float']['output'];
  priceListId?: Maybe<Scalars['String']['output']>;
  /** It is the tax value of the order gift package line price. */
  taxValue?: Maybe<Scalars['Float']['output']>;
};

export type OrderLineBaseUnit = {
  __typename?: 'OrderLineBaseUnit';
  /** It is the amount of the unit. */
  baseAmount: Scalars['Float']['output'];
  /** It is the type of the unit of the variant. */
  type: ProductUnitTypeEnum;
  /** It is the amount of the unit. */
  unit?: Maybe<OrderLineVariantUnitType>;
};

export type OrderLineBundleVariant = {
  __typename?: 'OrderLineBundleVariant';
  /** It is the barcode list of the variant. */
  barcodeList?: Maybe<Array<Scalars['String']['output']>>;
  /** Information about the brand of variant. */
  baseUnit?: Maybe<OrderLineBaseUnit>;
  /** Information about the brand of variant. */
  brand?: Maybe<OrderLineVariantBrand>;
  /** A list of category objects, each containing information about a category in the variant. */
  categories?: Maybe<Array<OrderLineVariantCategory>>;
  /** It is the id of the product file. */
  fileId?: Maybe<Scalars['String']['output']>;
  /** It is the hasCode of the variant. */
  hsCode?: Maybe<Scalars['String']['output']>;
  /** It is the id of the variant. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the main image id of the variant. */
  mainImageId?: Maybe<Scalars['String']['output']>;
  /** It is the name of the variant. */
  name: Scalars['String']['output'];
  /** It is the price list of the variant. Different price lists may have different pricing. */
  prices?: Maybe<Array<OrderLineVariantPrice>>;
  /** It is the product id of the variant. */
  productId?: Maybe<Scalars['String']['output']>;
  /** It is the product volume discount id of the product. */
  productVolumeDiscountId?: Maybe<Scalars['String']['output']>;
  /** It is the sku of the variant. */
  sku?: Maybe<Scalars['String']['output']>;
  /** It is the slug of the variant. The slug value is unique each variant and product. */
  slug?: Maybe<Scalars['String']['output']>;
  /** It is the the tag id list  */
  tagIds?: Maybe<Array<Scalars['String']['output']>>;
  /** A list of tag objects, each containing information about a tag in the variant. */
  tags?: Maybe<Array<OrderLineVariantTag>>;
  /**
   * It is the tax value of the variant.
   * @deprecated Will be removed use OrderLineItem.taxValue
   */
  taxValue?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  /** Information about the brand of variant. */
  unit?: Maybe<OrderLineVariantUnit>;
  /** It is the variant values of the variant. */
  variantValues?: Maybe<Array<OrderLineVariantVariantValues>>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type OrderLineDiscount = {
  __typename?: 'OrderLineDiscount';
  amount: Scalars['Float']['output'];
  amountType: OrderAmountTypeEnum;
  campaignOfferId?: Maybe<Scalars['String']['output']>;
  campaignOfferProductId?: Maybe<Scalars['String']['output']>;
  maxApplicableQuantity?: Maybe<Scalars['Float']['output']>;
  productVolumeDiscountId?: Maybe<Scalars['String']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
};

export type OrderLineDiscountInput = {
  /** It is the amount of the discount. */
  amount: Scalars['Float']['input'];
  /** It is the amount type enum. */
  amountType: OrderAmountTypeEnum;
  maxApplicableQuantity?: InputMaybe<Scalars['Float']['input']>;
  /** It is the reason of the discount. */
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type OrderLineItem = {
  __typename?: 'OrderLineItem';
  /** It is the option information of the variant value in the order line item. */
  bundleProductSettings?: Maybe<BundleProductOrderLine>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  /** It is the currency code of the order line item. */
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** Information about the discount. Shows the details of the discount applied to the order line item. */
  discount?: Maybe<OrderLineDiscount>;
  /** It is the discount price of the order line item. */
  discountPrice?: Maybe<Scalars['Float']['output']>;
  /** After creating the order, it indicates whether the relevant line has been added/removed by the store staff. */
  edited?: Maybe<Scalars['Boolean']['output']>;
  /** It is the final price of the order line item. If the discount price is less than the sell price, the final price is equal to the discount price. */
  finalPrice?: Maybe<Scalars['Float']['output']>;
  /** It is the unit price of the order line item. */
  finalUnitPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  /** It is the option information of the variant value in the order line item. */
  options?: Maybe<Array<OrderLineOption>>;
  /** It is the original order line item id of the line item. If the line item is derived from another line item, this field is filled. */
  originalOrderLineItemId?: Maybe<Scalars['String']['output']>;
  /** It is the selling price of the order line item. */
  price: Scalars['Float']['output'];
  /** It is the quantity of variant in the order line item. */
  quantity: Scalars['Float']['output'];
  sourceId?: Maybe<Scalars['String']['output']>;
  /** It is the status enum of the order line item */
  status: OrderLineItemStatusEnum;
  /** It is the date when the last status of the order line item was updated. */
  statusUpdatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** It is the stock location id of the variant value in the order line item. */
  stockLocationId?: Maybe<Scalars['String']['output']>;
  /** It is the tax value of the order line item. */
  taxValue?: Maybe<Scalars['Float']['output']>;
  /** It is the unit price of the order line item. */
  unitPrice?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Information about the variant of the order line item. */
  variant: OrderLineVariant;
};

export type OrderLineItemInput = {
  /** It is the bundle product settings in the order line item. */
  bundleProductSettings?: InputMaybe<BundleProductOrderLineInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** It is the discount information that will be applied to the line item. */
  discount?: InputMaybe<OrderLineDiscountInput>;
  /** It is the discount price of the line item. */
  discountPrice?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** It is the options information in the order line item. */
  options?: InputMaybe<Array<OrderLineOptionInput>>;
  /** It is the price of the line item. */
  price: Scalars['Float']['input'];
  /** It is the quantity of the line item. */
  quantity: Scalars['Float']['input'];
  /** It is the source id of the line item. If the order came from the marketplace, it shows the line id in the marketplace. */
  sourceId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  /** It is the variant information in the order line item. */
  variant: OrderLineVariantInput;
};

export enum OrderLineItemStatusEnum {
  Cancelled = 'CANCELLED',
  CancelRejected = 'CANCEL_REJECTED',
  CancelRequested = 'CANCEL_REQUESTED',
  Delivered = 'DELIVERED',
  Fulfilled = 'FULFILLED',
  Refunded = 'REFUNDED',
  RefundRejected = 'REFUND_REJECTED',
  RefundRequested = 'REFUND_REQUESTED',
  RefundRequestAccepted = 'REFUND_REQUEST_ACCEPTED',
  Unfulfilled = 'UNFULFILLED'
}

export type OrderLineOption = {
  __typename?: 'OrderLineOption';
  /** It is the name of order line option in the order line item. */
  name: Scalars['String']['output'];
  /** It is the product option id of the product in the order line item. */
  productOptionId: Scalars['String']['output'];
  /** It is the product option set id of the product in the order line item. */
  productOptionsSetId: Scalars['String']['output'];
  /** It is the type of the order line option. */
  type: ProductOptionTypeEnum;
  values: Array<OrderLineOptionValue>;
};

export type OrderLineOptionInput = {
  /** It is the option id. */
  productOptionId: Scalars['String']['input'];
  /**
   * It is the options set id information that option is connected to.
   * * Is the entered id must be exist in ikas.
   */
  productOptionsSetId: Scalars['String']['input'];
  /** A list of option value objects, each containing input about an option value. */
  values: Array<OrderLineOptionValueInput>;
};

export type OrderLineOptionValue = {
  __typename?: 'OrderLineOptionValue';
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  priceType?: Maybe<ProductOptionPriceTypeEnum>;
  value: Scalars['String']['output'];
};

export type OrderLineOptionValueInput = {
  /** It is the price of the order line option */
  price?: InputMaybe<Scalars['Float']['input']>;
  /** It is the value of the order line option */
  value: Scalars['String']['input'];
};

export type OrderLineVariant = {
  __typename?: 'OrderLineVariant';
  /** It is the barcode list of the variant. */
  barcodeList?: Maybe<Array<Scalars['String']['output']>>;
  /** Information about the brand of variant. */
  baseUnit?: Maybe<OrderLineBaseUnit>;
  /** Information about the brand of variant. */
  brand?: Maybe<OrderLineVariantBrand>;
  /** Shows the list of bundle products in the line item. */
  bundleProducts?: Maybe<Array<OrderLineVariantBundleProductModel>>;
  /** A list of category objects, each containing information about a category in the variant. */
  categories?: Maybe<Array<OrderLineVariantCategory>>;
  /** It is the id of the product file. */
  fileId?: Maybe<Scalars['String']['output']>;
  /** It is the hasCode of the variant. */
  hsCode?: Maybe<Scalars['String']['output']>;
  /** It is the id of the variant. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the main image id of the variant. */
  mainImageId?: Maybe<Scalars['String']['output']>;
  /** It is the name of the variant. */
  name: Scalars['String']['output'];
  /** It is the price list of the variant. Different price lists may have different pricing. */
  prices?: Maybe<Array<OrderLineVariantPrice>>;
  /** It is the product id of the variant. */
  productId?: Maybe<Scalars['String']['output']>;
  /** It is the product volume discount id of the product. */
  productVolumeDiscountId?: Maybe<Scalars['String']['output']>;
  /** It is the sku of the variant. */
  sku?: Maybe<Scalars['String']['output']>;
  /** It is the slug of the variant. The slug value is unique each variant and product. */
  slug?: Maybe<Scalars['String']['output']>;
  /** It is the the tag id list  */
  tagIds?: Maybe<Array<Scalars['String']['output']>>;
  /** A list of tag objects, each containing information about a tag in the variant. */
  tags?: Maybe<Array<OrderLineVariantTag>>;
  /**
   * It is the tax value of the variant.
   * @deprecated Will be removed use OrderLineItem.taxValue
   */
  taxValue?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['Float']['output']>;
  /** Information about the brand of variant. */
  unit?: Maybe<OrderLineVariantUnit>;
  /** It is the variant values of the variant. */
  variantValues?: Maybe<Array<OrderLineVariantVariantValues>>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type OrderLineVariantBrand = {
  __typename?: 'OrderLineVariantBrand';
  /** It is the id of the brand of the variant. */
  id: Scalars['String']['output'];
  /** It is the name of the category. */
  name: Scalars['String']['output'];
};

export type OrderLineVariantBundleProductModel = {
  __typename?: 'OrderLineVariantBundleProductModel';
  /** It indicates whether the variant price within the package product will be reflected in the order line or not. */
  addToBundleBasePrice?: Maybe<Scalars['Boolean']['output']>;
  /** It is the value that indicates whether the product has been deleted or not. */
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** It is the final price of the variant. */
  discountPrice?: Maybe<Scalars['Float']['output']>;
  /** It is the discount ratio of the variant. */
  discountRatio?: Maybe<Scalars['Float']['output']>;
  /** It is the final price of the variant. */
  finalPrice?: Maybe<Scalars['Float']['output']>;
  /** It is the unit price of the variant */
  finalUnitPrice?: Maybe<Scalars['Float']['output']>;
  id: Scalars['String']['output'];
  /** It is the option information of the variant value in the order line item. */
  options?: Maybe<Array<OrderLineOption>>;
  /** Indicates the order of the product in the bundle. */
  order: Scalars['Float']['output'];
  /** It is the price of the variant. */
  price: Scalars['Float']['output'];
  /** It is the quantity of the variant. */
  quantity: Scalars['Float']['output'];
  /** It is the tax value of the variant. */
  taxValue?: Maybe<Scalars['Float']['output']>;
  /** It is the unit price of the variant */
  unitPrice?: Maybe<Scalars['Float']['output']>;
  /** Information about the variant of the order line item. */
  variant: OrderLineBundleVariant;
};

export type OrderLineVariantCategory = {
  __typename?: 'OrderLineVariantCategory';
  /** It is the path of the category. */
  categoryPath?: Maybe<Array<OrderLineVariantCategoryPath>>;
  /** It is the id of the category of the variant. */
  id: Scalars['String']['output'];
  /** It is the name of the category. */
  name: Scalars['String']['output'];
};

export type OrderLineVariantCategoryPath = {
  __typename?: 'OrderLineVariantCategoryPath';
  /** It is the id of the category of the variant. */
  id: Scalars['String']['output'];
  /** It is the name of the category. */
  name: Scalars['String']['output'];
};

export type OrderLineVariantInput = {
  /**
   * It is the id of the variant. This field can be left blank if a product that is not registered in ikas will be sold.
   * * Is the entered id must be exist in ikas.
   */
  id?: InputMaybe<Scalars['String']['input']>;
  /** It is the name of the variant. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrderLineVariantPrice = {
  __typename?: 'OrderLineVariantPrice';
  /** It is the buy price of variant. */
  buyPrice?: Maybe<Scalars['Float']['output']>;
  /** It is the currency code of variant. */
  currency?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  /** It is the discount price of variant. */
  discountPrice?: Maybe<Scalars['Float']['output']>;
  /** It is the id of the price list to which the variant is associated. */
  priceListId?: Maybe<Scalars['String']['output']>;
  /** It is the sell price of variant. */
  sellPrice: Scalars['Float']['output'];
  /** It is the unit price of variant. */
  unitPrice?: Maybe<Scalars['Float']['output']>;
};

export type OrderLineVariantTag = {
  __typename?: 'OrderLineVariantTag';
  /** It is the id of the tag of the variant. */
  id: Scalars['String']['output'];
  /** It is the name of the tag. */
  name: Scalars['String']['output'];
};

export type OrderLineVariantUnit = {
  __typename?: 'OrderLineVariantUnit';
  /** It is the amount of the unit. */
  amount: Scalars['Float']['output'];
  /** It is the type of the unit of the variant. */
  type: ProductUnitTypeEnum;
};

export type OrderLineVariantUnitType = {
  __typename?: 'OrderLineVariantUnitType';
  /** It is the id of the category of the variant. */
  id: Scalars['String']['output'];
  /** It is the amount of the unit. */
  name: Scalars['String']['output'];
};

export type OrderLineVariantVariantValues = {
  __typename?: 'OrderLineVariantVariantValues';
  /** It is the order of variant value. The variant value order starts from 0. */
  order: Scalars['Float']['output'];
  /** It is the order of variant value. The variant value order starts from 0. */
  variantTypeId: Scalars['String']['output'];
  /** It is the order of variant value. The variant value order starts from 0. */
  variantTypeName?: Maybe<Scalars['String']['output']>;
  /** It is the order of variant value. The variant value order starts from 0. */
  variantValueId: Scalars['String']['output'];
  /** It is the order of variant value. The variant value order starts from 0. */
  variantValueName?: Maybe<Scalars['String']['output']>;
};

export type OrderPackage = {
  __typename?: 'OrderPackage';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** If the package was sent via the cargo application and received an error, this field is filled with an error message. */
  errorMessage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** An optional note, can attach to the order package. */
  note?: Maybe<Scalars['String']['output']>;
  /** It is the id list of the order line items in the package. */
  orderLineItemIds: Array<Scalars['String']['output']>;
  /** It is the fulfill status of the package */
  orderPackageFulfillStatus: OrderPackageFulfillStatusEnum;
  /** It is the number of order package. Order package number is created with the order number - order package sequence format. */
  orderPackageNumber: Scalars['String']['output'];
  sourceId?: Maybe<Scalars['String']['output']>;
  stockLocationId: Scalars['String']['output'];
  /** It is the stock location id information where the package will be shipped. */
  trackingInfo?: Maybe<TrackingInfo>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum OrderPackageFulfillStatusEnum {
  Cancelled = 'CANCELLED',
  CancelRejected = 'CANCEL_REJECTED',
  CancelRequested = 'CANCEL_REQUESTED',
  Delivered = 'DELIVERED',
  Error = 'ERROR',
  Fulfilled = 'FULFILLED',
  ReadyForPickUp = 'READY_FOR_PICK_UP',
  ReadyForShipment = 'READY_FOR_SHIPMENT',
  Refunded = 'REFUNDED',
  RefundRejected = 'REFUND_REJECTED',
  RefundRequested = 'REFUND_REQUESTED',
  RefundRequestAccepted = 'REFUND_REQUEST_ACCEPTED',
  UnableToDeliver = 'UNABLE_TO_DELIVER'
}

export enum OrderPackageStatusEnum {
  Cancelled = 'CANCELLED',
  CancelRejected = 'CANCEL_REJECTED',
  CancelRequested = 'CANCEL_REQUESTED',
  Delivered = 'DELIVERED',
  Fulfilled = 'FULFILLED',
  PartiallyCancelled = 'PARTIALLY_CANCELLED',
  PartiallyDelivered = 'PARTIALLY_DELIVERED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  PartiallyReadyForShipment = 'PARTIALLY_READY_FOR_SHIPMENT',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  ReadyForPickUp = 'READY_FOR_PICK_UP',
  ReadyForShipment = 'READY_FOR_SHIPMENT',
  Refunded = 'REFUNDED',
  RefundRejected = 'REFUND_REJECTED',
  RefundRequested = 'REFUND_REQUESTED',
  RefundRequestAccepted = 'REFUND_REQUEST_ACCEPTED',
  UnableToDeliver = 'UNABLE_TO_DELIVER',
  Unfulfilled = 'UNFULFILLED'
}

export type OrderPackageStatusEnumInputFilter = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<OrderPackageStatusEnum>;
  /** Returns a boolean indicating whether a specified value is in an array. */
  in?: InputMaybe<Array<InputMaybe<OrderPackageStatusEnum>>>;
  /** `not equal`. The filter used for not equality. */
  ne?: InputMaybe<OrderPackageStatusEnum>;
  /** Returns a boolean indicating whether a specified value is not in an array. */
  nin?: InputMaybe<Array<InputMaybe<OrderPackageStatusEnum>>>;
};

export type OrderPaginationResponse = {
  __typename?: 'OrderPaginationResponse';
  /**
   * Returns the first three records of each page in the records returned as a response.
   * For example, **let's say page = 3, limit = 30, count = 3.**
   * The records that will return as a response are the records **between 60-62.**
   */
  count: Scalars['Int']['output'];
  data: Array<Order>;
  /** In the records returned as Response, it shows whether there are any more records or not. For example, let's say our page field is three and our limit field is thirty. Records between 60 and 90 will be returned. If hasNext is `true` despite these records, **it means there are more records.** If hasNext is `false`, it means there are a total of **90 records.** */
  hasNext: Scalars['Boolean']['output'];
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit: Scalars['Int']['output'];
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page: Scalars['Int']['output'];
};

export type OrderPaymentMethod = {
  __typename?: 'OrderPaymentMethod';
  /** The indication of whether the payment was received through a gateway that is part of the payment group and does not have primary priority */
  isAlternativeGateway?: Maybe<Scalars['Boolean']['output']>;
  /** It is the gateway code of the order payment method. */
  paymentGatewayCode?: Maybe<Scalars['String']['output']>;
  /** It is the gateway name of the order payment method. */
  paymentGatewayId?: Maybe<Scalars['String']['output']>;
  /** It is the gateway name of the order payment method. */
  paymentGatewayName?: Maybe<Scalars['String']['output']>;
  /** It is the amount charged by the payment method. */
  price: Scalars['Float']['output'];
  /** It is the type enum of the order payment method. */
  type: PaymentMethodTypeEnum;
};

export type OrderPaymentMethodEnumFilterInput = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<PaymentMethodTypeEnum>;
  /** Returns a boolean indicating whether a specified value is in an array. */
  in?: InputMaybe<Array<InputMaybe<PaymentMethodTypeEnum>>>;
  /** `not equal`. The filter used for not equality. */
  ne?: InputMaybe<PaymentMethodTypeEnum>;
  /** Returns a boolean indicating whether a specified value is not in an array. */
  nin?: InputMaybe<Array<InputMaybe<PaymentMethodTypeEnum>>>;
};

export enum OrderPaymentStatusEnum {
  Failed = 'FAILED',
  OverPaid = 'OVER_PAID',
  Paid = 'PAID',
  PartiallyPaid = 'PARTIALLY_PAID',
  Refunded = 'REFUNDED',
  Waiting = 'WAITING'
}

export type OrderPaymentStatusEnumInputFilter = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<OrderPaymentStatusEnum>;
  /** Returns a boolean indicating whether a specified value is in an array. */
  in?: InputMaybe<Array<InputMaybe<OrderPaymentStatusEnum>>>;
  /** `not equal`. The filter used for not equality. */
  ne?: InputMaybe<OrderPaymentStatusEnum>;
  /** Returns a boolean indicating whether a specified value is not in an array. */
  nin?: InputMaybe<Array<InputMaybe<OrderPaymentStatusEnum>>>;
};

export type OrderPriceList = {
  __typename?: 'OrderPriceList';
  /** It is the id of the price list. */
  id: Scalars['String']['output'];
  /** It is the name of the price list. */
  name?: Maybe<Scalars['String']['output']>;
};

export type OrderRefundBranchInfoInput = {
  branchSessionId: Scalars['String']['input'];
  terminalId: Scalars['String']['input'];
};

export type OrderRefundInput = {
  branchInfo?: InputMaybe<OrderRefundBranchInfoInput>;
  forceRefund?: InputMaybe<Scalars['Boolean']['input']>;
  orderId: Scalars['String']['input'];
  orderRefundLines: Array<OrderRefundLineInput>;
  orderRefundTransactions?: InputMaybe<Array<OrderRefundTransactionInput>>;
  reason?: InputMaybe<Scalars['String']['input']>;
  refundGift?: InputMaybe<Scalars['Boolean']['input']>;
  refundShipping?: InputMaybe<Scalars['Boolean']['input']>;
  sendNotificationToCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  stockLocationId?: InputMaybe<Scalars['String']['input']>;
};

export type OrderRefundLineInput = {
  orderLineItemId: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  quantity: Scalars['Float']['input'];
  restockItems?: Scalars['Boolean']['input'];
};

export type OrderRefundTransactionInput = {
  amount: Scalars['Float']['input'];
  transactionId: Scalars['String']['input'];
};

export type OrderSalesChannel = {
  __typename?: 'OrderSalesChannel';
  /** It is the sales channel id where the order was created. */
  id: Scalars['String']['output'];
  /** It is the sales channel name where the order was created. */
  name?: Maybe<Scalars['String']['output']>;
  /** It is the sales channel type where the order was created. */
  type?: Maybe<Scalars['Float']['output']>;
};

export type OrderSessionInfo = {
  __typename?: 'OrderSessionInfo';
  countryCode?: Maybe<Scalars['String']['output']>;
  durationMS?: Maybe<Scalars['Float']['output']>;
  end?: Maybe<Scalars['Timestamp']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  referer?: Maybe<Scalars['String']['output']>;
  salesChannelId?: Maybe<Scalars['String']['output']>;
  sessionId?: Maybe<Scalars['String']['output']>;
  start?: Maybe<Scalars['Timestamp']['output']>;
  storefrontId?: Maybe<Scalars['String']['output']>;
  trafficSource?: Maybe<OrderSessionInfoTrafficSource>;
  userAgent?: Maybe<OrderSessionUserAgent>;
  utm?: Maybe<OrderSessionUtm>;
  visitorId?: Maybe<Scalars['String']['output']>;
};

export type OrderSessionInfoTrafficSource = {
  __typename?: 'OrderSessionInfoTrafficSource';
  source?: Maybe<Scalars['String']['output']>;
  type: SfAnalyticsTrafficSourceEnum;
};

export type OrderSessionUtm = {
  __typename?: 'OrderSessionUTM';
  campaign?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  term?: Maybe<Scalars['String']['output']>;
};

export type OrderSessionUserAgent = {
  __typename?: 'OrderSessionUserAgent';
  deviceType: UserAgentDeviceType;
  name: Scalars['String']['output'];
  os: Scalars['String']['output'];
};

export type OrderShippingLine = {
  __typename?: 'OrderShippingLine';
  /** It is the final price after discounts are applied. */
  finalPrice: Scalars['Float']['output'];
  /** Indicates whether the shipping cost is refunded if the order is refunded. **isRefunded** returns `true` if the amount is refunded. */
  isRefunded?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates whether the shipping cost is refunded if the order is refunded. **isRefunded** returns `true` if the amount is refunded. */
  paymentMethod?: Maybe<PaymentMethodTypeEnum>;
  /** It is the price of the order shipping line. */
  price: Scalars['Float']['output'];
  priceListId?: Maybe<Scalars['String']['output']>;
  /** It is the shipping settings id of the order shipping line. */
  shippingSettingsId?: Maybe<Scalars['String']['output']>;
  /** It is the shipping zone rate id of the order shipping line. */
  shippingZoneRateId?: Maybe<Scalars['String']['output']>;
  /** It is the tax value of the order shipping line price. */
  taxValue?: Maybe<Scalars['Float']['output']>;
  /** It is the title of the order shipping line. */
  title: Scalars['String']['output'];
  /** The amount is the id of the transaction. */
  transactionId?: Maybe<Scalars['String']['output']>;
};

export type OrderShippingLineInput = {
  /** It is the price of the order shipping line. */
  price: Scalars['Float']['input'];
  priceListId?: InputMaybe<Scalars['String']['input']>;
  /** It is the tax value of the order shipping line. */
  taxValue?: InputMaybe<Scalars['Float']['input']>;
  /** It is the title of the order shipping line. */
  title: Scalars['String']['input'];
};

export enum OrderShippingMethodEnum {
  ClickAndCollect = 'CLICK_AND_COLLECT',
  DigitalDelivery = 'DIGITAL_DELIVERY',
  NoShipment = 'NO_SHIPMENT',
  Shipment = 'SHIPMENT'
}

export type OrderShippingMethodEnumFilterInput = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<OrderShippingMethodEnum>;
  /** Returns a boolean indicating whether a specified value is in an array. */
  in?: InputMaybe<Array<InputMaybe<OrderShippingMethodEnum>>>;
  /** `not equal`. The filter used for not equality. */
  ne?: InputMaybe<OrderShippingMethodEnum>;
  /** Returns a boolean indicating whether a specified value is not in an array. */
  nin?: InputMaybe<Array<InputMaybe<OrderShippingMethodEnum>>>;
};

export type OrderStaff = {
  __typename?: 'OrderStaff';
  /** It is the email of the staff who created the order. */
  email: Scalars['String']['output'];
  /** It is the first name of the staff who created the order. */
  firstName: Scalars['String']['output'];
  /** It is the first name of the staff who created the order. */
  id: Scalars['String']['output'];
  /** It is the last name of the staff who created the order. */
  lastName: Scalars['String']['output'];
};

export type OrderStaffInput = {
  /** It is the email of the staff who created the order. */
  email: Scalars['String']['input'];
  /** It is the first name of the staff who created the order. */
  firstName: Scalars['String']['input'];
  /** It is the first name of the staff who created the order. */
  id: Scalars['String']['input'];
  /** It is the last name of the staff who created the order. */
  lastName: Scalars['String']['input'];
};

export enum OrderStatusEnum {
  Cancelled = 'CANCELLED',
  Created = 'CREATED',
  Draft = 'DRAFT',
  PartiallyCancelled = 'PARTIALLY_CANCELLED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Refunded = 'REFUNDED',
  RefundRejected = 'REFUND_REJECTED',
  RefundRequested = 'REFUND_REQUESTED',
  WaitingUpsellAction = 'WAITING_UPSELL_ACTION'
}

export type OrderStatusEnumInputFilter = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<OrderStatusEnum>;
  /** Returns a boolean indicating whether a specified value is in an array. */
  in?: InputMaybe<Array<InputMaybe<OrderStatusEnum>>>;
  /** `not equal`. The filter used for not equality. */
  ne?: InputMaybe<OrderStatusEnum>;
  /** Returns a boolean indicating whether a specified value is not in an array. */
  nin?: InputMaybe<Array<InputMaybe<OrderStatusEnum>>>;
};

export type OrderStockLocation = {
  __typename?: 'OrderStockLocation';
  /** It is the id of the stock location of the merchant. */
  id: Scalars['String']['output'];
  /** It is the name of the stock location. */
  name: Scalars['String']['output'];
};

export type OrderStorefront = {
  __typename?: 'OrderStorefront';
  /** It is the storefront id where the order was created. */
  id: Scalars['String']['output'];
  /** It is the storefront name id where the order was created. */
  name?: Maybe<Scalars['String']['output']>;
};

export type OrderStorefrontRouting = {
  __typename?: 'OrderStorefrontRouting';
  /** It is the domain of the storefront routing. */
  domain?: Maybe<Scalars['String']['output']>;
  dynamicCurrencySettings?: Maybe<OrderStorefrontRoutingDynamicCurrencySettings>;
  /** It is the storefront routing id used by the storefront when the order was created. */
  id: Scalars['String']['output'];
  /** It is the locale of the storefront routing. */
  locale?: Maybe<Scalars['String']['output']>;
  /** It is the path of the storefront routing. */
  path?: Maybe<Scalars['String']['output']>;
  /** It is the price list id that associated on the storefront routing. */
  priceListId?: Maybe<Scalars['String']['output']>;
  salesChannelId?: Maybe<Scalars['String']['output']>;
};

export type OrderStorefrontRoutingDynamicCurrencySettings = {
  __typename?: 'OrderStorefrontRoutingDynamicCurrencySettings';
  /** One of '.x0' | '.x9' | '.00' | '.90' | '.99' | '0.00' | '9.90' */
  roundingFormat?: Maybe<Scalars['String']['output']>;
  targetCurrencyCode: Scalars['String']['output'];
};

export type OrderStorefrontTheme = {
  __typename?: 'OrderStorefrontTheme';
  /** It is the theme id customized by the merchant used by the storefront when the order was created. */
  id: Scalars['String']['output'];
  /** It is the theme theme name customized by the merchant used by the storefront when the order was created. */
  name?: Maybe<Scalars['String']['output']>;
  /** It is the ikas theme id used by the storefront when the order was created. */
  themeId?: Maybe<Scalars['String']['output']>;
  /** It is the ikas theme version id used by the storefront when the order was created. */
  themeVersionId?: Maybe<Scalars['String']['output']>;
};

export type OrderTag = {
  __typename?: 'OrderTag';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type OrderTagInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type OrderTaxLine = {
  __typename?: 'OrderTaxLine';
  /** It is the price of the order tax. */
  price: Scalars['Float']['output'];
  /** It is the percentage of the slice to which the calculated tax amount belongs. */
  rate: Scalars['Float']['output'];
};

export type OrderTransactionInput = {
  amount: Scalars['Float']['input'];
  paymentGatewayId?: InputMaybe<Scalars['String']['input']>;
};

export type PaginationInput = {
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PaymentGateway = {
  __typename?: 'PaymentGateway';
  additionalPrices?: Maybe<Array<AdditionalPrice>>;
  availableCountries?: Maybe<Array<Scalars['String']['output']>>;
  code: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  group?: Maybe<PaymentGatewayGroup>;
  id: Scalars['ID']['output'];
  isPassive?: Maybe<Scalars['Boolean']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  masterPassClientId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  paymentGatewayProviderId?: Maybe<Scalars['String']['output']>;
  paymentMethodType: PaymentMethodTypeEnum;
  paymentMethods: Array<PaymentGatewayPaymentMethod>;
  settings?: Maybe<Array<PaymentGatewaySettings>>;
  supportedCurrencies?: Maybe<Array<Scalars['String']['output']>>;
  testMode: Scalars['Boolean']['output'];
  translations?: Maybe<Array<PaymentGatewayTranslation>>;
  type: PaymentGatewayTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum PaymentGatewayAdditionalPriceTypeEnum {
  Decrement = 'DECREMENT',
  Increment = 'INCREMENT'
}

export type PaymentGatewayGroup = {
  __typename?: 'PaymentGatewayGroup';
  key: Scalars['String']['output'];
  order: Scalars['Float']['output'];
};

export type PaymentGatewayPaymentMethod = {
  __typename?: 'PaymentGatewayPaymentMethod';
  allowed?: Maybe<Scalars['Boolean']['output']>;
  enabled?: Maybe<Scalars['Boolean']['output']>;
  externalId?: Maybe<Scalars['String']['output']>;
  externalStoreIds?: Maybe<Array<Scalars['String']['output']>>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type PaymentGatewaySettings = {
  __typename?: 'PaymentGatewaySettings';
  label: Scalars['String']['output'];
  order: Scalars['Float']['output'];
  type: PaymentGatewaySettingsTypeEnum;
  value?: Maybe<Scalars['String']['output']>;
};

export enum PaymentGatewaySettingsTypeEnum {
  Boolean = 'BOOLEAN',
  Number = 'NUMBER',
  Password = 'PASSWORD',
  Text = 'TEXT'
}

export enum PaymentGatewayTransactionFeeTypeEnum {
  Amount = 'AMOUNT',
  Ratio = 'RATIO'
}

export type PaymentGatewayTranslation = {
  __typename?: 'PaymentGatewayTranslation';
  description?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum PaymentGatewayTypeEnum {
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
  ThirdParty = 'THIRD_PARTY'
}

export enum PaymentMethodTypeEnum {
  AppPayment = 'APP_PAYMENT',
  BankRedirect = 'BANK_REDIRECT',
  BuyOnlinePayAtStore = 'BUY_ONLINE_PAY_AT_STORE',
  Cash = 'CASH',
  CashOnDelivery = 'CASH_ON_DELIVERY',
  CreditCard = 'CREDIT_CARD',
  CreditCardOnDelivery = 'CREDIT_CARD_ON_DELIVERY',
  DirectDebit = 'DIRECT_DEBIT',
  GiftCard = 'GIFT_CARD',
  MoneyOrder = 'MONEY_ORDER',
  Other = 'OTHER',
  PayLater = 'PAY_LATER',
  SliceIt = 'SLICE_IT',
  Wallet = 'WALLET'
}

export type PriceList = {
  __typename?: 'PriceList';
  addProductsAutomatically?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  /** The currency of the product's price list. */
  currency: Scalars['String']['output'];
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** It is the name of the price list of the product. */
  name: Scalars['String']['output'];
  ruleList?: Maybe<Array<PriceListRuleList>>;
  /** Type of price price list */
  type?: Maybe<PriceListTypeEnum>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type PriceListCurrencyRateSettings = {
  __typename?: 'PriceListCurrencyRateSettings';
  amount?: Maybe<Scalars['Float']['output']>;
  type: PriceListCurrencyRateTypeEnum;
};

/** Price List Currency Rate Type Enum */
export enum PriceListCurrencyRateTypeEnum {
  CurrentRate = 'CURRENT_RATE',
  CustomRate = 'CUSTOM_RATE'
}

export type PriceListCurrencySettings = {
  __typename?: 'PriceListCurrencySettings';
  /** One of '.x0' | '.x9' | '.00' | '.90' | '.99' | '0.00' */
  roundingFormat?: Maybe<Scalars['String']['output']>;
};

export type PriceListRuleList = {
  __typename?: 'PriceListRuleList';
  basePriceListId?: Maybe<Scalars['String']['output']>;
  currencyRateSettings?: Maybe<PriceListCurrencyRateSettings>;
  currencySettings: PriceListCurrencySettings;
  rules: Array<PriceListRules>;
};

export type PriceListRules = {
  __typename?: 'PriceListRules';
  amount: Scalars['Float']['output'];
  amountType: PriceListRulesAmountTypeEnum;
  operationType: PriceListRulesOperationTypeEnum;
};

/** Price List Rules Amount Type Enum */
export enum PriceListRulesAmountTypeEnum {
  Amount = 'AMOUNT',
  Ratio = 'RATIO'
}

/** Price List Rules Operation Type Enum */
export enum PriceListRulesOperationTypeEnum {
  Decrease = 'DECREASE',
  Increase = 'INCREASE'
}

/** Price List Type Enum */
export enum PriceListTypeEnum {
  Dynamic = 'DYNAMIC',
  DynamicRate = 'DYNAMIC_RATE',
  Manual = 'MANUAL'
}

export type Product = {
  __typename?: 'Product';
  /** List of product attributes. */
  attributes?: Maybe<Array<ProductAttributeValue>>;
  /** Base unit of the product. */
  baseUnit?: Maybe<ProductBaseUnitModel>;
  /** Brand of the product. */
  brand?: Maybe<SimpleProductBrand>;
  /** Brand id of the product. */
  brandId?: Maybe<Scalars['String']['output']>;
  /** List of categories of the product. */
  categories?: Maybe<Array<SimpleCategory>>;
  /** List category identifiers of the product. */
  categoryIds?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** Description of the product. */
  description?: Maybe<Scalars['String']['output']>;
  dynamicPriceListIds?: Maybe<Array<Scalars['String']['output']>>;
  googleTaxonomyId?: Maybe<Scalars['String']['output']>;
  /** This is the variant type id that can be used to group variants by a specific variant type id. */
  groupVariantsByVariantTypeId?: Maybe<Scalars['String']['output']>;
  /** List of hidden sales channel ids of the product. */
  hiddenSalesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  /** Max purchasable quantity of the product for per cart. */
  maxQuantityPerCart?: Maybe<Scalars['Float']['output']>;
  /** HTML Metadata identifier of the product. */
  metaData?: Maybe<HtmlMetaData>;
  /** Unique identifier of the product. */
  name: Scalars['String']['output'];
  /** Option set id of the product. */
  productOptionSetId?: Maybe<Scalars['String']['output']>;
  /** Variant types of the product. */
  productVariantTypes?: Maybe<Array<ProductVariantType>>;
  /** Volume discount id of the product. */
  productVolumeDiscountId?: Maybe<Scalars['String']['output']>;
  /** List of sales channel ids of the product. */
  salesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  /** List of hidden sales channels of the product. */
  salesChannels?: Maybe<Array<ProductSalesChannel>>;
  /** Short description of the product. */
  shortDescription?: Maybe<Scalars['String']['output']>;
  /** List of product tag identifiers. */
  tagIds?: Maybe<Array<Scalars['String']['output']>>;
  /** List of product tags. */
  tags?: Maybe<Array<SimpleProductTag>>;
  totalStock?: Maybe<Scalars['Float']['output']>;
  /** Translations for the product. */
  translations?: Maybe<Array<ProductTranslation>>;
  /** Type of the product. */
  type: ProductTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** List of product variants. */
  variants: Array<Variant>;
  /** Vendor id of the product. */
  vendorId?: Maybe<Scalars['String']['output']>;
  /** Weight of the product. */
  weight?: Maybe<Scalars['Float']['output']>;
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** Description of the attribute */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Name of the attribute */
  name: Scalars['String']['output'];
  /** Options of the attribute */
  options?: Maybe<Array<ProductAttributeOption>>;
  /** Table template description for product attribute */
  tableTemplate?: Maybe<ProductAttributeTableTemplate>;
  /** Translations for the attribute */
  translations?: Maybe<Array<ProductAttributeTranslation>>;
  /** Type of the attribute */
  type: ProductAttributeTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductAttributeFilterInput = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductAttributeInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<ProductAttributeOptionInput>>;
  tableTemplate?: InputMaybe<ProductAttributeTableTemplateInput>;
  translations?: InputMaybe<Array<ProductAttributeTranslationInput>>;
  type: ProductAttributeTypeEnum;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ProductAttributeOption = {
  __typename?: 'ProductAttributeOption';
  /** It is the color code information of the product attribute option. It can be a maximum of 7 characters. */
  colorCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Name of the product attribute option */
  name: Scalars['String']['output'];
  /** It is the image information of the product attribute option. */
  thumbnailImageId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductAttributeOptionInput = {
  colorCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  thumbnailImageId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ProductAttributeOptionTranslation = {
  __typename?: 'ProductAttributeOptionTranslation';
  id: Scalars['String']['output'];
  /** Name of the attribute option for translation. */
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductAttributeOptionTranslationInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductAttributeTableCellData = {
  __typename?: 'ProductAttributeTableCellData';
  id: Scalars['String']['output'];
  /** Name of the product attribute table */
  name: Scalars['String']['output'];
};

export type ProductAttributeTableCellDataInput = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ProductAttributeTableTemplate = {
  __typename?: 'ProductAttributeTableTemplate';
  /** List of columns for product attribute table. */
  columns: Array<ProductAttributeTableCellData>;
  /** List of rows for product attribute table. */
  rows: Array<ProductAttributeTableCellData>;
};

export type ProductAttributeTableTemplateInput = {
  columns: Array<ProductAttributeTableCellDataInput>;
  rows: Array<ProductAttributeTableCellDataInput>;
};

export type ProductAttributeTranslation = {
  __typename?: 'ProductAttributeTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
  /** List of translations for attribute options */
  options?: Maybe<Array<ProductAttributeOptionTranslation>>;
};

export type ProductAttributeTranslationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locale: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<ProductAttributeOptionTranslationInput>>;
};

/** ProductAttribute Types */
export enum ProductAttributeTypeEnum {
  Boolean = 'BOOLEAN',
  Choice = 'CHOICE',
  ColorThumbnailMultipleChoice = 'COLOR_THUMBNAIL_MULTIPLE_CHOICE',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Html = 'HTML',
  Image = 'IMAGE',
  MultipleChoice = 'MULTIPLE_CHOICE',
  Numeric = 'NUMERIC',
  Product = 'PRODUCT',
  Table = 'TABLE',
  Text = 'TEXT'
}

export type ProductAttributeValue = {
  __typename?: 'ProductAttributeValue';
  /** Image ids of the product attribute */
  imageIds?: Maybe<Array<Scalars['String']['output']>>;
  /** Identifier of the product attribute */
  productAttributeId?: Maybe<Scalars['String']['output']>;
  /** Option identifier for the product attribute */
  productAttributeOptionId?: Maybe<Scalars['String']['output']>;
  /** Value of the product attribute */
  value?: Maybe<Scalars['String']['output']>;
};

export type ProductAttributeValueInput = {
  imageIds?: InputMaybe<Array<Scalars['String']['input']>>;
  productAttributeId?: InputMaybe<Scalars['String']['input']>;
  productAttributeOptionId?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type ProductBaseUnitModel = {
  __typename?: 'ProductBaseUnitModel';
  /** Amount of the product unit. */
  baseAmount?: Maybe<Scalars['Float']['output']>;
  /** Type of the product unit. */
  type: ProductUnitTypeEnum;
  /** Unit id of the product unit. */
  unitId?: Maybe<Scalars['String']['output']>;
};

export type ProductBaseUnitModelInput = {
  baseAmount: Scalars['Float']['input'];
  type: ProductUnitTypeEnum;
  unitId?: InputMaybe<Scalars['String']['input']>;
};

export type ProductBrand = {
  __typename?: 'ProductBrand';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** The description of the product's brand. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** The image information of the product's brand. */
  imageId?: Maybe<Scalars['String']['output']>;
  /** It is the metadata information of the product brand. */
  metaData?: Maybe<HtmlMetaData>;
  /** The name of the product's brand. */
  name: Scalars['String']['output'];
  orderType?: Maybe<CategoryProductsOrderTypeEnum>;
  /** It is the information of which sales channel the product brand is in. */
  salesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  /** It is the translation information of the product brand. */
  translations?: Maybe<Array<ProductBrandTranslation>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductBrandInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** The description of the product's brand. */
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The image information of the product's brand. */
  imageId?: InputMaybe<Scalars['String']['input']>;
  /** It is the metadata information of the product brand. */
  metaData?: InputMaybe<HtmlMetaDataInput>;
  /** The name of the product's brand. */
  name: Scalars['String']['input'];
  orderType?: InputMaybe<CategoryProductsOrderTypeEnum>;
  /** It is the information of which sales channel the product brand is in. */
  salesChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** It is the translation information of the product brand. */
  translations?: InputMaybe<Array<ProductBrandTranslationInput>>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ProductBrandTranslation = {
  __typename?: 'ProductBrandTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductBrandTranslationInput = {
  /** It is the description information of the translation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['input'];
  /** It is the information in which language the translation is saved. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductImage = {
  __typename?: 'ProductImage';
  fileName?: Maybe<Scalars['String']['output']>;
  /** Id of the product image. */
  imageId?: Maybe<Scalars['String']['output']>;
  /** Whether the image is main image for the product or not. */
  isMain: Scalars['Boolean']['output'];
  /** True if this the media type is video */
  isVideo?: Maybe<Scalars['Boolean']['output']>;
  /** Order of the product image. */
  order: Scalars['Float']['output'];
};

export type ProductImageInput = {
  fileName?: InputMaybe<Scalars['String']['input']>;
  imageId: Scalars['String']['input'];
  isMain: Scalars['Boolean']['input'];
  isVideo?: InputMaybe<Scalars['Boolean']['input']>;
  order: Scalars['Float']['input'];
};

export type ProductInput = {
  attributes?: InputMaybe<Array<ProductAttributeValueInput>>;
  baseUnit?: InputMaybe<ProductBaseUnitModelInput>;
  brandId?: InputMaybe<Scalars['String']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dynamicPriceListIds?: InputMaybe<Array<Scalars['String']['input']>>;
  googleTaxonomyId?: InputMaybe<Scalars['String']['input']>;
  groupVariantsByVariantTypeId?: InputMaybe<Scalars['String']['input']>;
  hiddenSalesChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Max purchasable quantity of the product for per cart. */
  maxQuantityPerCart?: InputMaybe<Scalars['Float']['input']>;
  metaData?: InputMaybe<HtmlMetaDataInput>;
  name: Scalars['String']['input'];
  productOptionSetId?: InputMaybe<Scalars['String']['input']>;
  productVariantTypes?: InputMaybe<Array<ProductVariantTypeInput>>;
  productVolumeDiscountId?: InputMaybe<Scalars['String']['input']>;
  salesChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** List of sales channels of the product. */
  salesChannels?: InputMaybe<Array<ProductSalesChannelInput>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
  translations?: InputMaybe<Array<ProductTranslationInput>>;
  type: ProductTypeEnum;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  variants: Array<VariantInput>;
  vendorId?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type ProductOption = {
  __typename?: 'ProductOption';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  dateSettings?: Maybe<ProductOptionDateSettings>;
  deleted: Scalars['Boolean']['output'];
  fileSettings?: Maybe<ProductOptionFileSettings>;
  id: Scalars['ID']['output'];
  isOptional?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  optionalText?: Maybe<Scalars['String']['output']>;
  order: Scalars['Float']['output'];
  otherPrices?: Maybe<Array<ProductOptionSelectValueOtherPrice>>;
  price?: Maybe<Scalars['Float']['output']>;
  priceType?: Maybe<ProductOptionPriceTypeEnum>;
  requiredOptionId?: Maybe<Scalars['String']['output']>;
  requiredOptionValueIds?: Maybe<Array<Scalars['String']['output']>>;
  selectSettings?: Maybe<ProductOptionSelectSettings>;
  textSettings?: Maybe<ProductOptionTextSettings>;
  type: ProductOptionTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductOptionDateSettings = {
  __typename?: 'ProductOptionDateSettings';
  max?: Maybe<Scalars['Timestamp']['output']>;
  maxRelativeNextDate?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Timestamp']['output']>;
  minRelativeNextDate?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionFileSettings = {
  __typename?: 'ProductOptionFileSettings';
  allowedExtensions?: Maybe<Array<Scalars['String']['output']>>;
  maxQuantity?: Maybe<Scalars['Float']['output']>;
  minQuantity?: Maybe<Scalars['Float']['output']>;
};

export enum ProductOptionPriceTypeEnum {
  Amount = 'AMOUNT',
  Ratio = 'RATIO'
}

export type ProductOptionSelectSettings = {
  __typename?: 'ProductOptionSelectSettings';
  maxSelect?: Maybe<Scalars['Float']['output']>;
  minSelect?: Maybe<Scalars['Float']['output']>;
  type: ProductOptionSelectTypeEnum;
  values: Array<ProductOptionSelectValue>;
};

export enum ProductOptionSelectTypeEnum {
  Box = 'BOX',
  Select = 'SELECT',
  Swatch = 'SWATCH'
}

export type ProductOptionSelectValue = {
  __typename?: 'ProductOptionSelectValue';
  colorCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Float']['output'];
  otherPrices?: Maybe<Array<ProductOptionSelectValueOtherPrice>>;
  price?: Maybe<Scalars['Float']['output']>;
  priceType?: Maybe<ProductOptionPriceTypeEnum>;
  thumbnailImageId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  value: Scalars['String']['output'];
};

export type ProductOptionSelectValueOtherPrice = {
  __typename?: 'ProductOptionSelectValueOtherPrice';
  currencyCode: Scalars['String']['output'];
  currencySymbol?: Maybe<Scalars['String']['output']>;
  price: Scalars['Float']['output'];
  priceListId?: Maybe<Scalars['String']['output']>;
  priceType?: Maybe<ProductOptionPriceTypeEnum>;
};

export type ProductOptionSelectValueTranslations = {
  __typename?: 'ProductOptionSelectValueTranslations';
  id: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type ProductOptionSet = {
  __typename?: 'ProductOptionSet';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  options: Array<ProductOption>;
  translations?: Maybe<Array<ProductOptionSetTranslations>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductOptionSetTranslations = {
  __typename?: 'ProductOptionSetTranslations';
  locale: Scalars['String']['output'];
  options?: Maybe<Array<ProductOptionTranslations>>;
};

export type ProductOptionTextSettings = {
  __typename?: 'ProductOptionTextSettings';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type ProductOptionTranslations = {
  __typename?: 'ProductOptionTranslations';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  optionalText?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<ProductOptionSelectValueTranslations>>;
};

export enum ProductOptionTypeEnum {
  Checkbox = 'CHECKBOX',
  Choice = 'CHOICE',
  ColorPicker = 'COLOR_PICKER',
  DatePicker = 'DATE_PICKER',
  File = 'FILE',
  Image = 'IMAGE',
  Text = 'TEXT',
  TextArea = 'TEXT_AREA'
}

export type ProductOrder = {
  __typename?: 'ProductOrder';
  brandIds?: Maybe<Array<Scalars['String']['output']>>;
  categoryIds?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  products: Array<ProductOrderProduct>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductOrderInput = {
  brandIds?: InputMaybe<Array<Scalars['String']['input']>>;
  categoryIds?: InputMaybe<Array<Scalars['String']['input']>>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  products: Array<ProductOrderProductInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ProductOrderProduct = {
  __typename?: 'ProductOrderProduct';
  order: Scalars['Int']['output'];
  productId: Scalars['String']['output'];
};

export type ProductOrderProductInput = {
  order: Scalars['Int']['input'];
  productId: Scalars['String']['input'];
};

export type ProductPaginationResponse = {
  __typename?: 'ProductPaginationResponse';
  /**
   * Returns the first three records of each page in the records returned as a response.
   * For example, **let's say page = 3, limit = 30, count = 3.**
   * The records that will return as a response are the records **between 60-62.**
   */
  count: Scalars['Int']['output'];
  data: Array<Product>;
  /** In the records returned as Response, it shows whether there are any more records or not. For example, let's say our page field is three and our limit field is thirty. Records between 60 and 90 will be returned. If hasNext is `true` despite these records, **it means there are more records.** If hasNext is `false`, it means there are a total of **90 records.** */
  hasNext: Scalars['Boolean']['output'];
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit: Scalars['Int']['output'];
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page: Scalars['Int']['output'];
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  /** Buy price of product. */
  buyPrice?: Maybe<Scalars['Float']['output']>;
  /** Currency for the price of product. */
  currency?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  /** Discount price of product. */
  discountPrice?: Maybe<Scalars['Float']['output']>;
  /** Id of the price list that the product belongs to. */
  priceListId?: Maybe<Scalars['String']['output']>;
  /** Sell price of product. */
  sellPrice: Scalars['Float']['output'];
};

export type ProductPriceInput = {
  buyPrice?: InputMaybe<Scalars['Float']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  discountPrice?: InputMaybe<Scalars['Float']['input']>;
  priceListId?: InputMaybe<Scalars['String']['input']>;
  sellPrice: Scalars['Float']['input'];
};

export type ProductSalesChannel = {
  __typename?: 'ProductSalesChannel';
  id: Scalars['String']['output'];
  /** Max purchasable quantity of the product for per cart. */
  maxQuantityPerCart?: Maybe<Scalars['Float']['output']>;
  /** Min purchasable quantity of the product for per cart. */
  minQuantityPerCart?: Maybe<Scalars['Float']['output']>;
  /** Volume discount id of the product. */
  productVolumeDiscountId?: Maybe<Scalars['String']['output']>;
  quantitySettings?: Maybe<Array<Scalars['Float']['output']>>;
  status: SalesChannelStatusEnum;
};

export type ProductSalesChannelInput = {
  id: Scalars['String']['input'];
  /** Max purchasable quantity of the product for per cart. */
  maxQuantityPerCart?: InputMaybe<Scalars['Float']['input']>;
  /** Min purchasable quantity of the product for per cart. */
  minQuantityPerCart?: InputMaybe<Scalars['Float']['input']>;
  productVolumeDiscountId?: InputMaybe<Scalars['String']['input']>;
  quantitySettings?: InputMaybe<Array<Scalars['Float']['input']>>;
  status: SalesChannelStatusEnum;
};

export type ProductSearchCustomerReviewSummaries = {
  __typename?: 'ProductSearchCustomerReviewSummaries';
  averageRating?: Maybe<Scalars['Float']['output']>;
  reviewCount?: Maybe<Scalars['Float']['output']>;
  stars?: Maybe<Array<SearchProductCustomerReviewStar>>;
  storefrontId?: Maybe<Scalars['String']['output']>;
};

export type ProductSearchResponse = {
  __typename?: 'ProductSearchResponse';
  /** Number of search results listed in current page. */
  count: Scalars['Float']['output'];
  /** Search result */
  data: Scalars['JSON']['output'];
  /** Maximum number of results returned in each page. */
  limit: Scalars['Float']['output'];
  /** Current page number of the search results. */
  page: Scalars['Float']['output'];
  /** Search result */
  results: Array<SearchProduct>;
  /** Total number of search results. */
  totalCount: Scalars['Float']['output'];
};

export type ProductStockLocation = {
  __typename?: 'ProductStockLocation';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  productId: Scalars['String']['output'];
  stockCount: Scalars['Float']['output'];
  stockLocationId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  variantId: Scalars['String']['output'];
};

export type ProductStockLocationInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** It is the product id to which the variant associated. */
  productId: Scalars['String']['input'];
  /** It is the stock quantity of the variant. */
  stockCount: Scalars['Float']['input'];
  /** It is the stock location id information where the stock information will be edited. */
  stockLocationId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  /** It is the of the variant. */
  variantId: Scalars['String']['input'];
};

export type ProductStockLocationPaginationResponse = {
  __typename?: 'ProductStockLocationPaginationResponse';
  /**
   * Returns the first three records of each page in the records returned as a response.
   * For example, **let's say page = 3, limit = 30, count = 3.**
   * The records that will return as a response are the records **between 60-62.**
   */
  count: Scalars['Int']['output'];
  data: Array<ProductStockLocation>;
  /** In the records returned as Response, it shows whether there are any more records or not. For example, let's say our page field is three and our limit field is thirty. Records between 60 and 90 will be returned. If hasNext is `true` despite these records, **it means there are more records.** If hasNext is `false`, it means there are a total of **90 records.** */
  hasNext: Scalars['Boolean']['output'];
  /**
   * The maximum number of data you want to see on a page in the records returned as a response.
   * For example, if the limit is **20**, the data will be displayed ** as 20 each. **
   * :::note
   * min 1, max 200 values can be given. If no value is entered, default 50 is accepted.
   * :::
   */
  limit: Scalars['Int']['output'];
  /**
   * The number of the page you want to see in the records that return as response.
   * For example: We entered the page field as **3**.And let our limit field be **30**.
   * The records that will return as a response are the records **between 60-90.**
   * :::note
   * If no value is entered, default 1 is accepted.
   * :::
   */
  page: Scalars['Int']['output'];
};

export type ProductTag = {
  __typename?: 'ProductTag';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The name of the product's tag. */
  name: Scalars['String']['output'];
  /** The name of the product's tag. */
  translations?: Maybe<Array<ProductTagTranslation>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductTagInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the product's tag. */
  name: Scalars['String']['input'];
  /** The name of the product's tag. */
  translations?: InputMaybe<Array<ProductTagTranslationInput>>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ProductTagTranslation = {
  __typename?: 'ProductTagTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductTagTranslationInput = {
  /** It is the description information of the translation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['input'];
  /** It is the information in which language the translation is saved. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type ProductTranslation = {
  __typename?: 'ProductTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductTranslationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  locale: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Product Types */
export enum ProductTypeEnum {
  Bundle = 'BUNDLE',
  Digital = 'DIGITAL',
  Membership = 'MEMBERSHIP',
  Physical = 'PHYSICAL'
}

export type ProductUnit = {
  __typename?: 'ProductUnit';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The name of the product's unit. */
  name: Scalars['String']['output'];
  /** The name of the product's unit. */
  translations?: Maybe<Array<ProductUnitTranslation>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductUnitInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the product's unit. */
  name: Scalars['String']['input'];
  /** The name of the product's unit. */
  translations?: InputMaybe<Array<ProductUnitTranslationInput>>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ProductUnitTranslation = {
  __typename?: 'ProductUnitTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
};

export type ProductUnitTranslationInput = {
  /** It is the description information of the translation. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['input'];
  /** It is the information in which language the translation is saved. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export enum ProductUnitTypeEnum {
  Centiliter = 'CENTILITER',
  Centimeter = 'CENTIMETER',
  CubicMeters = 'CUBIC_METERS',
  Custom = 'CUSTOM',
  Gram = 'GRAM',
  Kilogram = 'KILOGRAM',
  Liter = 'LITER',
  Meter = 'METER',
  Milligram = 'MILLIGRAM',
  Milliliter = 'MILLILITER',
  Millimeter = 'MILLIMETER',
  SquareMeters = 'SQUARE_METERS'
}

export type ProductVariantType = {
  __typename?: 'ProductVariantType';
  /** Order of the variant type. */
  order: Scalars['Float']['output'];
  /** Id of variant type. */
  variantTypeId: Scalars['String']['output'];
  /** List of variant value identifiers. */
  variantValueIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type ProductVariantTypeInput = {
  order: Scalars['Float']['input'];
  variantTypeId: Scalars['String']['input'];
  variantValueIds: Array<Scalars['String']['input']>;
};

export type ProductVolumeDiscount = {
  __typename?: 'ProductVolumeDiscount';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The name of the product volume discount. */
  name: Scalars['String']['output'];
  /** Shows the product volume discount rules. */
  rules: Array<ProductVolumeDiscountRule>;
  /** Determines whether variants will be evaluated separately. */
  scope: ProductVolumeDiscountScopeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ProductVolumeDiscountInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** The name of the product volume discount. */
  name: Scalars['String']['input'];
  /** Shows the product volume discount rules. */
  rules: Array<ProductVolumeDiscountRuleInput>;
  /** Determines whether variants will be evaluated separately. */
  scope: ProductVolumeDiscountScopeEnum;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type ProductVolumeDiscountRule = {
  __typename?: 'ProductVolumeDiscountRule';
  /** Shows the discount amount of the rule. */
  discountRatio: Scalars['Float']['output'];
  /** It shows the quantity of the product that will be included in the rule. */
  lineItemQuantityRange: VolumeDiscountMinMaxRangeField;
};

export type ProductVolumeDiscountRuleInput = {
  /** Shows the discount amount of the rule. */
  discountRatio: Scalars['Float']['input'];
  /** It shows the quantity of the product that will be included in the rule. */
  lineItemQuantityRange: VolumeDiscountMinMaxRangeFieldInput;
};

/** Product Volume Discount Scope Enum */
export enum ProductVolumeDiscountScopeEnum {
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

export type PublicTransaction = {
  __typename?: 'PublicTransaction';
  amount: Scalars['Float']['output'];
  authCode: Scalars['String']['output'];
  checkoutId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currencyCode: Scalars['String']['output'];
  currencySymbol?: Maybe<Scalars['String']['output']>;
  customerId?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  error?: Maybe<TransactionError>;
  gatewayReferenceId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  orderId?: Maybe<Scalars['String']['output']>;
  paymentGatewayCode?: Maybe<Scalars['String']['output']>;
  paymentGatewayId: Scalars['String']['output'];
  paymentGatewayName: Scalars['String']['output'];
  paymentMethod?: Maybe<PaymentMethodTypeEnum>;
  paymentMethodDetail?: Maybe<TransactionPaymentMethodDetail>;
  processedAt?: Maybe<Scalars['Timestamp']['output']>;
  refundReason?: Maybe<Scalars['String']['output']>;
  status: TransactionStatusEnum;
  type: TransactionTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** By using this api you can get properties of merchant and merchant staff. */
  getAuthorizedApp?: Maybe<AuthorizedApp>;
  /** Use this mutation to get global settings. */
  getGlobalTaxSettings?: Maybe<GlobalTaxSettings>;
  /** Upload url for the specified image. */
  getImageUploadUrl: Scalars['String']['output'];
  getImportJobData: GetImportJobDataResponse;
  getImportJobDataList: GetLastImportJobDataResponseData;
  getLastImportJobData: GetLastImportJobDataResponse;
  /** By using this api you can get properties of merchant and merchant staff. */
  getMerchant: MerchantResponse;
  /** Using this api you can view all licenses owned by merchant. */
  getMerchantLicence: MerchantLicence;
  /** Using this api, you can view your sales channel. */
  getSalesChannel?: Maybe<SalesChannel>;
  getTimelineEntry: Scalars['String']['output'];
  getVideoUploadUrl: GetVideoUploadUrlResponse;
  /** Use this query to get abandoned checkouts. */
  listAbandonedCheckouts: CartPaginationResponse;
  listBranch: Array<Branch>;
  listCampaign: CampaignPaginationResponse;
  listCargoCompany: Array<CargoCompany>;
  /**
   * Using this api, you can view the categories of products.
   * Search applies to following fields: `name`
   */
  listCategory: Array<Category>;
  listCity: Array<City>;
  listCountry: Array<Country>;
  listCoupon: CouponPaginationResponse;
  listCustomer: CustomerPaginationResponse;
  listCustomerAttribute: Array<CustomerAttribute>;
  listDistrict: Array<District>;
  listGlobalTaxSettings: Array<GlobalTaxSettings>;
  listLanguage: Array<Language>;
  /** Using this api, you can view the payment features that a merchant has created for the app. */
  listMerchantAppPayment: MerchantAppPaymentPaginationResponse;
  listMerchantSettings: Array<MerchantSettings>;
  listOrder: OrderPaginationResponse;
  listOrderTag: Array<OrderTag>;
  listOrderTransactions: Array<PublicTransaction>;
  listPaymentGateway: Array<PaymentGateway>;
  listPriceList: Array<PriceList>;
  /**
   * Use this query to list products.
   * Search applies to following fields: `name` `variants.sku` `variants.barcodeList`
   *
   * Sort applies to following fields: `createdAt` `updatedAt` `name`
   */
  listProduct: ProductPaginationResponse;
  /** Use this query to list product attributes. */
  listProductAttribute: Array<ProductAttribute>;
  /**
   * Using this api, you can view the brands of products.
   * Search applies to following fields: `name`
   */
  listProductBrand: Array<ProductBrand>;
  listProductOptionSet: Array<ProductOptionSet>;
  listProductOrder: Array<ProductOrder>;
  listProductStockLocation: ProductStockLocationPaginationResponse;
  /** Using this api, you can view the tags of products. */
  listProductTag: Array<ProductTag>;
  /** Using this api, you can view the units of products. */
  listProductUnit: Array<ProductUnit>;
  /** Using this api, you can view the product volume discounts. */
  listProductVolumeDiscount: Array<ProductVolumeDiscount>;
  listSalesChannel: Array<SalesChannel>;
  listShippingSettings: Array<ShippingSettings>;
  listState: Array<State>;
  listStockLocation: Array<StockLocation>;
  listStorefront: Array<Storefront>;
  /** Use this query to list storefront javascript scripts by supplying the `storefrontId` input. */
  listStorefrontJSScript: Array<StorefrontJsScript>;
  /**
   * Use this query to list storefront policies by supplying the `StorefrontPolicyArgs` input.
   * Search applies to following fields: `name` `slug`
   */
  listStorefrontPolicy: Array<StorefrontPolicy>;
  listTaxSettings: Array<TaxSettings>;
  listTerminal: Array<Terminal>;
  listTown: Array<Town>;
  /** Using this api, you can view the variant types of products. */
  listVariantType: Array<VariantType>;
  /** Use this query to list the vendor. */
  listVendor: Array<Vendor>;
  /** Use this query to list active webhooks of your application. */
  listWebhook: Array<Webhook>;
  me?: Maybe<MeResponse>;
  /** Result(s) containing searched products. */
  searchProducts: ProductSearchResponse;
};


export type QueryGetImageUploadUrlArgs = {
  imageDir?: InputMaybe<Scalars['String']['input']>;
  imageId: Scalars['String']['input'];
};


export type QueryGetImportJobDataArgs = {
  importJobId: Scalars['String']['input'];
  importType: ImportTypeEnum;
};


export type QueryGetVideoUploadUrlArgs = {
  videoId: Scalars['String']['input'];
};


export type QueryListAbandonedCheckoutsArgs = {
  id?: InputMaybe<StringFilterInput>;
  input: ListAbandonedCartInput;
  lastActivityDate?: InputMaybe<DateFilterInput>;
  mailSendDate?: InputMaybe<DateFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListBranchArgs = {
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StringFilterInput>;
  salesChannelId?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListCampaignArgs = {
  canCombineWithOtherCampaigns?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<CampaignTypeEnumFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListCargoCompanyArgs = {
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryListCategoryArgs = {
  categoryPath?: InputMaybe<CategoryPathFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListCityArgs = {
  countryId?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  stateId: StringFilterInput;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListCountryArgs = {
  id?: InputMaybe<StringFilterInput>;
  iso2?: InputMaybe<StringFilterInput>;
  iso3?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListCouponArgs = {
  campaignId?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListCustomerArgs = {
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  merchantId?: InputMaybe<StringFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  phone?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListCustomerAttributeArgs = {
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryListDistrictArgs = {
  cityId: StringFilterInput;
  countryId?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  stateId?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListGlobalTaxSettingsArgs = {
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  storefrontId?: InputMaybe<StringFilterInput>;
};


export type QueryListLanguageArgs = {
  id?: InputMaybe<StringFilterInput>;
};


export type QueryListMerchantAppPaymentArgs = {
  id?: InputMaybe<StringFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryListMerchantSettingsArgs = {
  id?: InputMaybe<StringFilterInput>;
  merchantId?: InputMaybe<StringFilterInput>;
};


export type QueryListOrderArgs = {
  branchId?: InputMaybe<StringFilterInput>;
  branchSessionId?: InputMaybe<StringFilterInput>;
  closedAt?: InputMaybe<DateFilterInput>;
  customerEmail?: InputMaybe<StringFilterInput>;
  customerId?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  invoicesStoreAppId?: InputMaybe<StringFilterInput>;
  orderNumber?: InputMaybe<StringFilterInput>;
  orderPackageStatus?: InputMaybe<OrderPackageStatusEnumInputFilter>;
  orderPaymentStatus?: InputMaybe<OrderPaymentStatusEnumInputFilter>;
  orderTagIds?: InputMaybe<StringFilterInput>;
  orderedAt?: InputMaybe<DateFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  paymentMethodType?: InputMaybe<OrderPaymentMethodEnumFilterInput>;
  salesChannelId?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  shippingMethod?: InputMaybe<OrderShippingMethodEnumFilterInput>;
  sort?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OrderStatusEnumInputFilter>;
  stockLocationId?: InputMaybe<StringFilterInput>;
  terminalId?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListOrderTagArgs = {
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListOrderTransactionsArgs = {
  orderId: Scalars['String']['input'];
};


export type QueryListPaymentGatewayArgs = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  transactionAmount?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryListPriceListArgs = {
  id?: InputMaybe<StringFilterInput>;
};


export type QueryListProductArgs = {
  attributeId?: InputMaybe<ProductAttributeFilterInput>;
  barcodeList?: InputMaybe<StringFilterInput>;
  brandId?: InputMaybe<StringFilterInput>;
  bundleProductsProductId?: InputMaybe<StringFilterInput>;
  categoryIds?: InputMaybe<CategoryFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<StringFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  salesChannelIds?: InputMaybe<StringFilterInput>;
  sku?: InputMaybe<StringFilterInput>;
  sort?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<StringFilterInput>;
  variantStockLocationId?: InputMaybe<StringFilterInput>;
  variantTypeId?: InputMaybe<StringFilterInput>;
  vendorId?: InputMaybe<StringFilterInput>;
};


export type QueryListProductAttributeArgs = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListProductBrandArgs = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListProductOptionSetArgs = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListProductOrderArgs = {
  brandIds?: InputMaybe<StringFilterInput>;
  categoryIds?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListProductStockLocationArgs = {
  id?: InputMaybe<StringFilterInput>;
  pagination?: InputMaybe<PaginationInput>;
  productId?: InputMaybe<StringFilterInput>;
  sort?: InputMaybe<Scalars['String']['input']>;
  stockLocationId?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
  variantId?: InputMaybe<StringFilterInput>;
};


export type QueryListProductTagArgs = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListProductUnitArgs = {
  id?: InputMaybe<StringFilterInput>;
};


export type QueryListProductVolumeDiscountArgs = {
  id?: InputMaybe<StringFilterInput>;
};


export type QueryListSalesChannelArgs = {
  id?: InputMaybe<StringFilterInput>;
};


export type QueryListStateArgs = {
  countryId: StringFilterInput;
  id?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListStockLocationArgs = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListStorefrontArgs = {
  id?: InputMaybe<StringFilterInput>;
  salesChannelId?: InputMaybe<StringFilterInput>;
};


export type QueryListStorefrontJsScriptArgs = {
  storefrontId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListStorefrontPolicyArgs = {
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  language?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListTaxSettingsArgs = {
  countryId?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryListTerminalArgs = {
  branchId?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListTownArgs = {
  districtId: StringFilterInput;
  id?: InputMaybe<StringFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListVariantTypeArgs = {
  id?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QueryListVendorArgs = {
  id?: InputMaybe<StringFilterInput>;
  includeDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  merchantId?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateFilterInput>;
};


export type QuerySearchProductsArgs = {
  input: SearchInput;
};

export enum SfAnalyticsTrafficSourceEnum {
  AdsOther = 'ADS_OTHER',
  Affiliate = 'AFFILIATE',
  BingAds = 'BING_ADS',
  Direct = 'DIRECT',
  Display = 'DISPLAY',
  Email = 'EMAIL',
  FacebookAds = 'FACEBOOK_ADS',
  GoogleAds = 'GOOGLE_ADS',
  InstagramAds = 'INSTAGRAM_ADS',
  OrganicSearch = 'ORGANIC_SEARCH',
  Other = 'OTHER',
  PaidTraffic = 'PAID_TRAFFIC',
  Referral = 'REFERRAL',
  Social = 'SOCIAL'
}

export type SalesChannel = {
  __typename?: 'SalesChannel';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The sales channel name field. */
  name: Scalars['String']['output'];
  /** The sales channel payment gateway field. */
  paymentGateways?: Maybe<Array<SalesChannelPaymentGateway>>;
  /** The sales channel priceList field. */
  priceListId?: Maybe<Scalars['String']['output']>;
  /** The sales channel stock locations field. */
  stockLocations?: Maybe<Array<SalesChannelStockLocation>>;
  type: SalesChannelTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type SalesChannelInput = {
  /** The sales channel name field. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The sales channel priceList field. */
  priceListId?: InputMaybe<Scalars['String']['input']>;
  /** The sales channel stock locations field. */
  stockLocations: Array<SalesChannelStockLocationInput>;
};

export type SalesChannelPaymentGateway = {
  __typename?: 'SalesChannelPaymentGateway';
  id: Scalars['String']['output'];
  /** The field where the Sales Channel Stock Position order is kept. */
  order: Scalars['Float']['output'];
};

export enum SalesChannelStatusEnum {
  Hidden = 'HIDDEN',
  Passive = 'PASSIVE',
  Visible = 'VISIBLE'
}

export type SalesChannelStockLocation = {
  __typename?: 'SalesChannelStockLocation';
  id: Scalars['String']['output'];
  /** The field where the Sales Channel Stock Position order is kept. */
  order: Scalars['Float']['output'];
};

export type SalesChannelStockLocationInput = {
  id: Scalars['String']['input'];
  /** The field where the Sales Channel Stock Position order is kept. */
  order: Scalars['Float']['input'];
};

/** Sales Channel Type */
export enum SalesChannelTypeEnum {
  Admin = 'ADMIN',
  App = 'APP',
  B2BStorefront = 'B2B_STOREFRONT',
  Facebook = 'FACEBOOK',
  Google = 'GOOGLE',
  Pos = 'POS',
  Storefront = 'STOREFRONT',
  StorefrontApp = 'STOREFRONT_APP'
}

export type SaveStockLocationsInput = {
  productStockLocationInputs?: InputMaybe<Array<ProductStockLocationInput>>;
};

export type SaveVariantPricesInput = {
  priceListId?: InputMaybe<Scalars['String']['input']>;
  /** List of variants to be updated. Maximum 3000 entries allowed. */
  variantPriceInputs: Array<VariantPriceInput>;
};

export type SearchCategory = {
  __typename?: 'SearchCategory';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Array<SearchCategoryPath>;
  slug?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<SearchCategoryTranslation>>;
};

export type SearchCategoryPath = {
  __typename?: 'SearchCategoryPath';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<SearchCategoryTranslation>>;
};

export type SearchCategoryTranslation = {
  __typename?: 'SearchCategoryTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type SearchHtmlMetaData = {
  __typename?: 'SearchHTMLMetaData';
  canonicals?: Maybe<Array<Scalars['String']['output']>>;
  description?: Maybe<Scalars['String']['output']>;
  disableIndex?: Maybe<Scalars['Boolean']['output']>;
  metadataOverrides?: Maybe<Array<SearchHtmlMetaDataOverride>>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  redirectTo?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  translations?: Maybe<Array<HtmlMetaDataTranslation>>;
};

export type SearchHtmlMetaDataOverride = {
  __typename?: 'SearchHTMLMetaDataOverride';
  description: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  pageTitle: Scalars['String']['output'];
  storefrontId?: Maybe<Scalars['String']['output']>;
  storefrontRegionId?: Maybe<Scalars['String']['output']>;
};

export type SearchInput = {
  /** List of barcodes to search. */
  barcodeList?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Pagination input */
  pagination?: InputMaybe<PaginationInput>;
  /** List of product ids to search. */
  productIdList?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Query string to search products. */
  query?: InputMaybe<Scalars['String']['input']>;
  /** List of SKUs to search. */
  skuList?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SearchProduct = {
  __typename?: 'SearchProduct';
  attributes?: Maybe<Array<SearchProductAttributeValue>>;
  averageRating?: Maybe<Scalars['Float']['output']>;
  baseUnit?: Maybe<SearchProductProductBaseUnit>;
  brand?: Maybe<SearchProductBrand>;
  campaignOffers?: Maybe<Array<SearchProductCampaignOffer>>;
  campaigns?: Maybe<Array<SearchProductCampaign>>;
  categories?: Maybe<Array<SearchCategory>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  customerReviewSummaries?: Maybe<ProductSearchCustomerReviewSummaries>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dynamicPriceListIds?: Maybe<Array<Scalars['String']['output']>>;
  groupVariantsByVariantTypeId?: Maybe<Scalars['String']['output']>;
  hiddenSalesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  metaData?: Maybe<SearchHtmlMetaData>;
  name: Scalars['String']['output'];
  productGroup?: Maybe<SearchProductGroup>;
  productOptionSetId?: Maybe<Scalars['String']['output']>;
  productVariantTypes: Array<SearchProductVariantType>;
  productVolumeDiscountId?: Maybe<Scalars['String']['output']>;
  reviewCount?: Maybe<Scalars['Float']['output']>;
  salesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  salesChannels?: Maybe<Array<SearchProductSalesChannel>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  stars?: Maybe<Array<SearchProductCustomerReviewStar>>;
  tags?: Maybe<Array<SearchProductTag>>;
  translations?: Maybe<Array<ProductTranslation>>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  variants: Array<SearchVariant>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type SearchProductAttribute = {
  __typename?: 'SearchProductAttribute';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  tableTemplate?: Maybe<SearchProductAttributeTableTemplate>;
  translations?: Maybe<Array<ProductAttributeTranslation>>;
  type: Scalars['String']['output'];
};

export type SearchProductAttributeOption = {
  __typename?: 'SearchProductAttributeOption';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SearchProductAttributeTableCellData = {
  __typename?: 'SearchProductAttributeTableCellData';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type SearchProductAttributeTableTemplate = {
  __typename?: 'SearchProductAttributeTableTemplate';
  columns: Array<SearchProductAttributeTableCellData>;
  rows: Array<SearchProductAttributeTableCellData>;
};

export type SearchProductAttributeValue = {
  __typename?: 'SearchProductAttributeValue';
  imageIds?: Maybe<Array<Scalars['String']['output']>>;
  productAttribute?: Maybe<SearchProductAttribute>;
  productAttributeOption?: Maybe<SearchProductAttributeOption>;
  value?: Maybe<Scalars['String']['output']>;
};

export type SearchProductBrand = {
  __typename?: 'SearchProductBrand';
  id: Scalars['String']['output'];
  imageId?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<SearchProductBrandTranslation>>;
};

export type SearchProductBrandTranslation = {
  __typename?: 'SearchProductBrandTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
};

export type SearchProductCampaign = {
  __typename?: 'SearchProductCampaign';
  applicablePrice?: Maybe<CampaignApplicablePriceEnum>;
  applyCampaignToProductPrice?: Maybe<Scalars['Boolean']['output']>;
  buyXThenGetY?: Maybe<SearchProductCampaignBuyXThenGetY>;
  currencyCodes?: Maybe<Array<Scalars['String']['output']>>;
  dateRange?: Maybe<SearchProductCampaignDateRangeField>;
  fixedDiscount?: Maybe<SearchProductCampaignFixedDiscount>;
  id?: Maybe<Scalars['String']['output']>;
  includeDiscountedProducts?: Maybe<Scalars['Boolean']['output']>;
  salesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  tieredDiscount?: Maybe<SearchProductCampaignTieredDiscount>;
  title: Scalars['String']['output'];
  type: CampaignTypeEnum;
};

export type SearchProductCampaignBuyX = {
  __typename?: 'SearchProductCampaignBuyX';
  amount: Scalars['Float']['output'];
  applyByQuantity: Scalars['Boolean']['output'];
  filter?: Maybe<SearchProductCampaignFilter>;
};

export type SearchProductCampaignBuyXThenGetY = {
  __typename?: 'SearchProductCampaignBuyXThenGetY';
  buyX: SearchProductCampaignBuyX;
  getY: SearchProductCampaignGetY;
  maxUsagePerOrder?: Maybe<Scalars['Float']['output']>;
};

export type SearchProductCampaignDateRangeField = {
  __typename?: 'SearchProductCampaignDateRangeField';
  end?: Maybe<Scalars['Timestamp']['output']>;
  start?: Maybe<Scalars['Timestamp']['output']>;
};

export type SearchProductCampaignFilter = {
  __typename?: 'SearchProductCampaignFilter';
  idList: Array<Scalars['String']['output']>;
  type: CampaignFilterTypeEnum;
};

export type SearchProductCampaignFixedDiscount = {
  __typename?: 'SearchProductCampaignFixedDiscount';
  amount?: Maybe<Scalars['Float']['output']>;
  filters?: Maybe<Array<SearchProductCampaignFilter>>;
  lineItemQuantityRange?: Maybe<SearchProductCampaignMinMaxRangeField>;
  priceRange?: Maybe<SearchProductCampaignMinMaxRangeField>;
  shouldMatchAllConditions?: Maybe<Scalars['Boolean']['output']>;
};

export type SearchProductCampaignGetY = {
  __typename?: 'SearchProductCampaignGetY';
  amount: Scalars['Float']['output'];
  automaticallyAddItemToCart?: Maybe<Scalars['Boolean']['output']>;
  discountRatio: Scalars['Float']['output'];
  filter?: Maybe<SearchProductCampaignFilter>;
};

export type SearchProductCampaignMinMaxRangeField = {
  __typename?: 'SearchProductCampaignMinMaxRangeField';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type SearchProductCampaignOffer = {
  __typename?: 'SearchProductCampaignOffer';
  availableSalesChannelIds?: Maybe<Array<Scalars['String']['output']>>;
  currencyCodes?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
};

export type SearchProductCampaignPrice = {
  __typename?: 'SearchProductCampaignPrice';
  campaignId?: Maybe<Scalars['String']['output']>;
  campaignPrice?: Maybe<Scalars['Float']['output']>;
};

export type SearchProductCampaignTieredDiscount = {
  __typename?: 'SearchProductCampaignTieredDiscount';
  filters?: Maybe<Array<SearchProductCampaignFilter>>;
  isApplyByCartAmount?: Maybe<Scalars['Boolean']['output']>;
  rules: Array<SearchProductCampaignTieredDiscountRule>;
  shouldMatchAllConditions?: Maybe<Scalars['Boolean']['output']>;
};

export type SearchProductCampaignTieredDiscountRule = {
  __typename?: 'SearchProductCampaignTieredDiscountRule';
  amount: Scalars['Float']['output'];
  lineItemQuantityRange?: Maybe<SearchProductCampaignMinMaxRangeField>;
  priceRange?: Maybe<SearchProductCampaignMinMaxRangeField>;
};

export type SearchProductCustomerReviewStar = {
  __typename?: 'SearchProductCustomerReviewStar';
  count: Scalars['Float']['output'];
  star: Scalars['Float']['output'];
};

export type SearchProductGroup = {
  __typename?: 'SearchProductGroup';
  groupKey: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<SearchProductGroupOrder>;
  translations?: Maybe<Array<SearchProductGroupTranslation>>;
  values: Array<SearchProductGroupValueType>;
};

export type SearchProductGroupOrder = {
  __typename?: 'SearchProductGroupOrder';
  orderAttributeId?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type SearchProductGroupTranslation = {
  __typename?: 'SearchProductGroupTranslation';
  locale: Scalars['String']['output'];
  values?: Maybe<Array<SearchProductGroupValueTranslation>>;
};

export type SearchProductGroupValueTranslation = {
  __typename?: 'SearchProductGroupValueTranslation';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type SearchProductGroupValueType = {
  __typename?: 'SearchProductGroupValueType';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type SearchProductImage = {
  __typename?: 'SearchProductImage';
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isMain?: Maybe<Scalars['Boolean']['output']>;
  isVideo?: Maybe<Scalars['Boolean']['output']>;
  order: Scalars['Float']['output'];
};

export type SearchProductPrice = {
  __typename?: 'SearchProductPrice';
  buyPrice?: Maybe<Scalars['Float']['output']>;
  campaignPrice?: Maybe<SearchProductCampaignPrice>;
  currency?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  discountPrice?: Maybe<Scalars['Float']['output']>;
  priceListId?: Maybe<Scalars['String']['output']>;
  sellPrice: Scalars['Float']['output'];
  unitPrice?: Maybe<Scalars['Float']['output']>;
};

export type SearchProductProductBaseUnit = {
  __typename?: 'SearchProductProductBaseUnit';
  baseAmount: Scalars['Float']['output'];
  type: ProductUnitTypeEnum;
  unit?: Maybe<SearchProductProductUnit>;
};

export type SearchProductProductUnit = {
  __typename?: 'SearchProductProductUnit';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  translations?: Maybe<Array<ProductUnitTranslation>>;
};

export type SearchProductSalesChannel = {
  __typename?: 'SearchProductSalesChannel';
  id: Scalars['String']['output'];
  maxQuantityPerCart?: Maybe<Scalars['Float']['output']>;
  minQuantityPerCart?: Maybe<Scalars['Float']['output']>;
  productVolumeDiscountId?: Maybe<Scalars['String']['output']>;
  quantitySettings?: Maybe<Array<Scalars['Float']['output']>>;
  status: SalesChannelStatusEnum;
};

export type SearchProductStockLocation = {
  __typename?: 'SearchProductStockLocation';
  stockCount: Scalars['Float']['output'];
  stockLocationId: Scalars['String']['output'];
};

export type SearchProductTag = {
  __typename?: 'SearchProductTag';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  translations?: Maybe<Array<ProductTagTranslation>>;
};

export type SearchProductVariantType = {
  __typename?: 'SearchProductVariantType';
  order: Scalars['Float']['output'];
  variantType: SearchVariantType;
  variantValueIds: Array<Scalars['String']['output']>;
};

export type SearchVariant = {
  __typename?: 'SearchVariant';
  attributes?: Maybe<Array<SearchProductAttributeValue>>;
  barcodeList?: Maybe<Array<Scalars['String']['output']>>;
  baseBundlePrices?: Maybe<Array<SearchProductPrice>>;
  bundleSettings?: Maybe<BundleSettingsModel>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  images?: Maybe<Array<SearchProductImage>>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  prices?: Maybe<Array<SearchProductPrice>>;
  sellIfOutOfStock?: Maybe<Scalars['Boolean']['output']>;
  sku?: Maybe<Scalars['String']['output']>;
  stocks?: Maybe<Array<SearchProductStockLocation>>;
  unit?: Maybe<VariantUnitModel>;
  variantValues?: Maybe<Array<SearchVariationValueRelation>>;
  weight?: Maybe<Scalars['Float']['output']>;
};

export type SearchVariantType = {
  __typename?: 'SearchVariantType';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  selectionType: Scalars['String']['output'];
  translations?: Maybe<Array<VariantTypeTranslation>>;
  values: Array<SearchVariantValue>;
};

export type SearchVariantValue = {
  __typename?: 'SearchVariantValue';
  colorCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  thumbnailImageId?: Maybe<Scalars['String']['output']>;
};

export type SearchVariationValueRelation = {
  __typename?: 'SearchVariationValueRelation';
  variantTypeId: Scalars['String']['output'];
  variantValueId: Scalars['String']['output'];
};

export type ShippingSettings = {
  __typename?: 'ShippingSettings';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  isPassive?: Maybe<Scalars['Boolean']['output']>;
  localDeliverySettings?: Maybe<LocalDeliverySettings>;
  order?: Maybe<Scalars['Float']['output']>;
  salesChannelId: Scalars['String']['output'];
  shippingZones: Array<ShippingZone>;
  stockLocations?: Maybe<Array<ShippingSettingsStockLocation>>;
  type: ShippingSettingsType;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  zoneName: Scalars['String']['output'];
  zoneRate: Array<ShippingZoneRate>;
};

export type ShippingSettingsStockLocation = {
  __typename?: 'ShippingSettingsStockLocation';
  order: Scalars['Float']['output'];
  stockLocationId: Scalars['String']['output'];
};

/** ShippingSettingsType */
export enum ShippingSettingsType {
  LocalDelivery = 'LOCAL_DELIVERY',
  Shipment = 'SHIPMENT'
}

export type ShippingZone = {
  __typename?: 'ShippingZone';
  countryId: Scalars['String']['output'];
  postalCodes?: Maybe<Array<Scalars['String']['output']>>;
  states?: Maybe<Array<ShippingZoneState>>;
};

export type ShippingZoneCity = {
  __typename?: 'ShippingZoneCity';
  districts?: Maybe<Array<ShippingZoneDistrict>>;
  id: Scalars['String']['output'];
};

export type ShippingZoneDistrict = {
  __typename?: 'ShippingZoneDistrict';
  id: Scalars['String']['output'];
  regions: Array<ShippingZoneRegion>;
};

export type ShippingZoneRate = {
  __typename?: 'ShippingZoneRate';
  condition?: Maybe<ShippingZoneRateCondition>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  priceListId?: Maybe<Scalars['String']['output']>;
  rateName: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ShippingZoneRateCondition = {
  __typename?: 'ShippingZoneRateCondition';
  maxAmount?: Maybe<Scalars['Float']['output']>;
  minAmount?: Maybe<Scalars['Float']['output']>;
  type: ShippingZoneRateConditionType;
};

/** ShippingZoneRateConditionType */
export enum ShippingZoneRateConditionType {
  BasedOnItemWeight = 'BASED_ON_ITEM_WEIGHT',
  BasedOnOrderPrice = 'BASED_ON_ORDER_PRICE'
}

export type ShippingZoneRegion = {
  __typename?: 'ShippingZoneRegion';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type ShippingZoneState = {
  __typename?: 'ShippingZoneState';
  cities?: Maybe<Array<ShippingZoneCity>>;
  id: Scalars['String']['output'];
  postalCodes?: Maybe<Array<Scalars['String']['output']>>;
};

export type SimpleCategory = {
  __typename?: 'SimpleCategory';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** It is the name of the category in which the product is located. */
  name: Scalars['String']['output'];
  /** It is the id of the superclass category of the category. */
  parentId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type SimpleProductBrand = {
  __typename?: 'SimpleProductBrand';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The name of the product's brand. */
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type SimpleProductTag = {
  __typename?: 'SimpleProductTag';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The name of the product's tag. */
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

/** Timeline Source Types */
export enum SourceTypeEnum {
  Customer = 'CUSTOMER',
  Email = 'EMAIL',
  GiftCard = 'GIFT_CARD',
  Inventory = 'INVENTORY',
  Merchant = 'MERCHANT',
  Order = 'ORDER',
  Partner = 'PARTNER',
  Product = 'PRODUCT',
  Staff = 'STAFF',
  Storefront = 'STOREFRONT'
}

export type State = {
  __typename?: 'State';
  /** ID indicating which country the state belongs to. */
  countryId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Shows spellings of state name in different languages. */
  locationTranslations?: Maybe<LocationTranslations>;
  /** State's name. */
  name: Scalars['String']['output'];
  /** Indicates the name of the state in the local language. */
  native?: Maybe<Scalars['String']['output']>;
  /** The two-letter state code corresponding to the state. */
  stateCode?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type StockLocation = {
  __typename?: 'StockLocation';
  /** It is the address information of the stock location. */
  address?: Maybe<StockLocationAddress>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** It is the delivery time of the stock location. */
  deliveryTime?: Maybe<StockLocationDeliveryTimeEnum>;
  /** It is the description of the stock location. */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isRemindOutOfStockEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** It is the name of the stock location. */
  name: Scalars['String']['output'];
  outOfStockMailList?: Maybe<Array<Scalars['String']['output']>>;
  /** Translations for the stock location. */
  translations?: Maybe<Array<StockLocationTranslation>>;
  /** It is the type enum of the stock location. */
  type?: Maybe<StockLocationTypeEnum>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type StockLocationAddress = {
  __typename?: 'StockLocationAddress';
  /** It is the full address of the stock location. */
  address?: Maybe<Scalars['String']['output']>;
  /** It is the city information of the address. */
  city?: Maybe<StockLocationAddressCity>;
  /** It is the country information of the address. */
  country?: Maybe<StockLocationAddressCountry>;
  /** It is the district information of the address. */
  district?: Maybe<StockLocationAddressDistrict>;
  /** It is the phone number of the address. */
  phone?: Maybe<Scalars['String']['output']>;
  /** It is the postal code of the address. */
  postalCode?: Maybe<Scalars['String']['output']>;
  /** It is the state information of the address. */
  state?: Maybe<StockLocationAddressState>;
};

export type StockLocationAddressCity = {
  __typename?: 'StockLocationAddressCity';
  /** It is the code of the city of the address. */
  code?: Maybe<Scalars['String']['output']>;
  /** It is the id of the city of the address. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the name of the city of the address. */
  name: Scalars['String']['output'];
};

export type StockLocationAddressCountry = {
  __typename?: 'StockLocationAddressCountry';
  /** It is the code of the country of the address. */
  code?: Maybe<Scalars['String']['output']>;
  /** It is the id of the country of the address. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the code of the country of the address. */
  iso2?: Maybe<Scalars['String']['output']>;
  /** It is the code of the country of the address. */
  iso3?: Maybe<Scalars['String']['output']>;
  /** It is the name of the country of the address. */
  name: Scalars['String']['output'];
};

export type StockLocationAddressDistrict = {
  __typename?: 'StockLocationAddressDistrict';
  /** It is the code of the district of the address. */
  code?: Maybe<Scalars['String']['output']>;
  /** It is the id of the district of the address. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the name of the district of the address. */
  name?: Maybe<Scalars['String']['output']>;
};

export type StockLocationAddressState = {
  __typename?: 'StockLocationAddressState';
  /** It is the code of the state of the address. */
  code?: Maybe<Scalars['String']['output']>;
  /** It is the id of the state of the address. */
  id?: Maybe<Scalars['String']['output']>;
  /** It is the name of the state of the address. */
  name?: Maybe<Scalars['String']['output']>;
};

/** Stock Location Delivery Time Types */
export enum StockLocationDeliveryTimeEnum {
  TwoInFourDays = 'TWO_IN_FOUR_DAYS',
  WithinFourHours = 'WITHIN_FOUR_HOURS',
  WithinOneHour = 'WITHIN_ONE_HOUR',
  WithinPlusFiveDays = 'WITHIN_PLUS_FIVE_DAYS',
  WithinTwentyFourHours = 'WITHIN_TWENTY_FOUR_HOURS',
  WithinTwoHours = 'WITHIN_TWO_HOURS'
}

export type StockLocationTranslation = {
  __typename?: 'StockLocationTranslation';
  /** It is the description information of the translation. */
  description?: Maybe<Scalars['String']['output']>;
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
};

/** Stock Location Types */
export enum StockLocationTypeEnum {
  Physical = 'PHYSICAL',
  Virtual = 'VIRTUAL'
}

export type Storefront = {
  __typename?: 'Storefront';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** The storefront's name. */
  name: Scalars['String']['output'];
  /** The storefront's name. */
  routings: Array<StorefrontRouting>;
  salesChannelId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type StorefrontDynamicCurrencySettings = {
  __typename?: 'StorefrontDynamicCurrencySettings';
  /** One of '.x0' | '.x9' | '.00' | '.90' | '.99' | '0.00' | '9.90' */
  roundingFormat?: Maybe<Scalars['String']['output']>;
  targetCurrencyCode: Scalars['String']['output'];
  targetCurrencySymbol?: Maybe<Scalars['String']['output']>;
};

export type StorefrontJsScript = {
  __typename?: 'StorefrontJSScript';
  /** The id of the logged in application. */
  authorizedAppId?: Maybe<Scalars['String']['output']>;
  /** The type of javascript script content. */
  contentType?: Maybe<StorefrontJsScriptContentTypeEnum>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** The type of javascript script content. */
  fileName?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Shows the availability status of the storefront. */
  isActive: Scalars['Boolean']['output'];
  /** Indicates if the script has a high priority and should be executed before others. */
  isHighPriority?: Maybe<Scalars['Boolean']['output']>;
  /** The storefront javascript script's name. */
  name: Scalars['String']['output'];
  /** The order of the script to be executed. */
  order?: Maybe<Scalars['Float']['output']>;
  /** The storefront javascript script's content. */
  scriptContent: Scalars['String']['output'];
  /** The store app's id. */
  storeAppId?: Maybe<Scalars['String']['output']>;
  /** The storefront's id. */
  storefrontId: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export enum StorefrontJsScriptContentTypeEnum {
  File = 'FILE',
  Script = 'SCRIPT'
}

export type StorefrontJsScriptInput = {
  contentType: StorefrontJsScriptContentTypeEnum;
  fileName?: InputMaybe<Scalars['String']['input']>;
  isHighPriority?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  scriptContent: Scalars['String']['input'];
  storefrontId: Scalars['String']['input'];
};

export type StorefrontPolicy = {
  __typename?: 'StorefrontPolicy';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currentVersionId: Scalars['String']['output'];
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  locale: Scalars['String']['output'];
  name: Scalars['String']['output'];
  sendEmail: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  storefrontId: Scalars['String']['output'];
  storefrontRoutings: Array<StorefrontPolicyRouting>;
  type: StorefrontPolicyTypeEnum;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type StorefrontPolicyInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  locale: Scalars['String']['input'];
  name: Scalars['String']['input'];
  sendEmail: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
  storefrontId: Scalars['String']['input'];
  storefrontRoutings: Array<StorefrontPolicyRoutingInput>;
  type: StorefrontPolicyTypeEnum;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type StorefrontPolicyRouting = {
  __typename?: 'StorefrontPolicyRouting';
  storefrontId: Scalars['String']['output'];
  storefrontRoutingId: Scalars['String']['output'];
};

export type StorefrontPolicyRoutingInput = {
  storefrontId: Scalars['String']['input'];
  storefrontRoutingId: Scalars['String']['input'];
};

export enum StorefrontPolicyTypeEnum {
  Imprint = 'IMPRINT',
  Other = 'OTHER',
  PrivacyPolicy = 'PRIVACY_POLICY',
  ReturnPolicy = 'RETURN_POLICY',
  ShippingPolicy = 'SHIPPING_POLICY',
  TermsOfService = 'TERMS_OF_SERVICE'
}

export type StorefrontRouting = {
  __typename?: 'StorefrontRouting';
  countryCodes?: Maybe<Array<Scalars['String']['output']>>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  currencyCode?: Maybe<Scalars['String']['output']>;
  currencySymbol?: Maybe<Scalars['String']['output']>;
  deleted: Scalars['Boolean']['output'];
  domain?: Maybe<Scalars['String']['output']>;
  dynamicCurrencySettings?: Maybe<StorefrontDynamicCurrencySettings>;
  id: Scalars['ID']['output'];
  locale: Scalars['String']['output'];
  path?: Maybe<Scalars['String']['output']>;
  priceListId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type StringFilterInput = {
  /** `equal`. The filter used for equality. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Returns a boolean indicating whether a specified value is in an array. */
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * It allows using regex code in queries.
   * The following example matches all documents where the name field is like "%AAA":
   * :::note
   * Example usage: merchantId: { like: AAA }.
   * :::
   */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not equal`. The filter used for not equality. */
  ne?: InputMaybe<Scalars['String']['input']>;
  /** Returns a boolean indicating whether a specified value is not in an array. */
  nin?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum SubscriptionCodeEnum {
  Custom = 'CUSTOM',
  Extension = 'EXTENSION',
  Freemium = 'FREEMIUM',
  Grow = 'GROW',
  MarketingCore = 'MARKETING_CORE',
  MarketingFree = 'MARKETING_FREE',
  MarketingPro = 'MARKETING_PRO',
  OneTime = 'ONE_TIME',
  Premium = 'PREMIUM',
  Scale = 'SCALE',
  ScalePlus = 'SCALE_PLUS',
  Start = 'START',
  Trial = 'TRIAL'
}

export enum SubscriptionPeriodEnum {
  Monthly = 'MONTHLY',
  OneTime = 'ONE_TIME',
  Yearly = 'YEARLY'
}

export enum SubscriptionPriceCurrencyEnum {
  Eur = 'EUR',
  Try = 'TRY',
  Usd = 'USD'
}

export type TaxSettings = {
  __typename?: 'TaxSettings';
  countryId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  giftPackageTaxRates?: Maybe<Array<TaxSettingsGiftPackageTaxRate>>;
  id: Scalars['ID']['output'];
  productOverrides?: Maybe<Array<TaxSettingsProductOverride>>;
  rates?: Maybe<Array<TaxSettingsRate>>;
  shippingTaxRates?: Maybe<Array<TaxSettingsShippingTaxRate>>;
  taxRate: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type TaxSettingsGiftPackageTaxRate = {
  __typename?: 'TaxSettingsGiftPackageTaxRate';
  stateId?: Maybe<Scalars['String']['output']>;
  taxRate: Scalars['Float']['output'];
};

export type TaxSettingsGiftPackageTaxRateInput = {
  stateId?: InputMaybe<Scalars['String']['input']>;
  taxRate: Scalars['Float']['input'];
};

export type TaxSettingsInput = {
  countryId: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  giftPackageTaxRates?: InputMaybe<Array<TaxSettingsGiftPackageTaxRateInput>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  productOverrides: Array<TaxSettingsProductOverrideInput>;
  rates?: InputMaybe<Array<TaxSettingsRateInput>>;
  shippingTaxRates?: InputMaybe<Array<TaxSettingsShippingTaxRateInput>>;
  taxRate: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type TaxSettingsProductOverride = {
  __typename?: 'TaxSettingsProductOverride';
  productTagIds: Array<Scalars['String']['output']>;
  stateId?: Maybe<Scalars['String']['output']>;
  taxRate: Scalars['Float']['output'];
};

export type TaxSettingsProductOverrideInput = {
  productTagIds: Array<Scalars['String']['input']>;
  stateId?: InputMaybe<Scalars['String']['input']>;
  taxRate: Scalars['Float']['input'];
};

export type TaxSettingsRate = {
  __typename?: 'TaxSettingsRate';
  stateId: Scalars['String']['output'];
  taxRate: Scalars['Float']['output'];
};

export type TaxSettingsRateInput = {
  stateId: Scalars['String']['input'];
  taxRate: Scalars['Float']['input'];
};

export type TaxSettingsShippingTaxRate = {
  __typename?: 'TaxSettingsShippingTaxRate';
  stateId?: Maybe<Scalars['String']['output']>;
  taxRate: Scalars['Float']['output'];
};

export type TaxSettingsShippingTaxRateInput = {
  stateId?: InputMaybe<Scalars['String']['input']>;
  taxRate: Scalars['Float']['input'];
};

export type Terminal = {
  __typename?: 'Terminal';
  branchId: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type TieredDiscountInput = {
  filters?: InputMaybe<Array<CampaignFilterInput>>;
  isApplyByCartAmount?: InputMaybe<Scalars['Boolean']['input']>;
  rules: Array<TieredDiscountRuleInput>;
  shouldMatchAllConditions?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TieredDiscountRuleInput = {
  amount: Scalars['Float']['input'];
  lineItemQuantityRange?: InputMaybe<CampaignMinMaxRangeFieldInput>;
  priceRange?: InputMaybe<CampaignMinMaxRangeFieldInput>;
};

export type TimelineInput = {
  /** The message you want to add */
  message: Scalars['String']['input'];
  /** Indicates which source the message added to the timeline belongs to. For example, if a message is added to the timeline for an order, sourceId is the id of the order. The same is true for the customer. */
  sourceId: Scalars['String']['input'];
  /** The message source type you want to add. */
  sourceType: SourceTypeEnum;
};

export type Town = {
  __typename?: 'Town';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** ID indicating which district the town belongs to. */
  districtId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Town's name. */
  name: Scalars['String']['output'];
  /** Specifies the order of towns. */
  order?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type TrackingInfo = {
  __typename?: 'TrackingInfo';
  /** It is the barcode of the order package. */
  barcode?: Maybe<Scalars['String']['output']>;
  /** It is the name of the cargo company. */
  cargoCompany?: Maybe<Scalars['String']['output']>;
  /** It is the key of the cargo company which can be retrieved via listCargoCompany query. */
  cargoCompanyId?: Maybe<Scalars['String']['output']>;
  /** Indicates whether the notification is sent to the customer after the cargo is delivered. **isSendNotification** returns true if the notification is sent. */
  isSendNotification?: Maybe<Scalars['Boolean']['output']>;
  /** It is the tracking link of the order package. */
  trackingLink?: Maybe<Scalars['String']['output']>;
  /** It is the tracking number of the order package. */
  trackingNumber?: Maybe<Scalars['String']['output']>;
};

export type TrackingInfoDetailInput = {
  /** It is the barcode of the order package. */
  barcode?: InputMaybe<Scalars['String']['input']>;
  /** It is the name of the cargo company. */
  cargoCompany?: InputMaybe<Scalars['String']['input']>;
  /** It is the key of the cargo company which can be retrieved via listCargoCompany query. */
  cargoCompanyId?: InputMaybe<Scalars['String']['input']>;
  /** If the customer is to be informed after the cargo is delivered, this field can be sent as `true`. */
  isSendNotification?: InputMaybe<Scalars['Boolean']['input']>;
  /** It is the tracking link of the order package. */
  trackingLink?: InputMaybe<Scalars['String']['input']>;
  /** It is the tracking number of the order package. */
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

export enum TransactionCardAssociationEnum {
  AmericanExpress = 'AMERICAN_EXPRESS',
  MasterCard = 'MASTER_CARD',
  Troy = 'TROY',
  Visa = 'VISA'
}

export enum TransactionCardTypeEnum {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Prepaid = 'PREPAID'
}

export type TransactionError = {
  __typename?: 'TransactionError';
  code?: Maybe<Scalars['String']['output']>;
  declineCode?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type TransactionInstallmentPrice = {
  __typename?: 'TransactionInstallmentPrice';
  installmentCount?: Maybe<Scalars['Float']['output']>;
  installmentPrice?: Maybe<Scalars['Float']['output']>;
  originalRate?: Maybe<Scalars['Float']['output']>;
  rate?: Maybe<Scalars['Float']['output']>;
  totalPrice?: Maybe<Scalars['Float']['output']>;
};

export type TransactionPaymentMethodDetail = {
  __typename?: 'TransactionPaymentMethodDetail';
  bankName?: Maybe<Scalars['String']['output']>;
  binNumber: Scalars['String']['output'];
  cardAssociation?: Maybe<TransactionCardAssociationEnum>;
  cardFamily?: Maybe<Scalars['String']['output']>;
  cardType?: Maybe<TransactionCardTypeEnum>;
  installment?: Maybe<TransactionInstallmentPrice>;
  lastFourDigits: Scalars['String']['output'];
  paymentMethodName?: Maybe<Scalars['String']['output']>;
  threeDSecure: Scalars['Boolean']['output'];
};

export enum TransactionStatusEnum {
  Authorized = 'AUTHORIZED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum TransactionTypeEnum {
  Refund = 'REFUND',
  Sale = 'SALE',
  Void = 'VOID'
}

export type UpdateOrderAddressesInput = {
  /** The address information to which the order will be billing. */
  billingAddress?: InputMaybe<OrderAddressInput>;
  /**
   * It is the order id for which the invoice is issued.
   *  * Is the entered id must be exist in ikas.
   */
  orderId: Scalars['String']['input'];
  /** The address information to which the order will be shipping. */
  shippingAddress?: InputMaybe<OrderAddressInput>;
};

export type UpdateOrderInput = {
  editReason: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  orderLineItems: Array<OrderLineItemInput>;
  restockItems?: Scalars['Boolean']['input'];
};

export type UpdateOrderPackageStatusInput = {
  /**
   * It is the order id whose status will be updated.
   *  * Is the entered id must be exist in ikas.
   */
  orderId: Scalars['String']['input'];
  /** A list of package objects, each containing input about an package in the order. */
  packages: Array<UpdateOrderPackageStatusPackagesInput>;
  /** It is the source id of the order. */
  sourceId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderPackageStatusPackagesInput = {
  /** If the package fulfill status is an `ERROR` , this field can be sent as full. */
  errorMessage?: InputMaybe<Scalars['String']['input']>;
  /**
   * It is the package id whose status will be updated.
   *  * Is the entered id must be exist in ikas.
   */
  packageId: Scalars['String']['input'];
  /** It is the source id of the package. */
  sourceId?: InputMaybe<Scalars['String']['input']>;
  /** It is the status enum  of the will be updated package */
  status: OrderPackageFulfillStatusEnum;
  /** It is the tracking information of the package */
  trackingInfo?: InputMaybe<TrackingInfoDetailInput>;
};

export type UpdateOrderTagInput = {
  orderId: Scalars['String']['input'];
  orderTagId: Scalars['String']['input'];
};

export type UpdateProductSalesChannelStatusInput = {
  /** Status of the product in the updated sales channels. */
  active: Scalars['Boolean']['input'];
  /** Id of the product to update its sales channels. */
  productId: Scalars['String']['input'];
};

export enum UserAgentDeviceType {
  Camera = 'CAMERA',
  Car = 'CAR',
  Console = 'CONSOLE',
  Desktop = 'DESKTOP',
  FeaturePhone = 'FEATURE_PHONE',
  Other = 'OTHER',
  Peripheral = 'PERIPHERAL',
  Phablet = 'PHABLET',
  PortableMediaPlayer = 'PORTABLE_MEDIA_PLAYER',
  Smartphone = 'SMARTPHONE',
  SmartDisplay = 'SMART_DISPLAY',
  SmartSpeaker = 'SMART_SPEAKER',
  Tablet = 'TABLET',
  Television = 'TELEVISION',
  Wearable = 'WEARABLE'
}

export type Variant = {
  __typename?: 'Variant';
  /** List of variant attributes. */
  attributes?: Maybe<Array<ProductAttributeValue>>;
  /** List of barcode for the variant. */
  barcodeList?: Maybe<Array<Scalars['String']['output']>>;
  /** Show the product bundle settings. */
  bundleSettings?: Maybe<BundleSettingsModel>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** Id of product file. */
  fileId?: Maybe<Scalars['String']['output']>;
  /** Hs code of the variant. */
  hsCode?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** List of images for variant. */
  images?: Maybe<Array<ProductImage>>;
  /** Whether the variant is active or not. */
  isActive: Scalars['Boolean']['output'];
  /** List of prices for the variant. */
  prices: Array<ProductPrice>;
  /** Whether to sell if variant is out of stock or not. */
  sellIfOutOfStock?: Maybe<Scalars['Boolean']['output']>;
  /** SKU of the variant. */
  sku?: Maybe<Scalars['String']['output']>;
  stocks?: Maybe<Array<ProductStockLocation>>;
  /** Translations for the product. */
  unit?: Maybe<VariantUnitModel>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** List of variant value ids. */
  variantValueIds?: Maybe<Array<VariantValueRelation>>;
  /** Weight of the variant. */
  weight?: Maybe<Scalars['Float']['output']>;
};

export type VariantInput = {
  attributes?: InputMaybe<Array<ProductAttributeValueInput>>;
  barcodeList?: InputMaybe<Array<Scalars['String']['input']>>;
  bundleSettings?: InputMaybe<BundleSettingsInput>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  fileId?: InputMaybe<Scalars['String']['input']>;
  hsCode?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<ProductImageInput>>;
  isActive?: Scalars['Boolean']['input'];
  prices: Array<ProductPriceInput>;
  sellIfOutOfStock?: InputMaybe<Scalars['Boolean']['input']>;
  sku?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<VariantUnitModelInput>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  variantValueIds?: InputMaybe<Array<VariantValueRelationInput>>;
  weight?: InputMaybe<Scalars['Float']['input']>;
};

export type VariantPriceInput = {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** New prices info to update. This operation overrides price objects given here. */
  price: ProductPriceInput;
  /** Id of the corresponding product. */
  productId: Scalars['String']['input'];
  /** Id of the variant that's prices to be updated. */
  variantId: Scalars['String']['input'];
};

/** Variant Selection Types */
export enum VariantSelectionTypeEnum {
  Choice = 'CHOICE',
  Color = 'COLOR'
}

export type VariantType = {
  __typename?: 'VariantType';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** Product variant type name information. **For example: Size, Color, Number etc.**.It can be a maximum of 100 characters. */
  name: Scalars['String']['output'];
  /** Product variant type selection type. It can be choice or color. */
  selectionType: VariantSelectionTypeEnum;
  /** It is the translation information of the product variant types. */
  translations?: Maybe<Array<VariantTypeTranslation>>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
  /** Variant values used in Variant type. ** For example, variant type: Size. Variant values can be thought of as S, M, L, XL. **It is unique according to the value name.Values array size must have at least one element. */
  values: Array<VariantValue>;
};

export type VariantTypeInput = {
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Product variant type name information. **For example: Size, Color, Number etc.**.It can be a maximum of 100 characters. */
  name: Scalars['String']['input'];
  /** Product variant type selection type. It can be choice or color. */
  selectionType: VariantSelectionTypeEnum;
  /** It is the translation information of the product variant types. */
  translations?: InputMaybe<Array<VariantTypeTranslationInput>>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
  /** Variant values used in Variant type. ** For example, variant type: Size. Variant values can be thought of as S, M, L, XL. **It is unique according to the value name.Values array size must have at least one element. */
  values: Array<VariantValueInput>;
};

export type VariantTypeTranslation = {
  __typename?: 'VariantTypeTranslation';
  /** It is the name information of the translation. */
  locale: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
  /** It is the translation information of the values of variant types. */
  values?: Maybe<Array<VariantValueTranslation>>;
};

export type VariantTypeTranslationInput = {
  /** It is the name information of the translation. */
  locale: Scalars['String']['input'];
  /** It is the information in which language the translation is saved. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** It is the translation information of the values of variant types. */
  values?: InputMaybe<Array<VariantValueTranslationInput>>;
};

export type VariantUnitModel = {
  __typename?: 'VariantUnitModel';
  /** Amount of the product unit. */
  amount?: Maybe<Scalars['Float']['output']>;
  /** Type of the product unit. */
  type: ProductUnitTypeEnum;
};

export type VariantUnitModelInput = {
  amount: Scalars['Float']['input'];
  type: ProductUnitTypeEnum;
};

export type VariantValue = {
  __typename?: 'VariantValue';
  /** It is the color code information of the variant values. It can be a maximum of 7 characters. */
  colorCode?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  /** It is the name information of the values used in the Variant type. Value information of Variant type is unique according to name.It can be a maximum of 100 characters. */
  name: Scalars['String']['output'];
  /** It is the image information of the variant values. */
  thumbnailImageId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type VariantValueInput = {
  /** It is the color code information of the variant values. It can be a maximum of 7 characters. */
  colorCode?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  /** It is the name information of the values used in the Variant type. Value information of Variant type is unique according to name.It can be a maximum of 100 characters. */
  name: Scalars['String']['input'];
  /** It is the image information of the variant values. */
  thumbnailImageId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

export type VariantValueRelation = {
  __typename?: 'VariantValueRelation';
  /** Id of variant type. */
  variantTypeId: Scalars['String']['output'];
  /** iD of the variant value. */
  variantValueId: Scalars['String']['output'];
};

export type VariantValueRelationInput = {
  variantTypeId: Scalars['String']['input'];
  variantValueId: Scalars['String']['input'];
};

export type VariantValueTranslation = {
  __typename?: 'VariantValueTranslation';
  id: Scalars['String']['output'];
  /** It is the information in which language the translation is saved. */
  name?: Maybe<Scalars['String']['output']>;
};

export type VariantValueTranslationInput = {
  id: Scalars['String']['input'];
  /** It is the information in which language the translation is saved. */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Vendor = {
  __typename?: 'Vendor';
  address?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  staffName?: Maybe<Scalars['String']['output']>;
  status?: Maybe<VendorStatusEnum>;
  taxNumber?: Maybe<Scalars['String']['output']>;
  taxOffice?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type VendorInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Timestamp']['input']>;
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  staffName?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<VendorStatusEnum>;
  taxNumber?: InputMaybe<Scalars['String']['input']>;
  taxOffice?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Timestamp']['input']>;
};

/** Vendor Status Enum */
export enum VendorStatusEnum {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED'
}

export type VolumeDiscountMinMaxRangeField = {
  __typename?: 'VolumeDiscountMinMaxRangeField';
  /** Indicates the minimum amount of the product to be included in the rule. */
  max?: Maybe<Scalars['Float']['output']>;
  /** Indicates the minimum amount of the product to be included in the rule. */
  min: Scalars['Float']['output'];
};

export type VolumeDiscountMinMaxRangeFieldInput = {
  /** Indicates the maximum amount of the product to be included in the rule. */
  max?: InputMaybe<Scalars['Float']['input']>;
  /** Indicates the minimum amount of the product to be included in the rule. */
  min: Scalars['Float']['input'];
};

/** **Webhook** model description. */
export type Webhook = {
  __typename?: 'Webhook';
  createdAt?: Maybe<Scalars['Timestamp']['output']>;
  deleted: Scalars['Boolean']['output'];
  /** URL address that webhooks will be pushed. */
  endpoint: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Scope of webhook that defines content of webhook. */
  scope: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Timestamp']['output']>;
};

export type WebhookInput = {
  /** `endpoint` must be a valid `URL` address. */
  endpoint: Scalars['String']['input'];
  /** You can filter webhooks by using specific **SalesChannel** id. Please check `listSalesChannel` query to retrieve active sales channel ids. */
  salesChannelIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Valid scopes are `store/order/created` `store/order/updated` `store/product/created` `store/product/updated` `store/customer/created` `store/customer/updated` `store/customerFavoriteProducts/created` `store/customerFavoriteProducts/updated` `store/stock/created` `store/stock/updated`. */
  scopes: Array<Scalars['String']['input']>;
};

export type SaveWebhookMutationVariables = Exact<{
  scopes: Array<Scalars['String']['input']> | Scalars['String']['input'];
  endpoint: Scalars['String']['input'];
}>;


export type SaveWebhookMutation = { __typename?: 'Mutation', saveWebhook?: Array<{ __typename?: 'Webhook', id: string }> | null };

export type DeleteWebhookMutationVariables = Exact<{
  scopes: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type DeleteWebhookMutation = { __typename?: 'Mutation', deleteWebhook: boolean };

export type ListWebhooksQueryVariables = Exact<{ [key: string]: never; }>;


export type ListWebhooksQuery = { __typename?: 'Query', listWebhook: Array<{ __typename?: 'Webhook', id: string, scope: string, endpoint: string }> };

export type ListOrderQueryVariables = Exact<{
  pagination: PaginationInput;
  status?: InputMaybe<OrderStatusEnumInputFilter>;
}>;


export type ListOrderQuery = { __typename?: 'Query', listOrder: { __typename?: 'OrderPaginationResponse', page: number, hasNext: boolean, count: number, limit: number, data: Array<{ __typename?: 'Order', branchSessionId?: string | null, cancelReason?: OrderCancelledReasonEnum | null, cancelledAt?: any | null, clientIp?: string | null, createdAt?: any | null, currencyCode: string, deleted: boolean, giftPackageNote?: string | null, host?: string | null, id: string, isGiftPackage?: boolean | null, merchantId: string, note?: string | null, orderNumber?: string | null, orderPackageSequence?: number | null, orderPackageStatus?: OrderPackageStatusEnum | null, orderPaymentStatus?: OrderPaymentStatusEnum | null, orderSequence?: number | null, orderTagIds?: Array<string> | null, orderedAt?: any | null, shippingMethod: OrderShippingMethodEnum, status: OrderStatusEnum, terminalId?: string | null, totalFinalPrice: number, totalPrice: number, updatedAt?: any | null, userAgent?: string | null, billingAddress?: { __typename?: 'OrderAddress', addressLine1: string, addressLine2?: string | null, company?: string | null, firstName: string, id?: string | null, isDefault: boolean, lastName: string, phone?: string | null, postalCode?: string | null, taxNumber?: string | null, taxOffice?: string | null, city: { __typename?: 'OrderAddressCity', code?: string | null, id?: string | null, name: string }, country: { __typename?: 'OrderAddressCountry', code?: string | null, id?: string | null, iso2?: string | null, iso3?: string | null, name: string }, district?: { __typename?: 'OrderAddressDistrict', code?: string | null, id?: string | null, name?: string | null } | null, state?: { __typename?: 'OrderAddressState', code?: string | null, id?: string | null, name?: string | null } | null } | null, branch?: { __typename?: 'OrderBranch', id: string, name?: string | null } | null, currencyRates: Array<{ __typename?: 'OrderCurrencyRate', code: string, originalRate: number, rate: number }>, customer?: { __typename?: 'OrderCustomer', email?: string | null, firstName?: string | null, id?: string | null, isGuestCheckout?: boolean | null, lastName?: string | null, phone?: string | null } | null, giftPackageLines?: Array<{ __typename?: 'OrderGiftPackageLine', price: number, taxValue?: number | null }> | null, invoices?: Array<{ __typename?: 'Invoice', appId: string, appName: string, createdAt?: any | null, id: string, invoiceNumber: string, storeAppId: string, type: InvoiceTypeEnum }> | null, orderAdjustments?: Array<{ __typename?: 'OrderAdjustment', amount: number, amountType: OrderAmountTypeEnum, campaignId?: string | null, couponId?: string | null, name: string, order: number, type: OrderAdjustmentEnum, appliedOrderLines?: Array<{ __typename?: 'OrderAdjustmentAppliedOrderLine', amount: number, appliedQuantity: number, orderLineId: string }> | null }> | null, orderLineItems: Array<{ __typename?: 'OrderLineItem', createdAt?: any | null, currencyCode?: string | null, deleted: boolean, discountPrice?: number | null, finalPrice?: number | null, id: string, originalOrderLineItemId?: string | null, price: number, quantity: number, status: OrderLineItemStatusEnum, statusUpdatedAt?: any | null, stockLocationId?: string | null, taxValue?: number | null, updatedAt?: any | null, discount?: { __typename?: 'OrderLineDiscount', amount: number, amountType: OrderAmountTypeEnum, reason?: string | null } | null, options?: Array<{ __typename?: 'OrderLineOption', name: string, productOptionId: string, productOptionsSetId: string, type: ProductOptionTypeEnum, values: Array<{ __typename?: 'OrderLineOptionValue', name?: string | null, price?: number | null, value: string }> }> | null, variant: { __typename?: 'OrderLineVariant', barcodeList?: Array<string> | null, id?: string | null, mainImageId?: string | null, name: string, productId?: string | null, sku?: string | null, slug?: string | null, tagIds?: Array<string> | null, type?: number | null, brand?: { __typename?: 'OrderLineVariantBrand', id: string, name: string } | null, categories?: Array<{ __typename?: 'OrderLineVariantCategory', id: string, name: string, categoryPath?: Array<{ __typename?: 'OrderLineVariantCategoryPath', id: string, name: string }> | null }> | null, prices?: Array<{ __typename?: 'OrderLineVariantPrice', buyPrice?: number | null, currency?: string | null, discountPrice?: number | null, priceListId?: string | null, sellPrice: number }> | null, variantValues?: Array<{ __typename?: 'OrderLineVariantVariantValues', order: number, variantTypeId: string, variantTypeName?: string | null, variantValueId: string, variantValueName?: string | null }> | null } }>, orderPackages?: Array<{ __typename?: 'OrderPackage', createdAt?: any | null, deleted: boolean, errorMessage?: string | null, id: string, note?: string | null, orderLineItemIds: Array<string>, orderPackageFulfillStatus: OrderPackageFulfillStatusEnum, orderPackageNumber: string, stockLocationId: string, updatedAt?: any | null, trackingInfo?: { __typename?: 'TrackingInfo', barcode?: string | null, cargoCompany?: string | null, isSendNotification?: boolean | null, trackingLink?: string | null, trackingNumber?: string | null } | null }> | null, paymentMethods?: Array<{ __typename?: 'OrderPaymentMethod', price: number, type: PaymentMethodTypeEnum }> | null, priceList?: { __typename?: 'OrderPriceList', id: string, name?: string | null } | null, salesChannel: { __typename?: 'OrderSalesChannel', id: string, name?: string | null, type?: number | null }, shippingAddress?: { __typename?: 'OrderAddress', addressLine1: string, addressLine2?: string | null, company?: string | null, firstName: string, id?: string | null, isDefault: boolean, lastName: string, phone?: string | null, postalCode?: string | null, taxNumber?: string | null, taxOffice?: string | null, city: { __typename?: 'OrderAddressCity', code?: string | null, id?: string | null, name: string }, country: { __typename?: 'OrderAddressCountry', code?: string | null, id?: string | null, iso2?: string | null, iso3?: string | null, name: string }, district?: { __typename?: 'OrderAddressDistrict', code?: string | null, id?: string | null, name?: string | null } | null, state?: { __typename?: 'OrderAddressState', code?: string | null, id?: string | null, name?: string | null } | null } | null, shippingLines?: Array<{ __typename?: 'OrderShippingLine', isRefunded?: boolean | null, price: number, shippingSettingsId?: string | null, shippingZoneRateId?: string | null, taxValue?: number | null, title: string }> | null, staff?: { __typename?: 'OrderStaff', email: string, firstName: string, lastName: string } | null, storefront?: { __typename?: 'OrderStorefront', id: string, name?: string | null } | null, storefrontRouting?: { __typename?: 'OrderStorefrontRouting', domain?: string | null, id: string, locale?: string | null, path?: string | null, priceListId?: string | null } | null, storefrontTheme?: { __typename?: 'OrderStorefrontTheme', id: string, name?: string | null, themeId?: string | null, themeVersionId?: string | null } | null, taxLines?: Array<{ __typename?: 'OrderTaxLine', price: number, rate: number }> | null }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const SaveWebhookDocument = new TypedDocumentString(`
    mutation saveWebhook($scopes: [String!]!, $endpoint: String!) {
  saveWebhook(input: {scopes: $scopes, endpoint: $endpoint}) {
    id
  }
}
    `) as unknown as TypedDocumentString<SaveWebhookMutation, SaveWebhookMutationVariables>;
export const DeleteWebhookDocument = new TypedDocumentString(`
    mutation deleteWebhook($scopes: [String!]!) {
  deleteWebhook(scopes: $scopes)
}
    `) as unknown as TypedDocumentString<DeleteWebhookMutation, DeleteWebhookMutationVariables>;
export const ListWebhooksDocument = new TypedDocumentString(`
    query listWebhooks {
  listWebhook {
    id
    scope
    endpoint
  }
}
    `) as unknown as TypedDocumentString<ListWebhooksQuery, ListWebhooksQueryVariables>;
export const ListOrderDocument = new TypedDocumentString(`
    query listOrder($pagination: PaginationInput!, $status: OrderStatusEnumInputFilter) {
  listOrder(pagination: $pagination, status: $status) {
    page
    hasNext
    count
    limit
    data {
      billingAddress {
        addressLine1
        addressLine2
        city {
          code
          id
          name
        }
        company
        country {
          code
          id
          iso2
          iso3
          name
        }
        district {
          code
          id
          name
        }
        firstName
        id
        isDefault
        lastName
        phone
        postalCode
        state {
          code
          id
          name
        }
        taxNumber
        taxOffice
      }
      branch {
        id
        name
      }
      branchSessionId
      cancelReason
      cancelledAt
      clientIp
      createdAt
      currencyCode
      currencyRates {
        code
        originalRate
        rate
      }
      customer {
        email
        firstName
        id
        isGuestCheckout
        lastName
        phone
      }
      deleted
      giftPackageLines {
        price
        taxValue
      }
      giftPackageNote
      host
      id
      invoices {
        appId
        appName
        createdAt
        id
        invoiceNumber
        storeAppId
        type
      }
      isGiftPackage
      merchantId
      note
      orderAdjustments {
        amount
        amountType
        appliedOrderLines {
          amount
          appliedQuantity
          orderLineId
        }
        campaignId
        couponId
        name
        order
        type
      }
      orderLineItems {
        createdAt
        currencyCode
        deleted
        discount {
          amount
          amountType
          reason
        }
        discountPrice
        finalPrice
        id
        options {
          name
          productOptionId
          productOptionsSetId
          type
          values {
            name
            price
            value
          }
        }
        originalOrderLineItemId
        price
        quantity
        status
        statusUpdatedAt
        stockLocationId
        taxValue
        updatedAt
        variant {
          barcodeList
          brand {
            id
            name
          }
          categories {
            categoryPath {
              id
              name
            }
            id
            name
          }
          id
          mainImageId
          name
          prices {
            buyPrice
            currency
            discountPrice
            priceListId
            sellPrice
          }
          productId
          sku
          slug
          tagIds
          type
          variantValues {
            order
            variantTypeId
            variantTypeName
            variantValueId
            variantValueName
          }
        }
      }
      orderNumber
      orderPackageSequence
      orderPackageStatus
      orderPackages {
        createdAt
        deleted
        errorMessage
        id
        note
        orderLineItemIds
        orderPackageFulfillStatus
        orderPackageNumber
        stockLocationId
        trackingInfo {
          barcode
          cargoCompany
          isSendNotification
          trackingLink
          trackingNumber
        }
        updatedAt
      }
      orderPaymentStatus
      orderSequence
      orderTagIds
      orderedAt
      paymentMethods {
        price
        type
      }
      priceList {
        id
        name
      }
      salesChannel {
        id
        name
        type
      }
      shippingAddress {
        addressLine1
        addressLine2
        city {
          code
          id
          name
        }
        company
        country {
          code
          id
          iso2
          iso3
          name
        }
        district {
          code
          id
          name
        }
        firstName
        id
        isDefault
        lastName
        phone
        postalCode
        state {
          code
          id
          name
        }
        taxNumber
        taxOffice
      }
      shippingLines {
        isRefunded
        price
        shippingSettingsId
        shippingZoneRateId
        taxValue
        title
      }
      shippingMethod
      staff {
        email
        firstName
        lastName
      }
      status
      storefront {
        id
        name
      }
      storefrontRouting {
        domain
        id
        locale
        path
        priceListId
      }
      storefrontTheme {
        id
        name
        themeId
        themeVersionId
      }
      taxLines {
        price
        rate
      }
      terminalId
      totalFinalPrice
      totalPrice
      updatedAt
      userAgent
    }
  }
}
    `) as unknown as TypedDocumentString<ListOrderQuery, ListOrderQueryVariables>;