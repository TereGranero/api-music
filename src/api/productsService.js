import httpClient from './httpClient';

const endpoint = '/products';

export const getAllProducts = async () => {
  const res = await httpClient.get(endpoint);
  return res.data;
};

export const getProductById = async (id) => {
  const res = await httpClient.get(`${endpoint}/${id}`);
  return res.data;
};

export const createProduct = async (product) => {
  const res = await httpClient.post(endpoint, product);
  return res.data;
};

export const updateProduct = async (id, product) => {
  const res = await httpClient.put(`${endpoint}/${id}`, product);
  return res.data;
};

export const deleteProduct = async (id) => {
  const res = await httpClient.delete(`${endpoint}/${id}`);
  return res.data;
};