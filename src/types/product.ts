export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface FetchState {
  data: Product[];
  loading: boolean;
  error: string | null;
}
