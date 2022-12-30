import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import { setReciepe, setShowReciepe } from "../redux/reducers/reciepe_slice";
import mealService from "../service/meal_service";

export default function Reciepe() {
  const { reciepe, showReciepe } = useSelector((state) => state.reciepe);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    mealService
      .getMealById(id)
      .then((data) => dispatch(setReciepe(data.meals[0])));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      {!reciepe.idMeal ? (
        <Loader />
      ) : (
        <div className="reciepe">
          <img src={reciepe.strMealThumb} alt={reciepe.strMeal} />
          <h1>{reciepe.strMeal}</h1>
          <h6>
            <b>Category:</b> {reciepe.strCategory}
          </h6>
          {reciepe.strArea ? (
            <h6>
              <b>Area:</b> {reciepe.strArea}
            </h6>
          ) : null}

          <p>{reciepe.strInstructions}</p>

          <button
            className="btn"
            onClick={() => dispatch(setShowReciepe(!showReciepe))}
          >
            Show Reciepe
          </button>

          {showReciepe ? (
            <table className="centered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(reciepe).map((key) => {
                  if (key.includes(`Ingredient`) && reciepe[key]) {
                    return (
                      <tr>
                        <td>{reciepe[key]}</td>
                        <td>{reciepe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                  return false;
                })}
              </tbody>
            </table>
          ) : null}
          {reciepe.strYoutube ? (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                src={`https://www.youtube.com/embed/${reciepe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
                title={id}
              ></iframe>
            </div>
          ) : null}
        </div>
      )}
      <button className="btn" onClick={goBack}>
        Go back
      </button>
    </>
  );
}
