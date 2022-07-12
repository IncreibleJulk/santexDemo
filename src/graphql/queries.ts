import { gql } from '@apollo/client';
import { VARIANT_FIELDS } from './fragments';

export const GET_PRODUCTS = gql`
  ${VARIANT_FIELDS}
  query GetProducts {
    products(options: { take: 10 }) {
      totalItems
      items {
        id
        name
        description
        variants {
          ...VariantFields
        }
        featuredAsset {
          source
          preview
          type          
        }        
      }
    }
  }
`;

