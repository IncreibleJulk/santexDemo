import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ProductList, } from "./components/ProductList";
import { GET_PRODUCTS, } from "./graphql/queries";
import { ProductItem } from './components/Types';

const itemsMock:ProductItem =
  {
    "id": "2",
    "name": "Tablet",
    "description": "If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a \"computer.\" It would be Tablet.",
    "variants": [
      {
        "productId": "2",
        "price": 32900,
        "id": "5",
        "currencyCode": "USD"
      }
    ],
    "featuredAsset": {
      "source": "https://demo.vendure.io/assets/source/5a/kelly-sikkema-685291-unsplash.jpg",
      "preview": "https://demo.vendure.io/assets/preview/b8/kelly-sikkema-685291-unsplash__preview.jpg",
      "type": "IMAGE"
    }
  };

const mocks =
  {
    request: {
      query: GET_PRODUCTS,
      variables: {
      }
    },
    result: {
      "data": {
        "products": {
          "totalItems": 54,
          "items": [
            {
              "id": "1",
              "name": "Laptop",
              "description": "Now equipped with seventh-generation Intel Core processors, Laptop is snappier than ever. From daily tasks like launching apps and opening files to more advanced computing, you can power through your day thanks to faster SSDs and Turbo Boost processing up to 3.6GHz.",
              "variants": [
                {
                  "id": "1",
                  "productId": "1",
                  "price": 129900
                },
                {
                  "id": "2",
                  "productId": "1",
                  "price": 139900
                },
                {
                  "id": "3",
                  "productId": "1",
                  "price": 219900
                },
                {
                  "id": "4",
                  "productId": "1",
                  "price": 229900
                }
              ],
              "featuredAsset": {
                "source": "https://demo.vendure.io/assets/source/b6/derick-david-409858-unsplash.jpg",
                "preview": "https://demo.vendure.io/assets/preview/71/derick-david-409858-unsplash__preview.jpg",
                "type": "IMAGE"
              }
            }
          ]
        }
      }
    }

  };

  it('renders without error', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProductList products={[]}/>
      </MockedProvider>
    );

    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  it("render Empty product list", async () => {

    render(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <ProductList products={[]}/>
      </MockedProvider>
    );
    expect(await screen.findByText("Empty list...")).toBeInTheDocument();
  });

  it("search elements", async () => {

    render(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <ProductList products={[itemsMock]}/>
      </MockedProvider>
    );
    await new Promise((resolve) => setTimeout(resolve, 3000))

    expect(await screen.findByText("Tablet")).toBeInTheDocument();
    expect(await screen.findByText("If the computer were invented today, what would it look like? It would be powerful enough for any task. So mobile you could take it everywhere. And so intuitive you could use it any way you wanted — with touch, a keyboard, or even a pencil. In other words, it wouldn’t really be a \"computer.\" It would be Tablet.")).toBeInTheDocument();
  });




