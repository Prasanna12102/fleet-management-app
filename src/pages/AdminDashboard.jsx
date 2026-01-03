import RestaurantForm from "../components/RestaurantForm";
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurants } from "../utils/localStorage";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [data, setData] = useState([]);
  useEffect(()=>setData(getRestaurants()),[]);
  return (
    <>
      <RestaurantForm refresh={setData} />
      {data.map(r=> <RestaurantCard key={r.id} data={r} refresh={setData} />)}
    </>
  );
}