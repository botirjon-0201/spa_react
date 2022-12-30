import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MealsList from "../components/MealsList";
import { setMeals } from "../redux/reducers/meal_slice";
import mealService from "../service/meal_service";

export default function Category() {
  const { meals } = useSelector((state) => state.meal);
  const dispatch = useDispatch();
  const { name } = useParams();

  useEffect(() => {
    mealService
      .getFilterCategory(name)
      .then((data) => dispatch(setMeals(data.meals)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return <>{!meals.length ? <Loader /> : <MealsList meals={meals} />}</>;
}
