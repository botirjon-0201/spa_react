import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Loader from "../components/Loader";
import { getMealById } from "./api";

export default function Reciepe() {
  const [reciepe, setReciepe] = useState([]);
  const [showReciepe, setShowRecipe] = useState(false);
  const { id } = useParams();
  const { goBack } = useHistory();

  const handleReciepeShow = () => {
    setShowRecipe(!showReciepe);
  };

  useEffect(() => {
    getMealById(id).then((data) => setReciepe(data.meals[0]));
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

          <button className="btn" onClick={handleReciepeShow}>
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
