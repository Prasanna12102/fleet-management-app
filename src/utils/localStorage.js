const KEY = "restaurants";

export const getRestaurants = () => JSON.parse(localStorage.getItem(KEY)) || [];
export const saveRestaurants = (data) => localStorage.setItem(KEY, JSON.stringify(data));