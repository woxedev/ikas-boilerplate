import { graphql } from "../graphql";

export const listOrder = graphql(`
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
`);
