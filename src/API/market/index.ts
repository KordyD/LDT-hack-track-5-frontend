import axios from 'axios';
import { URL } from '..';

interface getAllProductsResponse {
  productId: 0;
  companyId: 0;
  imagePath: 'string';
  name: 'string';
  description: 'string';
  cost: 0;
}

export const buyProduct = async (productID: number) => {
  const response: boolean = await axios.post(
    URL + `/market/products/${productID}`
  );
  return response;
};

export const getAllProducts = async () => {
  const response: getAllProductsResponse[] = await axios.get(
    URL + '/login/products'
  );
  return response;
};
