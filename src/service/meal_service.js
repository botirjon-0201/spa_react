import axios from "./api";

const mealService = {
  async getMealById(mealId) {
    const response = await axios(`/lookup.php?i=${mealId}`);
    return await response.data;
  },
  async getAllCategories() {
    const response = await axios(`/categories.php`);
    return await response.data;
  },
  async getFilterCategory(categoryName) {
    const response = await axios(`filter.php?c=${categoryName}`);
    return await response.data;
  },
  async getFilterArea(areaName) {
    const response = await axios(`filter.php?a=${areaName}`);
    return await response.data;
  },
};

export default mealService;
