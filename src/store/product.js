import { defineStore } from "pinia";
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const useProductStore = defineStore("product", () => {
  const getProducts = async ({ limit = 12, skip = 0 } = {}) => {
  const { data } = await api.get("/doors");

  const mapped = data.map(mapDoorToProduct);

  return {
    data: {
      products: mapped.slice(skip, skip + limit),
      total: mapped.length,
    },
  };
};

  const getProductsByCategory = async (category, args) =>
    api.get("/products/category/" + category, { params: args });

  const getProduct = async (id) => {
  try {
    const { data } = await api.get("/doors");

    const list = Array.isArray(data) ? data : data.doors || [];

    const found = list.find((item) => item.id == id);

    return {
      data: mapDoorToProduct(found || {}),
    };
  } catch (error) {
    console.error("getProduct error:", error);
    return { data: {} };
  }
};

  const getCategories = async () => api.get("/products/category-list");

 const mapDoorToProduct = (item) => {
  return {
    id: item.id,

    // 👇 главное изменение
    title: `Модель ${item.model}`,

    description: item.description || "",

    price: item.price || 0, // если цены нет на бэке

    discountPercentage: 0,

    thumbnail: item.image
      ? "https://crm-kukcha.vercel.app" + item.image
      : "",

    category: item.type || "doors",

    stock: item.fill ? parseInt(item.fill) : 0,
  };
};


  return { getProducts, getProduct, getCategories, getProductsByCategory };
});