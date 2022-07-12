import React from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from './graphql/queries';
import useStateWithStorage from './hooks/useStateWithStorage';
import styled from 'styled-components';

export const SubtotalContext = React.createContext({
  subtotal: 0,
  setSubtotal: (val: number) => {}
});

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  background-color: #0000001a;
  `;

function App() {
  const { loading, error, data } = useQuery(GET_PRODUCTS,{variables: {take:10}});
  const [subtotal, setSubtotal] = useStateWithStorage('subtotal',0);

  return (
    <>
      <SubtotalContext.Provider value={{subtotal: subtotal,setSubtotal:setSubtotal}}>
        <Header/>
        <MainLayout>
          { loading && <div>Loading...</div> }
          { error && <div>Loading error!</div> }
          { data && data.products && data.products.items &&
            <ProductList products={data.products.items}></ProductList>
          }
        </MainLayout>
      </SubtotalContext.Provider>
    </>
  );
}

export default App;
