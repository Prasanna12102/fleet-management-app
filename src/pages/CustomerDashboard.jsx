import { getRestaurants } from "../utils/localStorage";
import RestaurantCard from "../components/RestaurantCard";
import { useEffect, useState } from "react";

export default function CustomerDashboard() {
  const [data, setData] = useState([]);
  useEffect(()=>setData(getRestaurants()),[]);
  return data.map(r=> <RestaurantCard key={r.id} data={r} />);
}