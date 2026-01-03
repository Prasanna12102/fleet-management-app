import { useState } from "react";
import { getRestaurants, saveRestaurants } from "../utils/localStorage";

export default function RestaurantForm({ existing, refresh, onDone }) {
  const [name, setName] = useState(existing?.name || "");
  const submit = e => {
    e.preventDefault();
    const all = getRestaurants();
    if(existing){
      saveRestaurants(all.map(r=>r.id===existing.id?{...r,name}:r));
      onDone && onDone();
    } else {
      saveRestaurants([...all,{id:Date.now(),name}]);
      refresh && refresh(getRestaurants());
    }
  };
  return <form onSubmit={submit}><input value={name} onChange={e=>setName(e.target.value)} /><button>Save</button></form>;
}