import { gql } from '@apollo/client';

export const ADD_ITEM_TO_ORDER = gql`
  mutation($productVariantId: ID!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: 1) {
      ... on Order {
        id
        currencyCode
        subTotal
        totalWithTax
      }
      ... on NegativeQuantityError {
        errorCode
        message
      }
      ... on OrderModificationError {
        errorCode
        message
      }
      ... on OrderLimitError {
        errorCode
        message
      }
      ... on InsufficientStockError {
        errorCode
        message
      }
    }
  }
`;

export const REMOVE_ALL_ORDER_LINES = gql`
  mutation {
    removeAllOrderLines  {
      ... on Order {
        subTotal
      }
      ... on OrderModificationError {
        errorCode
        message
      }
    }
  }
`;