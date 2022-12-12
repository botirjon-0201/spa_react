import { useContext } from "react";
import { MainContext } from "../context";
import MealItem from "./MealItem";

export default function MealsList() {
  const [{ meals }] = useContext(MainContext);

  return (
    <div className="list">
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}
