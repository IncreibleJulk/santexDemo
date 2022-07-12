import React, { useContext } from "react";
import { SubtotalContext } from '../App';
import { useMutation } from '@apollo/client';
import { REMOVE_ALL_ORDER_LINES } from '../graphql/mutations';
import { Button } from './Button';
import styled from 'styled-components';

const InfoContainer = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const InfoTitle = styled.div`
  background-color: red;
  display: flex;
  margin-right: 30px;
`;
const HeaderElement = styled.div`
  display: flex;  
  flex-direction: row;
`;

export function Header() {
  const {subtotal,setSubtotal} = useContext(SubtotalContext);
  const [removeAllOrderLines, { data, loading, error }] = useMutation(REMOVE_ALL_ORDER_LINES,{
    onCompleted:(data)=>{
      setSubtotal(0);
    }
  });

  return (
    <header style={{ background: 'red' }}>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <HeaderElement>
        <InfoContainer>
          <InfoTitle>Order subtotal</InfoTitle>
          <div> USD {subtotal}</div>
        </InfoContainer>
        <Button
          label={'Reset order'}
          onClick={()=>removeAllOrderLines()}
          styles={'danger'}
        />
      </HeaderElement>
    </header>
  );
}
