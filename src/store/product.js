import { defineStore } from "pinia";
import axios from "axios";

const api = axios.create({
  baseURL: "/dummy",
});

export const useProductStore = defineStore("product", () => {
  const getProducts = async (args) => api.get("/products", { params: args });

  const getProductsByCategory = async (category, args) =>
    api.get("/products/category/" + category, { params: args });

  const getProduct = async (id) => api.get("/products/" + id);

  const getCategories = async () => api.get("/products/category-list");

  return { getProducts, getProduct, getCategories, getProductsByCategory };
});