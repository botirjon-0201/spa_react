import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MealsList from "../components/MealsList";
import { getFilterCategory } from "./api";

export default function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilterCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Loader /> : <MealsList meals={meals} />}</>;
}
