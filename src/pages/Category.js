import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MealsList from "../components/MealsList";
import { MainContext } from "../context";
import { getFilterCategory } from "./api";

export default function Category() {
  const [{ meals, setMeals }] = useContext(MainContext);
  const { name } = useParams();

  useEffect(() => {
    getFilterCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return <>{!meals.length ? <Loader /> : <MealsList />}</>;
}
