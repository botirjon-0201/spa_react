import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import Loader from "../components/Loader";
import Search from "../components/Search";
import mealService from "../service/meal_service";
import {
  setCatalog,
  setFilteredCatalog,
} from "../redux/reducers/catalog_slice";

export default function Home() {
  const { catalog } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const { search } = useLocation();

  useEffect(() => {
    mealService.getAllCategories().then((data) => {
      dispatch(setCatalog(data.categories));
      dispatch(
        setFilteredCatalog(
          search
            ? data.categories.filter((item) =>
                item.strCategory
                  .toLowerCase()
                  .startsWith(search.split("=")[1].toLowerCase())
              )
            : data.categories
        )
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div>
      <Search />
      {!catalog.length ? <Loader /> : <CategoryList />}
    </div>
  );
}
