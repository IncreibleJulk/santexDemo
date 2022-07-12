import { gql } from '@apollo/client';

export const VARIANT_FIELDS = gql`
  fragment VariantFields on ProductVariant {
    id
    productId
    price
    currencyCode
  }
`;