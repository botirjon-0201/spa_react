import { Link } from "react-router-dom";

export default function MealItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <h5 className="card-title">
          <b>{strMeal}</b>
        </h5>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`} className="btn">
          Watch Reciepe
        </Link>
      </div>
    </div>
  );
}
