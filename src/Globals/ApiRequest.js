import { ApiGet, ApiPost } from "../Core/HttpsConnection"

export const getAllProduct = async (limit) => {
   const data = await ApiGet("/products?limit="+limit);
   return data;
}

export const getAllCategories = async () => {
   const data = await ApiGet("/products/categories");
   return data;
}

export const getCategory = async (item) => {
   const data = await ApiGet("/products/category/" + item);
   return data;
}

export const getProduct = async (id) => {
   const data = await ApiGet("/products/" + id);
   return data;
}