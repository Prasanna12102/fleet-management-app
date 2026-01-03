import { useParams, useNavigate } from "react-router-dom";
import RestaurantForm from "../components/RestaurantForm";
import { getRestaurants } from "../utils/localStorage";

export default function UpdateRestaurant(){
  const { id } = useParams();
  const nav = useNavigate();
  const rest = getRestaurants().find(r=>r.id==id);
  if(!rest) return null;
  return <RestaurantForm existing={rest} onDone={()=>nav("/admin/dashboard")} />;
}