import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import {SubtotalContext} from '../App';
import {Card} from './Card';
import {Button} from './Button';
import { ProductItem } from './Types';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  `;

export function ProductList(props:{products: ProductItem[]}) {
  const [addItemToOrderMutation, { data, loading, error }] = useMutation(ADD_ITEM_TO_ORDER);
  const {setSubtotal} = useContext(SubtotalContext);
  const { products } = props;
  const currencySymbol = '$';


  useEffect(()=>{
    if (data) setSubtotal(data.addItemToOrder.subTotal);
  },[data]);

  if (products.length === 0) return <div>Empty list...</div>;

  return <ListContainer>
      { products &&
        products.map((product:any) =>
          <Card key={`product-${product.variants[0].id}`}
                imageSource={product.featuredAsset.preview}
                title={product.name}
                subtitle={`${product.variants[0].currencyCode} ${product.variants[0].price}`}
                description={product.description}
          >
            <Button
              label={"Buy"}
              onClick={() => addItemToOrderMutation({variables:{ productVariantId: product.variants[0].id}})}
            />
          </Card>
        )
      }
    </ListContainer>;
}
