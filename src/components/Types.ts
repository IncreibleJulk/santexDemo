
export type ProductItem = {
  id: string,
  name: string,
  description: string,
  variants: [{
    id: string,
    productId: string,
    price: number,
    currencyCode: string
  }],
  featuredAsset: {
    source: string,
    preview: string,
    type: string
  }
}

export type Products = {
  totalItems: number,
  items: ProductItem[]
}

export type CardProps = {
  key: string;
  imageSource: string;
  title: string;
  subtitle: string;
  description: string;
  children: JSX.Element;
}